import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    Column,
    SortDirection,
    SortIndicator,
    Table,
    WindowScroller,
} from 'react-virtualized';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import title from '../../../infrastructure/documentTitle';
import Article from '../../../components/Article';
import SectionHeading from '../../../components/SectionHeading';
import Sidebar from '../Sidebar';
import tomatoTable from './TableData';
import FruitCharacteristicsTable from './FruitCharacteristicsTable';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

function HeaderRow({ className, columns, style }) {
    return (
        <div
            className={className}
            style={{
                background: '#fff',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                ...style,
            }}
        >
            {columns}
        </div>
    );
}

HeaderRow.propTypes = {
    className: PropTypes.string.isRequired,
    columns: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

class TetraCisLycopeneTable extends PureComponent {
    constructor(...args) {
        super(...args);

        const sortBy = 'varietyName';
        const sortDirection = SortDirection.ASC;
        const sortByPlainText = tomatoTable[0][`${sortBy}PlainText`] ? `${sortBy}PlainText` : sortBy;
        const sortedList = _.orderBy(tomatoTable, [sortByPlainText], [sortDirection.toLowerCase()]);

        this.state = {
            clientWidth: 1920, // Default to 1080p
            highlightedRow: null,
            sortBy,
            sortDirection,
            sortedList,
        };

        this.cellMeasurementCache = new CellMeasurerCache({
            defaultHeight: 120,
            defaultWidth: 100,
            fixedHeight: false,
            fixedWidth: true,
            minHeight: 40,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);

        // The initial render must match the server render, so we need to wait
        // until the component has mounted before setting the `clientWidth`
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ clientWidth: document.documentElement.clientWidth });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize = () => {
        this.setState({ clientWidth: document.documentElement.clientWidth });

        this.cellMeasurementCache.clearAll();
    };

    getRowClassName = ({ index }) => {
        const highlightClassName = this.state.highlightedRow === index ? 'highlight ' : '';
        return highlightClassName + (index % 2 ? 'row-even' : 'row-odd');
    };

    cellRenderer = ({
        columnIndex, dataKey, parent, rowIndex,
    }) => {
        let content = this.state.sortedList[rowIndex][dataKey];
        if (this.state.clientWidth <= 1280 && dataKey === 'source') {
            const url = this.state.sortedList[rowIndex].sourceUrl;
            const tooltipText = this.state.sortedList[rowIndex].sourcePlainText;
            content = url ? (
                <a href={url} title={tooltipText} {...targetBlank}>
                    <FontAwesomeIcon icon={faLink} />
                </a>
            ) : null;
        }
        if (dataKey === 'characteristics') {
            content = (
                <Fragment>
                    <strong>Plant:</strong> {this.state.sortedList[rowIndex].plantCharacteristics}
                    <br />
                    <strong>Fruit:</strong> {this.state.sortedList[rowIndex].fruitCharacteristics}
                </Fragment>
            );
        }

        return (
            <CellMeasurer
                cache={this.cellMeasurementCache}
                columnIndex={columnIndex}
                key={dataKey}
                parent={parent}
                rowIndex={rowIndex}
            >
                <div
                    style={{
                        padding: '10px 0',
                        textAlign: dataKey === 'tetraCisLycopene' ? 'right' : 'left',
                        whiteSpace: 'normal',
                    }}
                >
                    {content}
                </div>
            </CellMeasurer>
        );
    };

    headerRenderer = ({
        dataKey,
        label,
        shortName,
        sortBy,
        sortDirection,
        tooltipText,
    }) => {
        const showSortIndicator = sortBy === dataKey;
        const children = [
            <span
                key="label"
                title={tooltipText || label}
            >
                {this.state.clientWidth <= 1280 ? (shortName || label) : label}
            </span>,
        ];

        if (showSortIndicator) {
            children.push(<SortIndicator key="SortIndicator" sortDirection={sortDirection} />);
        }

        return children;
    };

    highlightRow = ({ index }) => {
        this.setState({
            highlightedRow: index === this.state.highlightedRow ? null : index,
        });
    };

    sortList = ({ sortBy, sortDirection }) => {
        let sortByPlainText = tomatoTable[0][`${sortBy}PlainText`] ? `${sortBy}PlainText` : sortBy;
        if (sortBy === 'characteristics') {
            sortByPlainText = 'plantCharacteristicsPlainText';
        }
        const sortedList = _.orderBy(tomatoTable, [sortByPlainText], [sortDirection.toLowerCase()]);
        this.cellMeasurementCache.clearAll();
        this.setState({ sortBy, sortDirection, sortedList });
    };

    renderTomatoTable = () => (
        <WindowScroller>
            {({
                height,
                isScrolling,
                registerChild,
                onChildScroll,
                scrollTop,
            }) => (
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <div ref={registerChild}>
                            <Table
                                autoHeight
                                className="virtualized-table tomato-table"
                                deferredMeasurementCache={this.cellMeasurementCache}
                                headerHeight={60}
                                headerRowRenderer={HeaderRow}
                                height={height}
                                isScrolling={isScrolling}
                                onScroll={onChildScroll}
                                // If we're on a desktop, we can afford to render the entire
                                // table (useful if the user wants to print the page or Ctrl+F,
                                // and this also makes the scrollbar more accurate because the
                                // entire page has been rendered). But if we're on a mobile
                                // device, we probably want to make scrolling smoother by
                                // rendering only those rows that are visible on the viewport.
                                overscanRowCount={this.state.clientWidth > 800 ? this.state.sortedList.length : 10}
                                rowClassName={this.getRowClassName}
                                rowCount={this.state.sortedList.length}
                                rowGetter={({ index }) => this.state.sortedList[index]}
                                rowHeight={this.cellMeasurementCache.rowHeight}
                                onRowClick={this.highlightRow}
                                scrollTop={scrollTop}
                                sort={this.sortList}
                                sortBy={this.state.sortBy}
                                sortDirection={this.state.sortDirection}
                                width={width}
                            >
                                <Column
                                    dataKey="varietyName"
                                    label="Variety Name"
                                    cellRenderer={args => this.cellRenderer({ columnIndex: 0, ...args })}
                                    headerRenderer={args => this.headerRenderer({ shortName: 'Variety', ...args })}
                                    width={150}
                                />

                                <Column
                                    dataKey="tetraCisLycopene"
                                    label="Tetra-cis-lyc"
                                    cellRenderer={args => this.cellRenderer({ columnIndex: 1, ...args })}
                                    headerRenderer={args => this.headerRenderer({
                                        shortName: 'TCL',
                                        tooltipText: 'Tetra-cis-lycopene (mg/100g FW)',
                                        ...args,
                                    })}
                                    width={60}
                                />

                                {this.state.clientWidth > 800 ? (
                                    [
                                        <Column
                                            key="plantCharacteristics"
                                            dataKey="plantCharacteristics"
                                            label="Plant characteristics *"
                                            cellRenderer={args => this.cellRenderer({ columnIndex: 2, ...args })}
                                            headerRenderer={args => this.headerRenderer({
                                                shortName: 'Plant *',
                                                tooltipText: 'Plant characteristics',
                                                ...args,
                                            })}
                                            width={160}
                                        />,

                                        <Column
                                            key="fruitCharacteristics"
                                            dataKey="fruitCharacteristics"
                                            label="Fruit characteristics †"
                                            cellRenderer={args => this.cellRenderer({ columnIndex: 3, ...args })}
                                            headerRenderer={args => this.headerRenderer({
                                                shortName: 'Fruit †',
                                                tooltipText: 'Fruit characteristics',
                                                ...args,
                                            })}
                                            width={160}
                                        />,
                                    ]
                                ) : (
                                    <Column
                                        dataKey="characteristics"
                                        label="Characteristics *†"
                                        cellRenderer={args => this.cellRenderer({ columnIndex: 2, ...args })}
                                        headerRenderer={args => this.headerRenderer({
                                            tooltipText: 'Plant and Fruit characteristics',
                                            ...args,
                                        })}
                                        width={250}
                                    />
                                )}

                                <Column
                                    dataKey="flavour"
                                    label="Flavour ‡"
                                    cellRenderer={args => this.cellRenderer({ columnIndex: 4, ...args })}
                                    headerRenderer={args => this.headerRenderer({
                                        shortName: 'Flavour ‡',
                                        tooltipText: 'Flavour',
                                        ...args,
                                    })}
                                    width={160}
                                />

                                {this.state.clientWidth > 800 && (
                                    <Column
                                        dataKey="source"
                                        label="Sourced from"
                                        cellRenderer={args => this.cellRenderer({ columnIndex: 5, ...args })}
                                        headerRenderer={args => this.headerRenderer({ shortName: 'Source', ...args })}
                                        width={this.state.clientWidth <= 1280 ? 60 : 150}
                                    />
                                )}
                            </Table>
                        </div>
                    )}
                </AutoSizer>
            )}
        </WindowScroller>
    );

    render() {
        const footer = (
            <table style={{ margin: '15px 0 0', width: '100%' }} className="no-border">
                <tbody>
                    <tr>
                        <td
                            style={{
                                padding: '8px 14px 8px 16px',
                                textAlign: 'center',
                                verticalAlign: 'top',
                            }}
                        >
                            <span style={{ fontSize: '24px' }}>*</span>
                        </td>
                        <td>
                            <strong>Indeterminate</strong> tomato plants grow from spring
                            until frost, producing fruit on long vines that can grow 2 metres
                            or taller. <strong>Determinate</strong> plants bear in a shorter
                            time, on shorter vines.
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'top' }}>†</td>
                        <td style={{ padding: '15px 3px' }}>
                            <FruitCharacteristicsTable clientWidth={this.state.clientWidth} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '5px 15px', textAlign: 'center', verticalAlign: 'top' }}>‡</td>
                        <td>
                            Flavour descriptions are subjective and vary with growing conditions.
                            Those in quotation marks may have been generated for promotional
                            purposes.
                        </td>
                    </tr>
                </tbody>
            </table>
        );

        return (
            <Article>
                <div className="wrapper content-with-sidebar">
                    <Sidebar page="tetra-cis-lycopene" />

                    <div className="article-content">
                        <div className="box">
                            <SectionHeading>
                                Heritage tomato varieties known to contain tetra-cis-lycopene
                            </SectionHeading>

                            <p>
                                Tetra-cis-lycopene is a highly beneficial bioavailable form of
                                lycopene, and exhibits a golden-orange or tangerine tomato colour.
                                But not all tomatoes with this colour contain tetra-cis-lycopene,
                                as this colour can also be expressed by beta-carotene. Hence it
                                is necessary to chemically analyse each tomato variety to verify
                                whether or not it contains tetra-cis-lycopene.
                            </p>

                            <p>
                                We provide here a list of all the varieties that we have had
                                analysed and confirmed to have tetra-cis-lycopene to assist
                                health conscious gardeners, healthy food advocates and researchers
                                worldwide. Data has been obtained from the 2015 season.
                            </p>

                            <div className="tomato-table-container">
                                {this.renderTomatoTable()}

                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </Article>
        );
    }
}

export default title(TetraCisLycopeneTable, 'Tetra-cis-lycopene in Tomatoes');

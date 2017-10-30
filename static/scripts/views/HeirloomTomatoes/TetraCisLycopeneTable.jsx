import React, { PureComponent } from 'react';
import _ from 'lodash';
import title from '../../infrastructure/documentTitle';
import Article from '../../components/Article';
import SectionHeading from '../../components/SectionHeading';
import Sidebar from './Sidebar';

const tomatoTable = [
    ['Alice Brewer (orange)', 4.40, 0.02, 3.82, 0, 0],
    ['Amana Orange', 4.30, 0.07, 5.04, 0, 0.01],
    ['Amish Orange Sherbert Heirloom', 4.04, 0, 5.36, 0, 0],
    ['Amish Yellowish Orange Oxheart', 4.44, 0, 8.21, 0, 0],
    ['Aunt Gerties Gold', 4.20, 0.06, 5.73, 0, 0],
    ['Barnes Mountain Orange', 4.30, 0, 6.54, 0, 0],
    ['Big Orange', 4.39, 0.03, 6.14, 0, 0],
    ['Big Yellow', 4.17, 0.04, 4.06, 0, 0.03],
    ['Brown\'s Yellow Giant', 4.29, 0, 3.57, 0, 0],
    ['Bursztyn', 4.31, 0.03, 3.34, 0, 0],
    ['Chuck\'s Golden', 4.48, 0, 5.47, 0, 0],
    ['Dad\'s Sunset', null, 0.04, 1.01, 0.13, 0.04],
    ['Djena Lees Golden Girl', 4.47, 0.04, 5.23, 0, 0.04],
    ['Earl of Edgecomb', 4.04, 0.11, 2.52, 0, 0],
    ['Elbe', 4.26, 0.03, 4.31, 0, 0],
    ['Elfie (orange)', 4.23, 0.06, 4.94, 0, 0.01],
    ['Faribo Goldheart', 4.26, 0.03, 4.90, 0, 0],
    ['Gary Ibsen\'s Gold', 4.35, 0.03, 4.00, 0, 0],
    ['Gary\'s Golden Bear', 4.01, 0.08, 1.64, 0, 0.01],
    ['Golden Grape', 4.18, 0.06, 2.50, 0.42, 0.06],
    ['Golden Green', 4.24, 0.05, 7.12, 0, 0],
    ['Hawaiian Pineapple', 4.28, 0.03, 6.13, 0, 0],
    ['Homer Fike\'s Yellow Oxheart', 4.19, 0.05, 1.74, 0, 0.01],
    ['Hurma Ukrainian', 4.36, 0.03, 5.76, 0, 0],
    ['Ilse\'s Orange Latvian', 4.56, 0, 6.73, 0, 0],
    ['Kellogs Breakfast', null, 0, 3.42, 0, 0],
    ['King\'s Gold (Koanga)', 4.24, 0.04, 3.02, 0, 0],
    ['Large Yellow Amish', 4.23, 0.04, 4.28, 0, 0],
    ['Mini Orange', null, 0, 3.36, 0, 0],
    ['Moonglow*', 4.43, 0, 5.38, 0, 0],
    ['Mountain Gold (dwarf)', 4.40, 0.02, 3.60, 0, 0],
    ['Old Wyandotte', 4.25, 0.02, 1.65, 0, 0],
    ['Olga\'s Round Golden Chicken Egg', 4.29, 0.05, 7.27, 0, 0],
    ['Orange Beefsteak', 4.16, 0.02, 4.56, 0, 0],
    ['Orange Bourgoin', 4.37, 0, 2.62, 0, 0],
    ['Orange Cherub', null, 0.1, 3.44, 0, 0.1],
    ['Orange Crimea', 4.27, 0.04, 8.04, 0, 0],
    ['Orange Fleshed Purple Smudge', 4.31, 0.03, 6.99, 0, 0.04],
    ['Orange Latvian', 4.31, 0.02, 0.93, 0, 0],
    ['Orange Plum', 4.27, 0.03, 1.84, 0, 0],
    ['Orange Queen', null, 0, 2.41, 0, 0],
    ['Orange Roma', 4.32, 0.02, 6.92, 0, 0.08],
    ['Orange Strawberry', 4.29, 0.03, 4.14, 0, 0],
    ['Orange Teardrop', null, 0, 5.31, 0, 0.20],
    ['Orange Valencia', 4.16, 0.08, 4.60, 0, 0],
    ['Pegs Round Orange', 4.32, 0.02, 1.08, 0, 0],
    ['Persimmon', 4.00, 0.02, 5.24, 0, 0],
    ['Roughwood Golden Plum', 4.34, 0.14, 3.82, 0, 0],
    ['Russian Persimmon', 4.14, 0.05, 2.93, 0.52, 0.01],
    ['Sakharniy Zeltiy', 4.29, 0, 3.42, 0, 0],
    ['Sibirische Orange', 4.30, 0.05, 4.56, 0.44, 0.11],
    ['Small Lap', 4.07, 0.12, 2.87, 0, 0],
    ['Small Sweet Orange', 4.38, 0.12, 1.63, 0.66, 0.12],
    ['Summer Cider Apricot', 4.30, 0, 6.15, 0, 0],
    ['Tangella (cherry type)', 4.25, 0.03, 6.13, 0, 0],
    ['Tangerine (2017)', null, 0, 5.82, 0, 0],
    ['Tobolsk', 4.24, 0, 5.73, 0, 0.06],
    ['Turkey Champ', 4.16, 0.04, 4.26, 0, 0.02],
    ['Valencia', 4.38, 0.04, 1.33, 0, 0],
    ['West Virginia', 4.18, 0, 5.05, 0, 0],
    ['Yellow Brandywine Platfoot Strain', 4.28, 0.13, 4.15, 0, 0],
    ['Yellow Oxheart', 4.23, 0.02, 2.58, 0, 0],
    ['Yellow Russian', 4.40, 0.02, 1.48, 0, 0],
    ['Yoder\'s Yellow German', 4.39, 0.02, 3.40, 0, 0],
].map((item, index) => ({
    genotype: item[0],
    pH: item[1],
    lutein: item[2],
    tetraCisLycopene: item[3],
    betaCarotene: item[4],
    allTransLycopene: item[5],
    id: index,
}));

class TetraCisLycopeneTable extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            tomatoTableSortColumn: 'genotype',
            tomatoTableSortAscending: true,
            tomatoTableHighlightedRow: null,
            tomatoTable,
        };

        this.sortTomatoTableByColumn = this.sortTomatoTableByColumn.bind(this);
        this.renderTomatoTable = this.renderTomatoTable.bind(this);
    }

    sortTomatoTableByColumn(column) {
        const sortAscending = this.state.tomatoTableSortColumn === column ?
            !this.state.tomatoTableSortAscending : this.state.tomatoTableSortAscending;

        const newTomatoTable = _.orderBy(tomatoTable, [column], [sortAscending ? 'asc' : 'desc']);

        this.setState({
            tomatoTableSortColumn: column,
            tomatoTableSortAscending: sortAscending,
            tomatoTable: newTomatoTable,
        });
    }

    renderTomatoTable() {
        return (
            <table style={{ width: '100%', margin: 0 }}>
                <thead>
                    <tr>
                        <th style={{ border: 'none' }} />
                        <th colSpan="4" style={{ textAlign: 'center' }}>Concentration (mg/100g FW)</th>
                        <th colSpan="2" className="hide-mobile" style={{ border: 'none' }} />
                    </tr>
                    <tr>
                        {[
                            ['genotype', 'Genotype Name'],
                            ['lutein', 'Lutein'],
                            ['tetraCisLycopene', 'Tetra-cis-lycopene'],
                            ['betaCarotene', 'Beta-carotene'],
                            ['allTransLycopene', 'All-trans-lycopene'],
                            ['pH', 'pH'],
                        ]
                            .map(column => ({ id: column[0], name: column[1] }))
                            .map((column, index) => (
                                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                                <th
                                    key={`tomato-table-header-${column.id}`}
                                    style={{ textAlign: index === 0 ? 'left' : 'right' }}
                                    className={`sortable-column-header${
                                        this.state.tomatoTableSortColumn === column.id ? ' highlight' : ''
                                    }${column.id === 'pH' ? ' hide-mobile' : ''}`}
                                    onClick={() => this.sortTomatoTableByColumn(column.id)}
                                >
                                    {column.name}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tomatoTable.map((row, index) => (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <tr
                            // eslint-disable-next-line react/no-array-index-key
                            key={`tomato-table-row-${index}`}
                            className={row.id === this.state.tomatoTableHighlightedRow ? 'highlight' : ''}
                            onClick={() => {
                                if (this.state.tomatoTableHighlightedRow === row.id) {
                                    this.setState({ tomatoTableHighlightedRow: null });
                                } else {
                                    this.setState({ tomatoTableHighlightedRow: row.id });
                                }
                            }}
                        >
                            <td style={{ textAlign: 'left' }}>{row.genotype}</td>
                            <td style={{ textAlign: 'right' }}>{row.lutein || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.tetraCisLycopene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.betaCarotene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.allTransLycopene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }} className="hide-mobile">{row.pH}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Article>
                <div className="wrapper content-with-sidebar">
                    <Sidebar page="tetra-cis-lycopene" />

                    <div className="article-content">
                        <div className="box">
                            <SectionHeading>
                                Tomato varieties confirmed to contain Tetra-cis-lycopene
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

                            <div style={{ padding: '10px 25px' }}>
                                {this.renderTomatoTable()}
                            </div>

                            <p>
                                (n.d. = not detected)
                            </p>

                            <h4>Notes on tetra-cis-lycopene levels</h4>

                            <p>
                                * The level of tetra-cis-lycopene is very dependent upon the
                                season and the stage of ripening of the tomato, with maximum
                                levels appearing to be at the optimum full ripeness stage for
                                picking and immediate eating.
                                Our 'Moonglow' tomatoes were picked early and therefore their level
                                of 5.38 for tetra-cis-lycopene would have been greater if left to
                                ripen further.
                            </p>
                        </div>
                    </div>
                </div>
            </Article>
        );
    }
}

export default title(TetraCisLycopeneTable, 'Tetra-cis-lycopene in Tomatoes');

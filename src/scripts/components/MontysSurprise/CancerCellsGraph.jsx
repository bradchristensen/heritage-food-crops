import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import ScatterPoint from './ScatterPoint';
import VictoryTheme from './VictoryTheme';
import { fetchVictoryIfNeeded } from '../../actions/scripts';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

function Container({ children }) {
    return (
        <div style={{
            display: 'flex',
            maxWidth: '800px',
            margin: '0 auto',
        }}
        >
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

class CancerCellsGraph extends PureComponent {
    componentDidMount() {
        this.props.dispatch(fetchVictoryIfNeeded());
    }

    render() {
        if (!this.props.victory) {
            return (
                <Container>
                    <div
                        style={{
                            background: '#eee',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '3px',
                            display: 'flex',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '600px',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faSpinner} spin className="fa-fw" />
                                {' '}Loading graph...
                            </p>
                            <p>
                                <strong>
                                    Effect of apple extracts on the growth of<br />
                                    human colon cancer-derived metastatic cells (SW620)
                                </strong>
                            </p>
                        </div>
                    </div>
                </Container>
            );
        }

        const {
            VictoryAxis,
            VictoryChart,
            VictoryGroup,
            VictoryLabel,
            VictoryLegend,
            VictoryLine,
            VictoryScatter,
            VictoryTooltip,
            VictoryVoronoiContainer,
        } = this.props.victory;

        const HEIGHT = 300;
        const WIDTH = 400;

        const chart = (
            <VictoryChart
                height={HEIGHT}
                width={WIDTH}
                containerComponent={(
                    <VictoryVoronoiContainer theme={VictoryTheme} />
                )}
                theme={VictoryTheme}
            >
                <VictoryLabel
                    dx={WIDTH / 2}
                    style={{
                        fontFamily: "'Source Sans Pro', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                        fontSize: 12,
                    }}
                    text="Effect of apple extracts on the growth of"
                    textAnchor="middle"
                    y={10}
                />
                <VictoryLabel
                    dx={WIDTH / 2}
                    style={{
                        fontFamily: "'Source Sans Pro', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
                        fontSize: 12,
                    }}
                    text="human colon cancer-derived metastatic cells (SW620)"
                    textAnchor="middle"
                    y={22}
                />

                <VictoryAxis
                    axisLabelComponent={<VictoryLabel x={16} />}
                    label="Cell number (DO 490nm)"
                    dependentAxis
                    style={{
                        ticks: { stroke: 'grey', size: 5 },
                    }}
                    domain={[0, 2]}
                    tickValues={[0.4, 0.8, 1.2, 1.6, 2.0]}
                    tickFormat={val => val.toFixed(1)}
                />
                <VictoryAxis
                    axisLabelComponent={<VictoryLabel y={HEIGHT - 20} />}
                    label="Days of Culture"
                    style={{
                        ticks: { stroke: 'grey', size: 5 },
                    }}
                    domain={[0, 10]}
                />

                <VictoryLegend
                    orientation="vertical"
                    data={[
                        { id: 0, name: 'Control' },
                        { id: 1, name: 'FP 50μg/ml' },
                        { id: 2, name: 'D185-3/ 30μg/ml' },
                        { id: 3, name: 'D185-3/ 40μg/ml' },
                        { id: 4, name: 'D185-3/ 60μg/ml' },
                    ]}
                    x={60}
                    y={50}
                    theme={VictoryTheme}
                />

                <VictoryGroup>
                    <VictoryGroup
                        labels={d => `y: ${d.y}`}
                        labelComponent={<VictoryTooltip />}
                        data={[
                            { x: 1, y: 0.02, size: 0 },
                            { x: 3, y: 0.26, size: 0 },
                            { x: 5, y: 0.81, size: 0.08 },
                            { x: 7, y: 1.09, size: 0.15 },
                            { x: 9, y: 1.88, size: 0.05 },
                        ]}
                    >
                        <VictoryLine />
                        <VictoryScatter dataComponent={<ScatterPoint />} />
                    </VictoryGroup>

                    <VictoryGroup
                        labels={d => `y: ${d.y}`}
                        labelComponent={<VictoryTooltip />}
                        data={[
                            { x: 1, y: 0.02, size: 0 },
                            { x: 3, y: 0.2, size: 0 },
                            { x: 5, y: 0.55, size: 0.1 },
                            { x: 7, y: 0.82, size: 0.15 },
                            { x: 9, y: 0.87, size: 0.15 },
                        ]}
                    >
                        <VictoryLine />
                        <VictoryScatter dataComponent={<ScatterPoint />} />
                    </VictoryGroup>

                    <VictoryGroup
                        labels={d => `y: ${d.y}`}
                        labelComponent={<VictoryTooltip />}
                        data={[
                            { x: 1, y: 0.02, size: 0 },
                            { x: 3, y: 0.16, size: 0 },
                            { x: 5, y: 0.48, size: 0.05 },
                            { x: 7, y: 0.57, size: 0 },
                            { x: 9, y: 1.0, size: 0.2 },
                        ]}
                    >
                        <VictoryLine />
                        <VictoryScatter dataComponent={<ScatterPoint />} />
                    </VictoryGroup>

                    <VictoryGroup
                        labels={d => `y: ${d.y}`}
                        labelComponent={<VictoryTooltip />}
                        data={[
                            { x: 1, y: 0.02, size: 0 },
                            { x: 3, y: 0.13, size: 0 },
                            { x: 5, y: 0.21, size: 0.02 },
                            { x: 7, y: 0.69, size: 0.1 },
                            { x: 9, y: 0.57, size: 0.08 },
                        ]}
                    >
                        <VictoryLine />
                        <VictoryScatter dataComponent={<ScatterPoint />} />
                    </VictoryGroup>

                    <VictoryGroup
                        labels={d => `y: ${d.y}`}
                        labelComponent={<VictoryTooltip />}
                        data={[
                            { x: 1, y: 0.02, size: 0 },
                            { x: 3, y: 0.12, size: 0 },
                            { x: 5, y: 0.13, size: 0 },
                            { x: 7, y: 0.63, size: 0.1 },
                            { x: 9, y: 0.53, size: 0.08 },
                        ]}
                    >
                        <VictoryLine />
                        <VictoryScatter dataComponent={<ScatterPoint />} />
                    </VictoryGroup>
                </VictoryGroup>
            </VictoryChart>
        );

        return (
            <Container>
                <div style={{ width: '100%' }}>
                    <div style={{ maxHeight: '600px' }}>
                        {chart}
                    </div>

                    <div style={{ backgroundColor: '#eee', textAlign: 'left', padding: '20px 25px' }}>
                        <strong>7 days of treatment IC<sub>50</sub> # 40μg/ml</strong><br />
                        <em>The IC<sub>50</sub> is <a href="https://simple.wikipedia.org/wiki/IC50" {...targetBlank}>the measurement of the concentration needed to kill <nobr>half the cancer cells</nobr></a>. <nobr>The lower the number,</nobr> <nobr>the better</nobr> (meaning that more cells are killed at a lower concentration).</em><br />
                        <small>Note: this interactive graph has been generated based on <a href={require("../../../images/layout/montys-surprise/graph-cancer-cell-proliferation.png")}>the original bitmap image</a>. <nobr>Data points are estimates.</nobr></small>
                    </div>
                </div>
            </Container>
        );
    }
}

CancerCellsGraph.propTypes = {
    dispatch: PropTypes.func.isRequired,
    victory: PropTypes.shape({
        VictoryAxis: PropTypes.func.isRequired,
        VictoryChart: PropTypes.func.isRequired,
        VictoryGroup: PropTypes.func.isRequired,
        VictoryLabel: PropTypes.func.isRequired,
        VictoryLegend: PropTypes.func.isRequired,
        VictoryLine: PropTypes.func.isRequired,
        VictoryScatter: PropTypes.func.isRequired,
        VictoryTooltip: PropTypes.func.isRequired,
        VictoryVoronoiContainer: PropTypes.func.isRequired,
    }),
};

CancerCellsGraph.defaultProps = {
    victory: undefined,
};

export default connect(state => ({
    victory: state.scripts.victory,
}))(CancerCellsGraph);

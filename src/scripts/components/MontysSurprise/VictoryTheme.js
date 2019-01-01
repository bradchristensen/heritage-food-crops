// *
// * Colors
// *
const yellow200 = '#FFF59D';
const deepOrange600 = '#F4511E';
const lime300 = '#DCE775';
const lightGreen500 = '#8BC34A';
const teal700 = '#00796B';
const cyan900 = '#006064';
const colors = [
    deepOrange600,
    yellow200,
    lime300,
    lightGreen500,
    teal700,
    cyan900,
];
const blueGrey50 = '#ECEFF1';
const blueGrey300 = '#90A4AE';
const blueGrey700 = '#455A64';
const grey900 = '#212121';

// *
// * Typography
// *
const sansSerif = "'Source Sans Pro', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;

// *
// * Layout
// *
const padding = 8;
const baseProps = {
    width: 350,
    height: 350,
    padding: 50,
};

// *
// * Labels
// *
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding,
    fill: blueGrey700,
    stroke: 'transparent',
    strokeWidth: 0,
};

const centeredLabelStyles = { ...baseLabelStyles, textAnchor: 'middle' };

// *
// * Strokes
// *
const strokeDasharray = '10, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

export default {
    area: {
        ...baseProps,
        style: {
            data: {
                fill: grey900,
            },
            labels: centeredLabelStyles,
        },
    },
    axis: {
        ...baseProps,
        style: {
            axis: {
                fill: 'transparent',
                stroke: blueGrey300,
                strokeWidth: 2,
                strokeLinecap,
                strokeLinejoin,
            },
            axisLabel: {
                ...centeredLabelStyles,
                padding,
                stroke: 'transparent',
            },
            grid: {
                fill: 'none',
                stroke: blueGrey50,
                strokeDasharray,
                strokeLinecap,
                strokeLinejoin,
                pointerEvents: 'visible',
            },
            ticks: {
                fill: 'transparent',
                size: 5,
                stroke: blueGrey300,
                strokeWidth: 1,
                strokeLinecap,
                strokeLinejoin,
            },
            tickLabels: {
                ...baseLabelStyles,
                fill: blueGrey700,
            },
        },
    },
    bar: {
        ...baseProps,
        style: {
            data: {
                fill: blueGrey700,
                padding,
                strokeWidth: 0,
            },
            labels: baseLabelStyles,
        },
    },
    candlestick: {
        ...baseProps,
        style: {
            data: {
                stroke: blueGrey700,
            },
            labels: centeredLabelStyles,
        },
        candleColors: {
            positive: '#ffffff',
            negative: blueGrey700,
        },
    },
    chart: baseProps,
    errorbar: {
        ...baseProps,
        borderWidth: 8,
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: blueGrey700,
                strokeWidth: 2,
            },
            labels: centeredLabelStyles,
        },
    },
    group: { ...baseProps, colorScale: colors },
    line: {
        ...baseProps,
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: blueGrey700,
                strokeWidth: 2,
            },
            labels: centeredLabelStyles,
        },
    },
    pie: {
        ...baseProps,
        colorScale: colors,
        style: {
            data: {
                padding,
                stroke: blueGrey50,
                strokeWidth: 1,
            },
            labels: { ...baseLabelStyles, padding: 20 },
        },
    },
    scatter: {
        ...baseProps,
        colorScale: colors,
        style: {
            data: {
                fill: blueGrey700,
                opacity: 1,
                stroke: 'transparent',
                strokeWidth: 0,
            },
            labels: centeredLabelStyles,
        },
    },
    stack: {
        ...baseProps,
        colorScale: colors,
    },
    tooltip: {
        style: {
            ...centeredLabelStyles,
            padding: 5,
            pointerEvents: 'none',
        },
        flyoutStyle: {
            ...baseLabelStyles,
            stroke: grey900,
            strokeWidth: 1,
            fill: '#f0f0f0',
            pointerEvents: 'none',
        },
        cornerRadius: 5,
        pointerLength: 10,
    },
    voronoi: {
        ...baseProps,
        style: {
            data: {
                fill: 'transparent',
                stroke: 'transparent',
                strokeWidth: 0,
            },
            labels: {
                ...centeredLabelStyles,
                padding: 5,
                pointerEvents: 'none',
            },
            flyout: {
                stroke: grey900,
                strokeWidth: 1,
                fill: '#f0f0f0',
                pointerEvents: 'none',
            },
        },
    },
    legend: {
        colorScale: colors,
        gutter: 0,
        orientation: 'vertical',
        titleOrientation: 'top',
        style: {
            data: {
                type: 'circle',
            },
            labels: {
                ...baseLabelStyles,
                fontSize: 11,
            },
            title: { ...baseLabelStyles, padding: 0 },
        },
    },
};

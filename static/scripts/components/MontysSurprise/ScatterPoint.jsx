import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ScatterPoint extends PureComponent {
    render() {
        const {
            datum,
            scale,
            size,
            style: rawStyle,
            x,
            y,
        } = this.props;

        const rectSize = 3;

        const { _x1, width, ...style } = rawStyle;

        const lineStyle = {
            stroke: style.stroke !== 'transparent' ? style.stroke : style.fill,
            strokeWidth: style.strokeWidth || 0.5,
        };

        return (
            <g>
                {!!size && (
                    <g>
                        <line
                            x1={Math.round(x)}
                            y1={Math.round(y)}
                            x2={Math.round(x)}
                            y2={scale.y(datum.y - (datum.size / 2))}
                            style={lineStyle}
                        />
                        <line
                            x1={Math.round(x)}
                            y1={Math.round(y)}
                            x2={Math.round(x)}
                            y2={scale.y(datum.y + (datum.size / 2))}
                            style={lineStyle}
                        />
                        <line
                            x1={Math.round(x) - rectSize}
                            y1={scale.y(datum.y - (datum.size / 2))}
                            x2={Math.round(x) + rectSize}
                            y2={scale.y(datum.y - (datum.size / 2))}
                            style={lineStyle}
                        />
                        <line
                            x1={Math.round(x) - rectSize}
                            y1={scale.y(datum.y + (datum.size / 2))}
                            x2={Math.round(x) + rectSize}
                            y2={scale.y(datum.y + (datum.size / 2))}
                            style={lineStyle}
                        />
                    </g>
                )}
                <circle
                    cx={Math.round(x)}
                    cy={Math.round(y)}
                    r={rectSize}
                    style={style}
                />
            </g>
        );
    }
}

ScatterPoint.propTypes = {
    datum: PropTypes.shape({
        size: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }),
    scale: PropTypes.shape({
        x: PropTypes.func.isRequired,
        y: PropTypes.func.isRequired,
    }),
    size: PropTypes.number,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    x: PropTypes.number,
    y: PropTypes.number,
};

ScatterPoint.defaultProps = {
    datum: undefined,
    scale: undefined,
    size: undefined,
    style: undefined,
    x: undefined,
    y: undefined,
};

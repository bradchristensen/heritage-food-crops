import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

// Test via a getter in the options object to see if the passive property is accessed
// Source: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
let supportsPassive = false;
if (typeof window !== 'undefined') {
    try {
        const opts = Object.defineProperty({}, 'passive', {
            get() { // eslint-disable-line getter-return
                supportsPassive = true;
            },
        });
        window.addEventListener('test', null, opts);
    } catch (e) {} // eslint-disable-line no-empty
}
const PASSIVE_LISTENER = supportsPassive ? { passive: true } : false;

export default class Parallax extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            top: 0,
        };

        this.handleScroll = throttle(this.handleScroll.bind(this), 10);
        this.onImageLoad = () => setTimeout(this.handleScroll, 0);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, PASSIVE_LISTENER);
        window.addEventListener('resize', this.handleScroll, PASSIVE_LISTENER);
        setTimeout(this.handleScroll, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, PASSIVE_LISTENER);
        window.removeEventListener('resize', this.handleScroll, PASSIVE_LISTENER);
    }

    handleScroll() {
        const parent = this.parallaxElement.parentNode;
        const {
            bottom: containerBottom,
            height: containerHeight,
            top: containerTop,
        } = parent.getBoundingClientRect();

        const viewportHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0,
        );

        if (containerBottom > 0 && containerTop <= viewportHeight) {
            const { height } = this.parallaxElement.getBoundingClientRect();

            const extraSpace = height - containerHeight;

            if (this.props.reverse) {
                const newTop = 0 - ((
                    containerTop / (viewportHeight + containerHeight)
                ) * extraSpace);

                // Set new top position
                this.setState({ top: `${newTop}px` });
            } else {
                const newTop = 0 - ((
                    containerBottom / (viewportHeight + containerHeight)
                ) * extraSpace);

                // Set new top position
                this.setState({ top: `${newTop}px` });
            }
        }
    }

    render() {
        const {
            alt,
            className,
            height,
            maxHeight,
            minHeight,
            reverse,
            src,
            style,
            ...rest
        } = this.props;

        return (
            <div
                className="react-parallax-wrapper"
                style={{ height, maxHeight, minHeight }}
            >
                <div
                    className={`react-parallax-component ${className}`}
                    ref={(ref) => { this.parallaxElement = ref; }}
                    style={{
                        [this.props.reverse ? 'top' : 'bottom']: this.state.top,
                        ...style,
                    }}
                    {...rest}
                >
                    <img src={src} alt={alt} onLoad={this.onImageLoad} />
                </div>
            </div>
        );
    }
}

Parallax.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    minHeight: PropTypes.string,
    reverse: PropTypes.bool,
    src: PropTypes.string.isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Parallax.defaultProps = {
    className: '',
    height: undefined,
    maxHeight: undefined,
    minHeight: undefined,
    reverse: false,
    style: {},
};

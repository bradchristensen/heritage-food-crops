import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { connect } from 'react-redux';
import { scrollSectionIntoView, scrollSectionOutOfView } from '../actions/article';

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

function isElementInViewport(el) {
    const { bottom, height, top } = el.getBoundingClientRect();

    const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
    );

    return (
        (top >= 0 && bottom <= viewportHeight) ||
        (top < 0 && 0 - top < height) ||
        (bottom > viewportHeight && bottom - viewportHeight < height)
    );
}

class SectionHeading extends PureComponent {
    static displayName = 'SectionHeading';

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: !props.exclude ? context.assignSectionHeadingId() : null,
        };

        this.existingState = false;
        this.handleScroll = throttle(this.handleScroll.bind(this), 500);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, PASSIVE_LISTENER);
        window.addEventListener('resize', this.handleScroll, PASSIVE_LISTENER);
        setTimeout(this.handleScroll, 0);
    }

    componentWillUnmount() {
        this.componentHasUnmounted = true;
        window.removeEventListener('scroll', this.handleScroll, PASSIVE_LISTENER);
        window.removeEventListener('resize', this.handleScroll, PASSIVE_LISTENER);
    }

    handleScroll() {
        if (this.componentHasUnmounted) {
            return;
        }

        const newState = isElementInViewport(this.node.parentElement);

        if (newState !== this.existingState) {
            if (newState) {
                this.props.dispatch(scrollSectionIntoView(this.state.id));
            } else {
                this.props.dispatch(scrollSectionOutOfView(this.state.id));
            }

            this.existingState = newState;
        }
    }

    render() {
        const {
            children,
            dispatch,
            exclude,
            shortText,
            tag: Tag,
            ...props
        } = this.props;

        if (!exclude) {
            props.id = `section-${this.state.id}`;
        }

        return (
            <Tag ref={(node) => { this.node = node; }} {...props}>
                {children}
            </Tag>
        );
    }
}

SectionHeading.propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    exclude: PropTypes.bool,
    shortText: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
};

SectionHeading.defaultProps = {
    exclude: false,
    shortText: null, // Used in the table of contents
    tag: 'h2',
};

SectionHeading.contextTypes = {
    assignSectionHeadingId: PropTypes.func.isRequired,
};

export default connect()(SectionHeading);

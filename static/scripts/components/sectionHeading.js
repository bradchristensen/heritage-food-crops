import React, { Component, PropTypes } from 'react';

export default class SectionHeading extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: !props.exclude ? context.assignSectionHeadingId() : null,
        };
    }

    render() {
        const props = { ...this.props };

        if (!props.exclude) {
            props.id = `section-${this.state.id}`;
        }

        // Delete these props as they won't be passed through to the tag (default h2)
        delete props.children;
        delete props.exclude;
        delete props.shortText;
        delete props.tag;

        return React.createElement(this.props.tag, props, this.props.children);
    }
}

SectionHeading.propTypes = {
    children: PropTypes.node,
    exclude: PropTypes.bool,
    shortText: PropTypes.string,
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
    assignSectionHeadingId: PropTypes.func,
};

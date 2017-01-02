import React, { Component, PropTypes } from 'react';

export default class SectionSubheading extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = !props.exclude ? context.assignSectionSubheadingId() : {};
    }

    render() {
        const props = { ...this.props };

        if (!props.exclude) {
            props.id = `section-${this.state.parentId}-${this.state.id}`;
        }

        // Delete these props as they won't be passed through to the tag (default h3)
        delete props.children;
        delete props.exclude;
        delete props.shortText;
        delete props.tag;

        return React.createElement(this.props.tag, props, this.props.children);
    }
}

SectionSubheading.propTypes = {
    children: PropTypes.node,
    exclude: PropTypes.bool,
    shortText: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
};

SectionSubheading.defaultProps = {
    exclude: false,
    shortText: null, // Used in the table of contents
    tag: 'h3',
};

SectionSubheading.contextTypes = {
    assignSectionSubheadingId: PropTypes.func,
};

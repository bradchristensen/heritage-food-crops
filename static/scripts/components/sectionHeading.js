import React from 'react';
import _ from 'lodash';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        exclude: React.PropTypes.bool,
        shortText: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.func,
        ]),
    },

    contextTypes: {
        assignSectionHeadingId: React.PropTypes.func,
    },

    getInitialState() {
        return {
            id: !this.props.exclude ? this.context.assignSectionHeadingId() : null,
        };
    },

    getDefaultProps() {
        return {
            exclude: false,
            shortText: null, // Used in the table of contents
            tag: 'h2',
        };
    },

    render() {
        const props = _.assign({}, this.props);
        delete props.children;
        if (!props.exclude) {
            props.id = `section-${this.state.id}`;
        }
        return React.createElement(this.props.tag, props, this.props.children);
    },
});

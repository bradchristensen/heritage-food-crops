import React from 'react';
import _ from 'lodash';

export default React.createClass({
    contextTypes: {
        assignSectionHeadingId: React.PropTypes.func
    },

    getInitialState () {
        return {
            id: !this.props.exclude ? this.context.assignSectionHeadingId() : null
        };
    },

    getDefaultProps () {
        return {
            exclude: false,
            tag: 'h2',
            shortText: null // Used in the table of contents
        };
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.children;
        if (!props.exclude) {
            props.id = 'section-' + this.state.id;
        }
        return React.createElement(this.props.tag, props, this.props.children);
    }
});

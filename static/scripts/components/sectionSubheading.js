import React from 'react';
import _ from 'lodash';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        exclude: React.PropTypes.bool,
        shortText: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.func
        ])
    },

    contextTypes: {
        assignSectionSubheadingId: React.PropTypes.func
    },

    getInitialState () {
        return !this.props.exclude ? this.context.assignSectionSubheadingId() : {};
    },

    getDefaultProps () {
        return {
            exclude: false,
            shortText: null, // Used in the table of contents
            tag: 'h3'
        };
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.children;
        if (!props.exclude) {
            props.id = 'section-' + this.state.parentId + '-' + this.state.id;
        }
        return React.createElement(this.props.tag, props, this.props.children);
    }
});

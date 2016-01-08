import React from 'react';
import _ from 'lodash';

export default React.createClass({
    contextTypes: {
        assignSectionSubheadingId: React.PropTypes.func
    },

    getInitialState () {
        return !this.props.exclude ? this.context.assignSectionSubheadingId() : {};
    },

    getDefaultProps () {
        return {
            exclude: false,
            tag: 'h3',
            shortText: null // Used in the table of contents
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

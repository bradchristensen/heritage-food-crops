import React from 'react';
import _ from 'lodash';

var uniqueIdentifier = 0;

export default React.createClass({
    contextTypes: {
        getHeadingNumberAtomic: React.PropTypes.func
    },

    getInitialState () {
        return {
            headingNumber: 0
        };
    },

    getDefaultProps () {
        return {
            exclude: false,
            tag: 'h2'
        };
    },

    componentDidMount () {
        if (!this.props.exclude) {
            this.context.getHeadingNumberAtomic(uniqueIdentifier++).then(headingNumber => {
                this.setState({ headingNumber });
            });
        }
    },

    render () {
        var props = _.assign({}, this.props);
        delete props.children;
        if (!props.exclude) {
            props.id = 'section-' + this.state.headingNumber;
        }
        return React.createElement(this.props.tag, props, this.props.children);
    }
});

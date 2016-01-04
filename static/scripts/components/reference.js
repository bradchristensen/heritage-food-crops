import React from 'react';

export default React.createClass({
    contextTypes: {
        assignReferenceNumberAtomic: React.PropTypes.func
    },

    getInitialState () {
        return {
            referenceNumber: 0
        };
    },

    componentDidMount () {
        this.context.assignReferenceNumberAtomic(this.props.source || this.props.children).then(referenceNumber => {
            this.setState({ referenceNumber });
        });
    },

    render () {
        return <sup>
            <a href={'#cite-' + this.state.referenceNumber} data-scroll>
                {'[' + this.state.referenceNumber + ']'}
            </a>
        </sup>;
    }
});

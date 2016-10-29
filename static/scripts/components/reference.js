import React from 'react';

export default React.createClass({
    contextTypes: {
        assignReferenceId: React.PropTypes.func,
    },

    getInitialState() {
        return {
            id: this.context.assignReferenceId(),
        };
    },

    render() {
        return (<sup>
            <a href={`#cite-${this.state.id}`} data-scroll>
                {`[${this.state.id}]`}
            </a>
        </sup>);
    },
});

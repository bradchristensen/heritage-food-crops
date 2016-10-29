import React, { Component, PropTypes } from 'react';

export default class Reference extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: context.assignReferenceId(),
        };
    }

    render() {
        return (
            <sup>
                <a href={`#cite-${this.state.id}`} data-scroll>
                    {`[${this.state.id}]`}
                </a>
            </sup>
        );
    }
}

Reference.contextTypes = {
    assignReferenceId: PropTypes.func,
};

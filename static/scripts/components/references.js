import React from 'react';

export default React.createClass({
    contextTypes: {
        references: React.PropTypes.array
    },

    render () {
        return <ol className='footnotes'>
            {this.context.references.map((text, index) => {
                return <li key={'references-' + index} id={'cite-' + (index + 1)}>{text}</li>;
            })}
        </ol>;
    }
});

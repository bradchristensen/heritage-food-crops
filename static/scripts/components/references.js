import React from 'react';

export default React.createClass({
    contextTypes: {
        references: React.PropTypes.array
    },

    render () {
        return <ol className='footnotes'>
            {this.context.references.map((ref, index) => {
                return <li key={'references-' + index} id={'cite-' + ref.id}>
                    {ref.href ? <a href={ref.href}>{ref.value}</a> : ref.value}
                </li>;
            })}
        </ol>;
    }
});

import React from 'react';
import OutboundLink from 'components/outboundLink';

export default React.createClass({
    contextTypes: {
        references: React.PropTypes.array
    },

    render () {
        return <ol className='references-list'>
            {this.context.references.map((ref, index) => {
                return <li key={'references-' + index} id={'cite-' + ref.id}>
                    {ref.href ? <OutboundLink to={ref.href} eventLabel={ref.href}>{ref.value}</OutboundLink> : ref.value}
                </li>;
            })}
        </ol>;
    }
});

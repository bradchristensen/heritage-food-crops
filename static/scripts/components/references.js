import React, { PropTypes } from 'react';
import OutboundLink from './outboundLink';

export default function References(props, context) {
    return (
        <ol className='references-list'>
            {context.references.map((ref, index) =>
                <li key={`references-${index}`} id={`cite-${ref.id}`}>
                    {!ref.href ? ref.value : (
                        <OutboundLink to={ref.href} eventLabel={ref.href}>
                            {ref.value}
                        </OutboundLink>
                    )}
                </li>
            )}
        </ol>
    );
}

References.contextTypes = {
    references: PropTypes.array,
};

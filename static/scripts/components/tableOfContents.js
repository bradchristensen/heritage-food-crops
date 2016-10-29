import React, { PropTypes } from 'react';

export default function TableOfContents(props, context) {
    return (
        <ul className='table-of-contents'>
            {context.tableOfContents.map(item =>
                <li key={`contents-section-${item.id}`}>
                    <a href={`#section-${item.id}`} data-scroll>{`${item.id} ${item.text}`}</a>
                    {/* TODO: fix up the css for this, which expects the ul to be outside the li */}
                    {!!item.children.length && <ul>
                        {item.children.map(child =>
                            <li key={`contents-section-${item.id}-${child.id}`}>
                                <a href={`#section-${item.id}-${child.id}`} data-scroll>
                                    {`${item.id}.${child.id} ${child.text}`}
                                </a>
                            </li>
                        )}
                    </ul>}
                </li>
            )}
        </ul>
    );
}

TableOfContents.contextTypes = {
    tableOfContents: PropTypes.array,
};

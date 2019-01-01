import React from 'react';
import PropTypes from 'prop-types';

export default function TableOfContents(props, context) {
    return (
        <ol className="table-of-contents">
            {context.tableOfContents.map(item => (
                <li key={`contents-section-${item.id}`}>
                    <a href={`#section-${item.id}`} data-scroll>{item.text}</a>
                    {!!item.children.length && (
                        <ol>
                            {item.children.map(child => (
                                <li key={`contents-section-${item.id}-${child.id}`}>
                                    <a href={`#section-${item.id}-${child.id}`} data-scroll>
                                        {child.text}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    )}
                </li>
            ))}
        </ol>
    );
}

TableOfContents.contextTypes = {
    tableOfContents: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })).isRequired,
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
};

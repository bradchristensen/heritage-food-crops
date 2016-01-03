import React from 'react';

export default React.createClass({
    contextTypes: {
        tableOfContents: React.PropTypes.array
    },

    render () {
        return <ul className='contents'>
            {this.context.tableOfContents.map((item, index) => {
                return <li key={'contents-' + index}>
                    <a href={'#section-' + (index + 1)}>{(index + 1) + ' ' + item.text}</a>
                    {/* TODO: fix up the css for this, which expects the ul to be outside the li */}
                    {!!item.children.length && <ul>
                        {item.children.map((child, childIndex) => {
                            return <li key={'contents-' + (index + 1) + '-' + (childIndex + 1)}>
                                <a href={'#section-' + (index + 1) + '-' + (childIndex + 1)}>
                                    {(index + 1) + '.' + (childIndex + 1) + ' ' + child.text}
                                </a>
                            </li>;
                        })}
                    </ul>}
                </li>;
            })}
        </ul>;
    }
});

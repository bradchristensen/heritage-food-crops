import React from 'react';

export default React.createClass({
    contextTypes: {
        tableOfContents: React.PropTypes.array
    },

    render () {
        return <ul className='table-of-contents'>
            {this.context.tableOfContents.map(item => {
                return <li key={'contents-section-' + item.id}>
                    <a href={'#section-' + item.id} data-scroll>{item.id + ' ' + item.text}</a>
                    {/* TODO: fix up the css for this, which expects the ul to be outside the li */}
                    {!!item.children.length && <ul>
                        {item.children.map(child => {
                            return <li key={'contents-section-' + item.id + '-' + child.id}>
                                <a href={'#section-' + item.id + '-' + child.id} data-scroll>
                                    {item.id + '.' + child.id + ' ' + child.text}
                                </a>
                            </li>;
                        })}
                    </ul>}
                </li>;
            })}
        </ul>;
    }
});

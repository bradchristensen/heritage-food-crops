import React from 'react';
import title from 'infrastructure/documentTitle';
import { Link } from 'react-router';

export default React.createClass({
    mixins: [title('Page not found')],

    render() {
        return (<div className='wrapper'>
            <div className='wrapper wrap-900'>
                <h1>Page not found</h1>

                <div className='box'>
                    <p>You've stumbled upon a page that doesn't exist!</p>
                    <p>If this page has mysteriously gone missing, we would greatly appreciate if you could let us know using our <Link to='contact-us'>contact form</Link>, so that we can fix the error as soon as possible.</p>
                    <p><Link to='/'>Go back to the home page</Link></p>
                </div>
            </div>

            <hr />
        </div>);
    },
});

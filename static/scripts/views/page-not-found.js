import React from 'react';
import { Link } from 'react-router';
import title from '../infrastructure/documentTitle';

function PageNotFound() {
    return (
        <div className='wrapper'>
            <div className='wrapper wrap-900'>
                <h1>Page not found</h1>

                <div className='box'>
                    <p>You've stumbled upon a page that doesn't exist!</p>
                    <p>
                        If this page has mysteriously gone missing, we would greatly appreciate if
                        you could let us know using our <Link to='contact-us'>contact form</Link>,
                        so that we can fix the error as soon as possible.
                    </p>
                    <p><Link to='/'>Go back to the home page</Link></p>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default title(PageNotFound, 'Page not found');

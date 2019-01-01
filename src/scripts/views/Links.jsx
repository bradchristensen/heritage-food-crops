import React from 'react';
import title from '../infrastructure/documentTitle';
import OutboundLink from '../components/OutboundLink';

function Links() {
    return (
        <div className="wrapper">
            <div className="wrapper wrap-900">
                <div className="box">
                    <h2>For Purchase of Monty's Surprise Apple Trees</h2>
                    <p>
                        For people wanting to purchase <em>small numbers</em> of (one to four)
                        Monty's Surprise apple trees, we suggest they might like to contact
                        Sarah Frater of Edible Garden in Palmerston North.
                    </p>

                    <ul>
                        <li>
                            <OutboundLink
                                to="http://www.ediblegarden.co.nz"
                                eventLabel="Edible Garden"
                            >
                                www.ediblegarden.co.nz
                            </OutboundLink>
                        </li>
                        <li>
                            email{' '}
                            <a href="mailto:sarah@ediblegarden.co.nz">
                                sarah@ediblegarden.co.nz
                            </a>
                        </li>
                        <li>phone <a href="tel:6463267313">(06) 326 7313</a></li>
                    </ul>

                    <p>
                        For those people wanting larger numbers of trees you may like to contact
                        Murray Jones or Lindy Hatherly-Jones at TreeLife Organic Nursery in
                        Whanganui.
                    </p>

                    <ul>
                        <li>freephone <a href="tel:0800264372">0800 264 372</a></li>
                    </ul>
                </div>

                <div className="box">
                    <h2>For Purchase of Heirloom Tomato Varieties</h2>
                    <p>
                        All heirloom tomato varieties grown and researched by the Trust can be
                        purchased from Frank and Joy Bristol of Bristol Plants and Seeds in
                        Whanganui.
                    </p>

                    <ul>
                        <li>
                            <OutboundLink
                                to="http://www.bristol.co.nz"
                                eventLabel="Bristol Plants & Seeds"
                            >
                                www.bristol.co.nz
                            </OutboundLink>
                        </li>
                        <li>
                            email{' '}
                            <a href="mailto:plants&seeds@bristol.co.nz">
                                plants&seeds@bristol.co.nz
                            </a>
                        </li>
                        <li>phone <a href="tel:6463436421">(06) 343 6421</a></li>
                        <li>fax (06) 343 6080</li>
                    </ul>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default title(Links, 'Links');

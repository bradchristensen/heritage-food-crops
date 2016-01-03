import React from 'react';
import Router, { State } from 'react-router';

var RouteHandler = Router.RouteHandler;

export default React.createClass({
    mixins: [State],

    getDefaultProps () {
        return {
            title: 'Heritage Food Crops Research Trust'
        };
    },

    render () {
        return (
            <div>
                <div id='header'>
                    <div className='gradient'>
                        <div className='wrapper'>
                            <div id='logo'>
                                <a href='/' title='Return to the index page'></a>
                                <img src='/static/images/layout/logo@2x.png' alt='' />
                            </div>
                            <h1><a href='/'><strong>{this.props.title}</strong> <small>New Zealand</small></a></h1>
                        </div>
                    </div>
                </div>

                <div id='navbar'>
                    <div className='wrapper'>
                        <span className='caption'>Menu:</span>
                        <ul id='menu'>
                            <li>
                                <a href='#'>Research Topics</a>
                                <ul>
                                    <li><a href='/montys-surprise/'>
                                        <img src='/static/images/layout/menu-thumbs/apples.jpg' alt='' />
                                        <h3>Monty's Surprise</h3>
                                        <p>Apple Cancer Prevention Research Project</p>
                                    </a></li>
                                    <li><a href='/heirloom-tomatoes/'>
                                        <img src='/static/images/layout/menu-thumbs/tomatoes.jpg' alt='' />
                                        <h3>Heirloom Tomatoes</h3>
                                        <p>Investigating the Health Potential of the 'Real' Tomato</p>
                                    </a></li>
                                    <li><a href='/heirloom-beans/'>
                                        <img src='/static/images/layout/menu-thumbs/beans.png' alt='' />
                                        <h3>Heirloom Beans</h3>
                                        <p>The Great New Zealand Bean Hunt</p>
                                    </a></li>
                                    <li><a href='/plums-peaches/'>
                                        <img src='/static/images/layout/menu-thumbs/plums.jpg' alt='' />
                                        <h3>Plums and Peaches</h3>
                                        <p>Heritage/European plum varieties and Blackboy peaches</p>
                                    </a></li>
                                    <li><a href='/huntingtons-disease/'>
                                        <img src='/static/images/layout/menu-thumbs/selaginella.png' alt='' />
                                        <h3>Huntington's Disease</h3>
                                        <p>Researching a natural trehalose sugar treatment</p>
                                    </a></li>
                                    <li><a href='/ancient-wheat/'>
                                        <img src='/static/images/layout/menu-thumbs/wheat.png' alt='' />
                                        <h3>Ancient Wheat</h3>
                                        <p>Preserving ancient varieties and researching gluten intolerance</p>
                                    </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/about-the-trust/'>About the Trust</a>
                            </li>
                            <li>
                                <a href='/contact-us/'>Contact Us</a>
                            </li>
                            <li>
                                <a href='/links/'>Links</a>
                            </li>
                            <li><a onClick={event => {
                                window.print();
                                event.preventDefault();
                            }} href='#print'>Print this page</a></li>
                        </ul>
                    </div>
                    <div id='submenu'>
                        <div className='wrapper'>

                        </div>
                    </div>
                </div>

                <div id='content'>
                    <RouteHandler />
                    <div className='clear'></div>
                </div>

                <div id='footer'>
                    <div className='wrapper'>
                        Site maintained by Mark and Brad Christensen. Designed <a href='//christensen.co.nz' title='Website development by Brad Christensen'>with love</a>.<br />
                        <small>Copyright &copy; {this.props.title}. Verbatim copying and distribution of this page is permitted in any medium.</small>
                    </div>
                </div>
            </div>
        );
    }
});

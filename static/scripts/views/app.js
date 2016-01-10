import React from 'react';
import Reflux from 'reflux';
import Router, { Link, State } from 'react-router';
import Lightbox from 'components/lightbox';
import LightboxStore from 'stores/lightbox';
import ga from 'react-ga';
import OutboundLink from 'components/outboundLink';

var RouteHandler = Router.RouteHandler;

export default React.createClass({
    mixins: [State, Reflux.ListenerMixin],

    getDefaultProps () {
        return {
            title: 'Heritage Food Crops Research Trust'
        };
    },

    getInitialState () {
        return {
            currentlyVisibleSubmenu: null,
            lightboxVisible: LightboxStore.getState().visible,
            lightboxContent: LightboxStore.getState().content,
            lightboxCaption: LightboxStore.getState().caption
        };
    },

    componentDidMount () {
        this.listenTo(LightboxStore, state => {
            if (this.isMounted()) {
                this.setState({
                    lightboxVisible: state.visible,
                    lightboxContent: state.content,
                    lightboxCaption: state.caption
                });
            }
        });
    },

    hideMenu () {
        return new Promise(resolve => {
            this.setState({
                currentlyVisibleSubmenu: null
            }, resolve);
        });
    },

    showResearchTopicsMenu () {
        return new Promise(resolve => {
            this.setState({
                currentlyVisibleSubmenu: 'researchTopics'
            }, resolve);
        });
    },

    toggleResearchTopicsMenu () {
        return new Promise(resolve => {
            this.setState({
                currentlyVisibleSubmenu: this.state.currentlyVisibleSubmenu === 'researchTopics' ?
                    null : 'researchTopics'
            }, resolve);
        });
    },

    render () {
        var researchTopicsMenu = <ul>
            <li>
                <Link to='montys-surprise' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/apples.jpg' alt='' />
                    <h3>Monty's Surprise</h3>
                    <p>Apple Cancer Prevention Research Project</p>
                </Link>
            </li>
            <li>
                <Link to='heirloom-tomatoes' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/tomatoes.jpg' alt='' />
                    <h3>Heirloom Tomatoes</h3>
                    <p>Investigating the Health Potential of the 'Real' Tomato</p>
                </Link>
            </li>
            <li>
                <Link to='heirloom-beans' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/beans.png' alt='' />
                    <h3>Heirloom Beans</h3>
                    <p>The Great New Zealand Bean Hunt</p>
                </Link>
            </li>
            <li>
                <Link to='plums-peaches' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/plums.jpg' alt='' />
                    <h3>Plums and Peaches</h3>
                    <p>Heritage/European plum varieties and Blackboy peaches</p>
                </Link>
            </li>
            <li>
                <Link to='huntingtons-disease' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/selaginella.png' alt='' />
                    <h3>Huntington's Disease</h3>
                    <p>Researching a natural trehalose sugar treatment</p>
                </Link>
            </li>
            <li>
                <Link to='ancient-wheat' onClick={this.hideMenu}>
                    <img src='/static/images/layout/menu-thumbs/wheat.png' alt='' />
                    <h3>Ancient Wheat</h3>
                    <p>Preserving ancient varieties and researching gluten intolerance</p>
                </Link>
            </li>
        </ul>;

        return (
            <div>
                <div id='header'>
                    <div className='gradient'>
                        <div className='wrapper'>
                            <div id='logo'>
                                <Link to='/' title='Return to the index page'></Link>
                                <img src='/static/images/layout/logo@2x.png' alt='' />
                            </div>
                            <h1><Link to='/'><strong>{this.props.title}</strong> <small>New Zealand</small></Link></h1>
                        </div>
                    </div>
                </div>

                <div id='navbar' onMouseLeave={this.hideMenu}>
                    <div className='wrapper'>
                        <span className='caption'>Menu:</span>
                        <ul id='menu'>
                            <li>
                                <a href='#' onMouseOver={this.showResearchTopicsMenu} onClick={event => {
                                    this.toggleResearchTopicsMenu();
                                    event.preventDefault();
                                }}>
                                    Research Topics
                                </a>
                            </li>
                            <li>
                                <Link to='about-the-trust' onClick={this.hideMenu}>About the Trust</Link>
                            </li>
                            <li>
                                <Link to='contact-us' onClick={this.hideMenu}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to='links' onClick={this.hideMenu}>Links</Link>
                            </li>
                            <li>
                                <a onClick={event => {
                                    this.hideMenu().then(() => {
                                        ga.event({
                                            category: 'Navigation',
                                            action: 'Clicked Print'
                                        });
                                        window.print();
                                    });
                                    event.preventDefault();
                                }} href='#print'>Print this page</a>
                            </li>
                        </ul>
                    </div>
                    <div className={this.state.currentlyVisibleSubmenu !== null ? 'submenu fade-visible' : 'submenu'}>
                        <div className='wrapper'>
                            {this.state.currentlyVisibleSubmenu === 'researchTopics' ? researchTopicsMenu : <div />}
                        </div>
                    </div>
                </div>

                <div id='content'>
                    <RouteHandler />
                    <div className='clear'></div>
                </div>

                <div id='footer'>
                    <div className='wrapper'>
                        Our website is <OutboundLink to='https://github.com/bradchristensen/heritage-food-crops' eventLabel='GitHub Project' title='Contribute via GitHub'>open source</OutboundLink> and <OutboundLink to='//christensen.co.nz' eventLabel={'Brad\'s website'} title='Website development by Brad Christensen'>designed with love</OutboundLink>.<br />
                        <small>Copyright &copy; {this.props.title}, {new Date().getFullYear()}. Verbatim copying and distribution of this page is permitted in any medium.</small>
                    </div>
                </div>

                <Lightbox visible={this.state.lightboxVisible}
                    content={this.state.lightboxContent}
                    caption={this.state.lightboxCaption} />
            </div>
        );
    }
});

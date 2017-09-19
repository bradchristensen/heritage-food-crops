import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Lightbox from '../components/lightbox';
import OutboundLink from '../components/outboundLink';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.blockTogglingResearchTopicsMenu = false;
        this.blockTogglingPublicationsMenu = false;

        this.state = {
            currentlyVisibleSubmenu: null,
        };

        this.hideMenu = this.hideMenu.bind(this);
        this.hideMenuDelayed = this.hideMenuDelayed.bind(this);
        this.showResearchTopicsMenu = this.showResearchTopicsMenu.bind(this);
        this.showPublicationsMenu = this.showPublicationsMenu.bind(this);
        this.toggleResearchTopicsMenu = this.toggleResearchTopicsMenu.bind(this);
        this.togglePublicationsMenu = this.togglePublicationsMenu.bind(this);
        this.renderResearchTopicsMenu = this.renderResearchTopicsMenu.bind(this);
        this.renderPublicationsMenu = this.renderPublicationsMenu.bind(this);

        this.cancelShowingResearchTopicsMenu = () => {
            this.blockShowingResearchTopicsMenu = true;
        };
        this.cancelShowingPublicationsMenu = () => {
            this.blockShowingPublicationsMenu = true;
        };
        this.cancelHidingMenu = () => {
            this.blockHidingMenu = true;
        };
    }

    hideMenu() {
        return new Promise((resolve) => {
            this.setState({
                currentlyVisibleSubmenu: null,
            }, resolve);
        });
    }

    hideMenuDelayed() {
        this.blockHidingMenu = false;
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.blockHidingMenu) {
                    this.setState({
                        currentlyVisibleSubmenu: null,
                    }, resolve);
                }
            }, 200);
        });
    }

    showResearchTopicsMenu() {
        this.blockHidingMenu = true;
        this.blockShowingResearchTopicsMenu = false;
        this.blockTogglingResearchTopicsMenu = true;
        setTimeout(() => { this.blockTogglingResearchTopicsMenu = false; }, 200);

        return new Promise((resolve) => {
            if (!this.state.currentlyVisibleSubmenu) {
                this.setState({
                    currentlyVisibleSubmenu: 'researchTopics',
                }, resolve);
            } else {
                setTimeout(() => {
                    if (!this.blockShowingResearchTopicsMenu) {
                        this.setState({
                            currentlyVisibleSubmenu: 'researchTopics',
                        }, resolve);
                    } else {
                        resolve();
                    }
                }, 50);
            }
        });
    }

    showPublicationsMenu() {
        this.blockHidingMenu = true;
        this.blockShowingPublicationsMenu = false;
        this.blockTogglingPublicationsMenu = true;
        setTimeout(() => { this.blockTogglingPublicationsMenu = false; }, 200);

        return new Promise((resolve) => {
            if (!this.state.currentlyVisibleSubmenu) {
                this.setState({
                    currentlyVisibleSubmenu: 'publications',
                }, resolve);
            } else {
                setTimeout(() => {
                    if (!this.blockShowingPublicationsMenu) {
                        this.setState({
                            currentlyVisibleSubmenu: 'publications',
                        }, resolve);
                    } else {
                        resolve();
                    }
                }, 50);
            }
        });
    }

    toggleResearchTopicsMenu() {
        return new Promise((resolve) => {
            if (!this.blockTogglingResearchTopicsMenu) {
                this.setState({
                    currentlyVisibleSubmenu: this.state.currentlyVisibleSubmenu === 'researchTopics' ?
                        null : 'researchTopics',
                }, resolve);
            } else {
                resolve();
            }
        });
    }

    togglePublicationsMenu() {
        return new Promise((resolve) => {
            if (!this.blockTogglingPublicationsMenu) {
                this.setState({
                    currentlyVisibleSubmenu: this.state.currentlyVisibleSubmenu === 'publications' ?
                        null : 'publications',
                }, resolve);
            } else {
                resolve();
            }
        });
    }

    renderResearchTopicsMenu() {
        return (
            <ul>
                <li>
                    <NavLink to='/montys-surprise' onClick={this.hideMenu} activeClassName='active'>
                        <img src='/static/images/layout/menu-thumbs/apples.jpg' alt='' />
                        <h3>Monty's Surprise</h3>
                        <p>Apple Cancer Prevention Research Project</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/heirloom-tomatoes'
                        onClick={this.hideMenu}
                        activeClassName='active'
                    >
                        <img src='/static/images/layout/menu-thumbs/tomatoes.jpg' alt='' />
                        <h3>Heirloom Tomatoes</h3>
                        <p>Investigating the Health Potential of the 'Real' Tomato</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/heirloom-beans' onClick={this.hideMenu} activeClassName='active'>
                        <img src='/static/images/layout/menu-thumbs/beans.png' alt='' />
                        <h3>Heirloom Beans</h3>
                        <p>The Great New Zealand Bean Hunt</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/plums-peaches' onClick={this.hideMenu} activeClassName='active'>
                        <img src='/static/images/layout/menu-thumbs/plums.jpg' alt='' />
                        <h3>Plums and Peaches</h3>
                        <p>Heritage/European plum varieties and Blackboy peaches</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/huntingtons-disease'
                        onClick={this.hideMenu}
                        activeClassName='active'
                    >
                        <img src='/static/images/layout/menu-thumbs/huntingtons.png' alt='' />
                        <h3>Huntington's Disease</h3>
                        <p>Researching a natural trehalose sugar treatment</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ancient-wheat' onClick={this.hideMenu} activeClassName='active'>
                        <img src='/static/images/layout/menu-thumbs/wheat.png' alt='' />
                        <h3>Ancient Wheat</h3>
                        <p>Preserving ancient varieties and researching gluten intolerance</p>
                    </NavLink>
                </li>
            </ul>
        );
    }

    renderPublicationsMenu() {
        return (
            <ul className='publications'>
                <li>
                    <NavLink
                        to='/publications#jessica-and-the-golden-orb'
                        onClick={this.hideMenu}
                    >
                        <img src='/static/images/layout/jessica-cover.jpg' alt='' />
                        <h3>Jessica and the <nobr>Golden Orb</nobr></h3>
                        <p>
                            A story for children about the very special properties of
                            golden-orange tomatoes.
                        </p>
                        <p>Written and illustrated by <strong>Janet Bradbury</strong>.</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/publications#jessica-the-seed-saver'
                        onClick={this.hideMenu}
                    >
                        <img src='/static/images/layout/jessica-seed-saver-cover.jpg' alt='' />
                        <h3>
                            Jessica, {
                                // Force 'the Seed Saver' to wrap (but only when the menu item is
                                // width-constrained) by adding a few pixels to the line
                                <span style={{ display: 'inline-block', paddingRight: '20px' }}>
                                    the Seed Saver
                                </span>
                            }
                        </h3>
                        <p>
                            Jessica returns in a story about saving the seeds of heritage tomatoes.
                        </p>
                        <p>Written and illustrated by <strong>Janet Bradbury</strong>.</p>
                    </NavLink>
                </li>
            </ul>
        );
    }

    render() {
        const logo = (
            <div className='logo'>
                <NavLink to='/' title='Return to the index page' activeClassName='active' />
                <img src='/static/images/layout/logo@2x.png' alt='' />
            </div>
        );

        const githubLink = (
            <OutboundLink
                to='https://github.com/bradchristensen/heritage-food-crops'
                eventLabel='GitHub Project'
                title='Contribute via GitHub'
            >
                open source
            </OutboundLink>
        );

        const bradLink = (
            <OutboundLink
                to='https://christensen.co.nz'
                eventLabel={'Brad\'s website'}
                title='Website development by Brad Christensen'
            >
                designed with love
            </OutboundLink>
        );

        return (
            <div className={!this.props.title ? 'show-header' : ''}>
                <div className='header'>
                    <div className='wrapper'>
                        {logo}
                        <h1 className='site-title'>
                            <Link to='/'><strong>Heritage Food Crops</strong> Research Trust</Link>
                        </h1>
                        {!!this.props.title && (
                            <h2 className='current-page-title'>{this.props.title}</h2>
                        )}
                    </div>
                </div>

                <div className='navbar' onMouseLeave={this.hideMenuDelayed}>
                    <div className='wrapper'>
                        <span className='caption'>Menu:</span>
                        <ul className='menu'>
                            <li>
                                <a
                                    href='#showResearchTopicsMenu'
                                    onMouseOver={this.showResearchTopicsMenu}
                                    onMouseOut={this.cancelShowingResearchTopicsMenu}
                                    onClick={(event) => {
                                        this.toggleResearchTopicsMenu();
                                        event.preventDefault();
                                    }}
                                >
                                    Research Topics
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#showPublicationsMenu'
                                    onMouseOver={this.showPublicationsMenu}
                                    onMouseOut={this.cancelShowingPublicationsMenu}
                                    onClick={(event) => {
                                        this.togglePublicationsMenu();
                                        event.preventDefault();
                                    }}
                                >
                                    Publications
                                </a>
                            </li>
                            <li>
                                <NavLink
                                    to='/about-the-trust'
                                    onClick={this.hideMenu}
                                >
                                    About the Trust
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact-us' onClick={this.hideMenu}>
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/links' onClick={this.hideMenu}>
                                    Links
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={this.state.currentlyVisibleSubmenu !== null ? 'submenu fade-visible' : 'submenu'}
                        onMouseOver={this.cancelHidingMenu}
                    >
                        <div className='wrapper'>
                            {this.state.currentlyVisibleSubmenu === 'researchTopics' &&
                                this.renderResearchTopicsMenu()}
                            {this.state.currentlyVisibleSubmenu === 'publications' &&
                                this.renderPublicationsMenu()}
                        </div>
                    </div>
                </div>

                <div className='sidebar'>
                    {logo}
                    <ul className='sidebar-menu'>
                        <li className='category category-research-topics'>
                            <span className='category-text'>Research Topics</span>
                        </li>
                        <li>
                            <NavLink to='/montys-surprise' activeClassName='active'>
                                Monty's Surprise
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/heirloom-tomatoes' activeClassName='active'>
                                Heirloom Tomatoes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/heirloom-beans' activeClassName='active'>
                                Heirloom Beans
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/plums-peaches' activeClassName='active'>
                                Plums and Peaches
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/huntingtons-disease' activeClassName='active'>
                                Huntington's Disease
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ancient-wheat' activeClassName='active'>
                                Ancient Wheat
                            </NavLink>
                        </li>

                        <li className='category category-other-resources'>
                            <span className='category-text'>Other Resources</span>
                        </li>
                        <li>
                            <NavLink to='/publications' activeClassName='active'>
                                Publications
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about-the-trust' activeClassName='active'>
                                About the Trust
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us' activeClassName='active'>Contact Us</NavLink>
                        </li>
                        <li><NavLink to='/links' activeClassName='active'>Links</NavLink></li>
                    </ul>
                </div>

                <div className='content'>
                    {this.props.children}

                    <div className='clear' />
                </div>

                <div className='footer'>
                    <div className='wrapper'>
                        Our website is {githubLink} and {bradLink}.<br />
                        <small>
                            Copyright &copy; Heritage Food Crops Research Trust,
                            <span> {new Date().getFullYear()}. </span>
                            Verbatim copying and distribution of this page is permitted in any
                            medium.
                        </small>
                    </div>
                </div>

                <Lightbox
                    visible={this.props.lightbox.visible}
                    content={this.props.lightbox.content}
                    caption={this.props.lightbox.caption}
                />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    lightbox: PropTypes.shape({
        caption: PropTypes.string,
        content: PropTypes.string,
        visible: PropTypes.bool,
    }).isRequired,
    title: PropTypes.string,
};

App.defaultProps = {
    title: null,
};

export default withRouter(connect(state => ({
    lightbox: state.lightbox,
}))(App));

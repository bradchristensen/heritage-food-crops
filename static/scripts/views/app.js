import React from 'react';
import Reflux from 'reflux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link, State } from 'react-router';
import Lightbox from 'components/lightbox';
import LightboxStore from 'stores/lightbox';
import DocumentTitleStore from 'stores/documentTitle';
import ReactGA from 'react-ga';
import OutboundLink from 'components/outboundLink';

export default React.createClass({
    mixins: [State, Reflux.ListenerMixin, PureRenderMixin],

    propTypes: {
        children: React.PropTypes.node
    },

    getInitialState () {
        return {
            currentlyVisibleSubmenu: null,

            // state from LightboxStore
            lightboxVisible: LightboxStore.getState().visible,
            lightboxContent: LightboxStore.getState().content,
            lightboxCaption: LightboxStore.getState().caption,

            currentPageTitle: null
        };
    },

    componentDidMount () {
        this.listenTo(LightboxStore, state => {
            this.setState({
                lightboxVisible: state.visible,
                lightboxContent: state.content,
                lightboxCaption: state.caption
            });
        });

        this.listenTo(DocumentTitleStore, currentPageTitle => this.setState({ currentPageTitle }));
    },

    hideMenu () {
        return new Promise(resolve => {
            this.setState({
                currentlyVisibleSubmenu: null
            }, resolve);
        });
    },

    onPrintClick (event) {
        this.hideMenu().then(() => {
            ReactGA.event({
                category: 'Navigation',
                action: 'Clicked Print'
            });
            window.print();
        });
        event.preventDefault();
    },

    blockTogglingResearchTopicsMenu: false,
    showResearchTopicsMenu () {
        this.blockTogglingResearchTopicsMenu = true;
        setTimeout(() => { this.blockTogglingResearchTopicsMenu = false; }, 200);

        return new Promise(resolve => {
            this.setState({
                currentlyVisibleSubmenu: 'researchTopics'
            }, resolve);
        });
    },

    toggleResearchTopicsMenu () {
        return new Promise(resolve => {
            if (!this.blockTogglingResearchTopicsMenu) {
                this.setState({
                    currentlyVisibleSubmenu: this.state.currentlyVisibleSubmenu === 'researchTopics' ?
                        null : 'researchTopics'
                }, resolve);
            } else {
                resolve();
            }
        });
    },

    renderMenu (thumbnailSize) {
        var pngIfThumbnail = thumbnailSize === 'thumbs' ? 'png' : 'jpg';

        return <ul>
            <li>
                <Link to='montys-surprise' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/apples.jpg'} alt='' />
                    <h3>Monty's Surprise</h3>
                    <p>Apple Cancer Prevention Research Project</p>
                </Link>
            </li>
            <li>
                <Link to='heirloom-tomatoes' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/tomatoes.jpg'} alt='' />
                    <h3>Heirloom Tomatoes</h3>
                    <p>Investigating the Health Potential of the 'Real' Tomato</p>
                </Link>
            </li>
            <li>
                <Link to='heirloom-beans' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/beans.' + pngIfThumbnail} alt='' />
                    <h3>Heirloom Beans</h3>
                    <p>The Great New Zealand Bean Hunt</p>
                </Link>
            </li>
            <li>
                <Link to='plums-peaches' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/plums.jpg'} alt='' />
                    <h3>Plums and Peaches</h3>
                    <p>Heritage/European plum varieties and Blackboy peaches</p>
                </Link>
            </li>
            <li>
                <Link to='huntingtons-disease' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/huntingtons.' + pngIfThumbnail} alt='' />
                    <h3>Huntington's Disease</h3>
                    <p>Researching a natural trehalose sugar treatment</p>
                </Link>
            </li>
            <li>
                <Link to='ancient-wheat' onClick={this.hideMenu} activeClassName='active'>
                    <img src={'/static/images/layout/menu-' + thumbnailSize + '/wheat.' + pngIfThumbnail} alt='' />
                    <h3>Ancient Wheat</h3>
                    <p>Preserving ancient varieties and researching gluten intolerance</p>
                </Link>
            </li>
        </ul>;
    },

    renderLogo () {
        return <div className='logo'>
            <Link to='/' title='Return to the index page' activeClassName='active'></Link>
            <img src='/static/images/layout/logo@2x.png' alt='' />
        </div>;
    },

    render () {
        var currentPageTitle = this.props.children && this.props.children.type ?
            this.props.children.type.currentPageTitle : null;

        return (
            <div className={!currentPageTitle ? 'show-header' : ''}>
                <div className='header'>
                    <div className='wrapper'>
                        {this.renderLogo()}
                        <h1 className='site-title'>
                            <Link to='/'><strong>Heritage Food Crops</strong> Research Trust</Link>
                        </h1>
                        {!!currentPageTitle && <h2 className='current-page-title'>{currentPageTitle}</h2>}
                    </div>
                </div>

                <div className='navbar' onMouseLeave={this.hideMenu}>
                    <div className='wrapper'>
                        <span className='caption'>Menu:</span>
                        <ul className='menu'>
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
                            <li className='menu-item-print-this-page'>
                                <a onClick={this.onPrintClick} href='#print'>Print this page</a>
                            </li>
                        </ul>
                    </div>
                    <div className={this.state.currentlyVisibleSubmenu !== null ? 'submenu fade-visible' : 'submenu'}>
                        <div className='wrapper'>
                            {this.state.currentlyVisibleSubmenu === 'researchTopics' ? this.renderMenu('thumbs') : <div />}
                        </div>
                    </div>
                </div>

                <div className='sidebar'>
                    {this.renderLogo()}
                    <ul className='sidebar-menu'>
                        <li className='category category-research-topics'>
                            <span className='category-text'>Research Topics</span>
                        </li>
                        <li><Link to='montys-surprise' activeClassName='active'>Monty's Surprise</Link></li>
                        <li><Link to='heirloom-tomatoes' activeClassName='active'>Heirloom Tomatoes</Link></li>
                        <li><Link to='heirloom-beans' activeClassName='active'>Heirloom Beans</Link></li>
                        <li><Link to='plums-peaches' activeClassName='active'>Plums and Peaches</Link></li>
                        <li><Link to='huntingtons-disease' activeClassName='active'>Huntington's Disease</Link></li>
                        <li><Link to='ancient-wheat' activeClassName='active'>Ancient Wheat</Link></li>

                        <li className='category category-other-resources'>
                            <span className='category-text'>Other Resources</span>
                        </li>
                        <li><Link to='about-the-trust' activeClassName='active'>About the Trust</Link></li>
                        <li><Link to='contact-us' activeClassName='active'>Contact Us</Link></li>
                        <li><Link to='links' activeClassName='active'>Links</Link></li>
                        <li>
                            <a onClick={this.onPrintClick} href='#print'>Print this page</a>
                        </li>
                    </ul>
                </div>

                <div className='content'>
                    {this.props.children}
                    <div className='clear'></div>
                </div>

                <div className='footer'>
                    <div className='wrapper'>
                        Our website is <OutboundLink to='https://github.com/bradchristensen/heritage-food-crops' eventLabel='GitHub Project' title='Contribute via GitHub'>open source</OutboundLink> and <OutboundLink to='//christensen.co.nz' eventLabel={'Brad\'s website'} title='Website development by Brad Christensen'>designed with love</OutboundLink>.<br />
                        <small>Copyright &copy; Heritage Food Crops Research Trust, {new Date().getFullYear()}. Verbatim copying and distribution of this page is permitted in any medium.</small>
                    </div>
                </div>

                <Lightbox visible={this.state.lightboxVisible}
                    content={this.state.lightboxContent}
                    caption={this.state.lightboxCaption} />
            </div>
        );
    }
});

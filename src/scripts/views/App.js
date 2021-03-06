import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import Footer from "../components/Layout/Footer";

import imgLogo from "../../images/layout/logo@2x.png";

import ThumbnailApples from "../../images/layout/menu-thumbs/apples.jpg";
import ThumbnailTomatoes from "../../images/layout/menu-thumbs/tomatoes.jpg";
import ThumbnailBeans from "../../images/layout/menu-thumbs/beans.png";
import ThumbnailPlums from "../../images/layout/menu-thumbs/plums.jpg";
import ThumbnailHuntingtons from "../../images/layout/menu-thumbs/huntingtons.png";
import ThumbnailWheat from "../../images/layout/menu-thumbs/wheat.png";
import ThumbnailJessicaGoldenOrb from "../../images/layout/jessica-cover.jpg";
import ThumbnailJessicaSeedSaver from "../../images/layout/jessica-seed-saver-cover.jpg";

// eslint-disable-next-line no-empty-function
const noOp = () => {};

class App extends PureComponent {
  hideMenu = () =>
    new Promise(resolve => {
      this.setState(
        {
          currentlyVisibleSubmenu: null
        },
        resolve
      );
    });

  hideMenuDelayed = () => {
    this.blockHidingMenu = false;
    return new Promise(resolve => {
      setTimeout(() => {
        if (!this.blockHidingMenu && !this.unmounted) {
          this.setState(
            {
              currentlyVisibleSubmenu: null
            },
            resolve
          );
        }
      }, 200);
    });
  };

  showResearchTopicsMenu = () => {
    this.blockHidingMenu = true;
    this.blockShowingResearchTopicsMenu = false;
    this.blockTogglingResearchTopicsMenu = true;
    setTimeout(() => {
      this.blockTogglingResearchTopicsMenu = false;
    }, 200);

    return new Promise(resolve => {
      if (!this.state.currentlyVisibleSubmenu) {
        this.setState(
          {
            currentlyVisibleSubmenu: "researchTopics"
          },
          resolve
        );
        return;
      }

      setTimeout(() => {
        if (!this.blockShowingResearchTopicsMenu && !this.unmounted) {
          this.setState(
            {
              currentlyVisibleSubmenu: "researchTopics"
            },
            resolve
          );
        } else {
          resolve();
        }
      }, 50);
    });
  };

  showPublicationsMenu = () => {
    this.blockHidingMenu = true;
    this.blockShowingPublicationsMenu = false;
    this.blockTogglingPublicationsMenu = true;
    setTimeout(() => {
      this.blockTogglingPublicationsMenu = false;
    }, 200);

    return new Promise(resolve => {
      if (!this.state.currentlyVisibleSubmenu) {
        this.setState(
          {
            currentlyVisibleSubmenu: "publications"
          },
          resolve
        );
        return;
      }

      setTimeout(() => {
        if (!this.blockShowingPublicationsMenu && !this.unmounted) {
          this.setState(
            {
              currentlyVisibleSubmenu: "publications"
            },
            resolve
          );
        } else {
          resolve();
        }
      }, 50);
    });
  };

  toggleResearchTopicsMenu = event => {
    event.preventDefault();
    return new Promise(resolve => {
      if (this.blockTogglingResearchTopicsMenu) {
        resolve();
        return;
      }

      this.setState(
        prevState => ({
          currentlyVisibleSubmenu:
            prevState.currentlyVisibleSubmenu === "researchTopics"
              ? null
              : "researchTopics"
        }),
        resolve
      );
    });
  };

  togglePublicationsMenu = event => {
    event.preventDefault();
    return new Promise(resolve => {
      if (this.blockTogglingPublicationsMenu) {
        resolve();
        return;
      }

      this.setState(
        prevState => ({
          currentlyVisibleSubmenu:
            prevState.currentlyVisibleSubmenu === "publications"
              ? null
              : "publications"
        }),
        resolve
      );
    });
  };

  renderResearchTopicsMenu = () => (
    <ul>
      <li>
        <NavLink
          to="/montys-surprise"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailApples} alt="" />
          <h3>Monty's Surprise Apple</h3>
          <p>Apple Cancer Prevention Research Project</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/heirloom-tomatoes"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailTomatoes} alt="" />
          <h3>Heirloom Tomatoes</h3>
          <p>Investigating the Health Potential of the 'Real' Tomato</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/heirloom-beans"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailBeans} alt="" />
          <h3>Heirloom Beans</h3>
          <p>The Great New Zealand Bean Hunt</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plums-peaches"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailPlums} alt="" />
          <h3>Plums and Peaches</h3>
          <p>Heritage/European plum varieties and Blackboy peaches</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/huntingtons-disease"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailHuntingtons} alt="" />
          <h3>Huntington's Disease</h3>
          <p>Researching a natural trehalose sugar treatment</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ancient-wheat"
          onClick={this.hideMenu}
          activeClassName="active"
        >
          <img src={ThumbnailWheat} alt="" />
          <h3>Ancient Wheat</h3>
          <p>Preserving ancient varieties and researching gluten intolerance</p>
        </NavLink>
      </li>
    </ul>
  );

  renderPublicationsMenu = () => (
    <ul className="publications">
      <li>
        <NavLink
          to="/publications#jessica-and-the-golden-orb"
          onClick={this.hideMenu}
        >
          <img src={ThumbnailJessicaGoldenOrb} alt="" />
          <h3>
            Jessica and the <nobr>Golden Orb</nobr>
          </h3>
          <p>
            A story for children about the very special properties of
            golden-orange tomatoes, written and illustrated by{" "}
            <strong>Janet Bradbury</strong>.
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/publications#jessica-the-seed-saver"
          onClick={this.hideMenu}
        >
          <img src={ThumbnailJessicaSeedSaver} alt="" />
          <h3>
            Jessica,{" "}
            {
              // Force 'the Seed Saver' to wrap (but only when the menu item is
              // width-constrained) by adding a few pixels to the line
              <span style={{ display: "inline-block", paddingRight: "20px" }}>
                the Seed Saver
              </span>
            }
          </h3>
          <p>
            Jessica returns in a story about saving the seeds of heritage
            tomatoes.
          </p>
          <p>
            Written and illustrated by <strong>Janet Bradbury</strong>.
          </p>
        </NavLink>
      </li>
    </ul>
  );

  constructor(props) {
    super(props);

    this.blockTogglingResearchTopicsMenu = false;
    this.blockTogglingPublicationsMenu = false;

    this.state = {
      currentlyVisibleSubmenu: null
    };

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

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const logo = (
      <div className="logo">
        <NavLink
          to="/"
          title="Return to the index page"
          activeClassName="active"
        />
        <img src={imgLogo} alt="" />
      </div>
    );

    const submenuClassName =
      this.state.currentlyVisibleSubmenu === null
        ? "submenu"
        : "submenu fade-visible";

    return (
      <div className="hfcrt-app">
        <div className="header">
          <div className="wrapper">
            {logo}
            <h1 className="site-title">
              <Link to="/">
                <strong>Heritage Food Crops</strong> Research Trust
              </Link>
            </h1>
            {Boolean(this.props.title) && (
              <h2 className="current-page-title">{this.props.title}</h2>
            )}
          </div>
        </div>

        <div className="navbar" onMouseLeave={this.hideMenuDelayed}>
          <div className="wrapper">
            <span className="caption">Menu:</span>
            <ul className="menu">
              <li>
                <a
                  href="#showResearchTopicsMenu"
                  onMouseOver={this.showResearchTopicsMenu}
                  onFocus={noOp}
                  onMouseOut={this.cancelShowingResearchTopicsMenu}
                  onBlur={noOp}
                  onClick={this.toggleResearchTopicsMenu}
                >
                  Research Topics
                </a>
              </li>
              <li>
                <a
                  href="#showPublicationsMenu"
                  onMouseOver={this.showPublicationsMenu}
                  onFocus={noOp}
                  onMouseOut={this.cancelShowingPublicationsMenu}
                  onBlur={noOp}
                  onClick={this.togglePublicationsMenu}
                >
                  Publications
                </a>
              </li>
              <li>
                <NavLink to="/about-the-trust" onClick={this.hideMenu}>
                  About the Trust
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={this.hideMenu}>
                  Contact or Donate
                </NavLink>
              </li>
              <li>
                <NavLink to="/links" onClick={this.hideMenu}>
                  Links
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={submenuClassName}
            onFocus={this.cancelHidingMenu}
            onMouseOver={this.cancelHidingMenu}
          >
            <div className="submenu-inner">
              <div className="wrapper">
                {this.state.currentlyVisibleSubmenu === "researchTopics" &&
                  this.renderResearchTopicsMenu()}
                {this.state.currentlyVisibleSubmenu === "publications" &&
                  this.renderPublicationsMenu()}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          {this.props.children}

          <div className="clear" />
        </div>

        <Footer />

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
    visible: PropTypes.bool
  }).isRequired,
  title: PropTypes.string
};

App.defaultProps = {
  title: null
};

export default withRouter(
  connect(state => ({
    lightbox: state.lightbox
  }))(App)
);

import React from 'react';
import { NavLink } from 'react-router-dom';
import OutboundLink from '../OutboundLink';

const githubLink = (
    <OutboundLink
        to="https://github.com/bradchristensen/heritage-food-crops"
        eventLabel="GitHub Project"
        title="Contribute via GitHub"
    >
        open source
    </OutboundLink>
);

export default function Footer() {
    return (
        <div className="footer">
            <div className="wrapper wrap-900">
                <div className="col-wrapper">
                    <div className="col-flex">
                        <ul>
                            <li><h5>Research Topics</h5></li>
                            <li>
                                <NavLink to="/montys-surprise" activeClassName="active">
                                    Monty's Surprise apple
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/heirloom-tomatoes" activeClassName="active">
                                    Heirloom Tomatoes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/heirloom-beans" activeClassName="active">
                                    Heirloom Beans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/plums-peaches" activeClassName="active">
                                    Plums and Peaches
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/huntingtons-disease" activeClassName="active">
                                    Huntington's Disease
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ancient-wheat" activeClassName="active">
                                    Ancient Wheat
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-flex">
                        <ul>
                            <li><h5>Publications</h5></li>
                            <li>
                                <NavLink to="/publications#jessica-and-the-golden-orb" activeClassName="active">
                                    Jessica and the Golden Orb
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/publications#jessica-the-seed-saver" activeClassName="active">
                                    Jessica, the Seed Saver
                                </NavLink>
                            </li>

                            <li><h5>The Trust</h5></li>
                            <li>
                                <NavLink to="/about-the-trust" activeClassName="active">
                                    About the Trust
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact-us" activeClassName="active">
                                    Contact Us or Make a Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/links" activeClassName="active">
                                    Contact Distributors
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-flex flex-grow">
                        Our website is {githubLink} and maintained by volunteers.<br />
                        <small>
                            Copyright &copy; Heritage Food Crops Research Trust,
                            <span> {new Date().getFullYear()}. </span><br />
                            Verbatim copying and distribution of this page is permitted in any
                            medium.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

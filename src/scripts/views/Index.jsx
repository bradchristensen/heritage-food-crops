import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import { string as smartQuote } from 'smartquotes';
import title from '../infrastructure/documentTitle';

import BannerMontysSurprise from '../../images/layout/menu-larger/apples.jpg';
import PlaceholderMontysSurprise from '../../images/layout/menu-larger/apples-blurred.jpg';
import BannerTomatoes from '../../images/layout/menu-larger/tomatoes.jpg';
import PlaceholderTomatoes from '../../images/layout/menu-larger/tomatoes-blurred.jpg';
import BannerBeans from '../../images/layout/menu-larger/beans.jpg';
import PlaceholderBeans from '../../images/layout/menu-larger/beans-blurred.jpg';
import BannerPeaches from '../../images/layout/menu-larger/peaches.jpg';
import PlaceholderPeaches from '../../images/layout/menu-larger/peaches-blurred.jpg';
import BannerWheat from '../../images/layout/menu-larger/wheat.jpg';
import PlaceholderWheat from '../../images/layout/menu-larger/wheat-blurred.jpg';

function ReadMore() {
    return (
        <p className="visible-on-hover">
            <span className="button">
                Read more
            </span>
        </p>
    );
}

function Index() {
    return (
        <div className="page-index">
            <div className="wrapper">
                <div className="wrapper wrap-900">
                    <div className="feature-text">
                        <p>
                            The <strong>Heritage Food Crops Research Trust</strong> is a
                            charitable trust, established to research
                            the <strong>early prevention and treatment</strong> of
                            disease through the medicinal properties of plant-based food and
                            natural <strong>plant-based medicine</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <ul className="menu-larger">
                <li>
                    <Link to="/montys-surprise" className="menu-banner">
                        <ProgressiveImage
                            src={BannerMontysSurprise}
                            placeholder={PlaceholderMontysSurprise}
                        >
                            {src => <img src={src} alt="The Monty's Surprise apple" className="menu-banner-background-image" />}
                        </ProgressiveImage>
                        <div className="menu-banner-content">
                            <div className="menu-banner-content-flex-end">
                                <h2 className="hide-mobile">{smartQuote("The Monty's Surprise apple")}</h2>
                                <h2 className="show-mobile-block">{smartQuote("Monty's Surprise")}</h2>
                                <p className="hide-mobile">
                                    {smartQuote(`
                                    Research coordinator Mark Christensen is credited with the
                                    discovery of the 'anti-cancer' apple, Monty's Surprise.
                                    `)}
                                </p>
                                <p>
                                    {smartQuote(`
                                    The Trust has investigated the anti-cancer properties and
                                    preventative benefits of the Monty's Surprise apple variety,
                                    and now promotes the growing and distribution of this very
                                    special variety.
                                    `)}
                                </p>
                                <ReadMore />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/heirloom-tomatoes" className="menu-banner">
                        <ProgressiveImage
                            src={BannerTomatoes}
                            placeholder={PlaceholderTomatoes}
                        >
                            {src => <img src={src} alt="Heirloom Tomatoes" className="menu-banner-background-image" />}
                        </ProgressiveImage>
                        <div className="menu-banner-content">
                            <div className="menu-banner-content-flex-end">
                                <h2>Heirloom Tomatoes</h2>
                                <p>
                                    {smartQuote(`
                                    Research into the nutritional benefits and cancer
                                    preventative properties of tomatoes, which has led to
                                    evidence suggesting that "Golden Orange" heirloom tomatoes
                                    that contain the more bio-available tetra-cis-lycopene could
                                    be superior for human health.
                                    `)}
                                </p>
                                <ReadMore />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/heirloom-beans" className="menu-banner">
                        <ProgressiveImage
                            src={BannerBeans}
                            placeholder={PlaceholderBeans}
                        >
                            {src => <img src={src} alt="Heirloom Beans" className="menu-banner-background-image" />}
                        </ProgressiveImage>
                        <div className="menu-banner-content">
                            <div className="menu-banner-content-flex-end">
                                <h2>Heirloom Beans</h2>
                                <p>
                                    Searching for, preserving and distributing heirloom bean
                                    varieties.
                                </p>
                                <ReadMore />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/plums-peaches" className="menu-banner">
                        <ProgressiveImage
                            src={BannerPeaches}
                            placeholder={PlaceholderPeaches}
                        >
                            {src => <img src={src} alt="Plums &amp; Peaches" className="menu-banner-background-image" />}
                        </ProgressiveImage>
                        <div className="menu-banner-content">
                            <div className="menu-banner-content-flex-end">
                                <h2>Plums &amp; Peaches</h2>
                                <p>
                                    Research into the nutritional benefits of heritage plums and
                                    peaches.
                                </p>
                                <ReadMore />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/ancient-wheat" className="menu-banner">
                        <ProgressiveImage
                            src={BannerWheat}
                            placeholder={PlaceholderWheat}
                        >
                            {src => <img src={src} alt="Ancient Wheat" className="menu-banner-background-image" />}
                        </ProgressiveImage>
                        <div className="menu-banner-content">
                            <div className="menu-banner-content-flex-end">
                                <h2>Ancient Wheat</h2>
                                <p>
                                    This research involves importing ancient wheat varieties
                                    into New Zealand in order to measure comparable symptoms
                                    of any gluten intolerance between bread made with these
                                    ancient grains compared to their modern wheat counterparts.
                                </p>
                                <ReadMore />
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

// The index page must populate a blank title on componentWillMount (otherwise the title will be
// whatever was defined last, i.e. the last component that was *created* - it doesn't even have
// to have been mounted)
export default title(Index, '');

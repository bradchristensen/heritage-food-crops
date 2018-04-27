import React from 'react';
import { Link } from 'react-router-dom';
import title from '../infrastructure/documentTitle';

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

                    <ul className="menu-large">
                        <li className="box">
                            <Link to="/montys-surprise">
                                <img
                                    src="/static/images/layout/menu-large/apples.jpg"
                                    className="hero"
                                    alt="Monty's Surprise"
                                />
                                <h2>Monty's Surprise</h2>
                                <p>
                                    Research coordinator Mark Christensen is credited with the
                                    discovery of the 'anti-cancer' apple, Monty's Surprise.
                                </p>
                                <p>
                                    The Trust has investigated the anti-cancer properties and
                                    preventative benefits of the Monty's Surprise apple variety,
                                    and now promotes the growing and distribution of this very
                                    special variety.
                                </p>
                            </Link>
                        </li>
                        <li className="box">
                            <Link to="/heirloom-tomatoes">
                                <img
                                    src="/static/images/layout/menu-large/tomatoes.jpg"
                                    className="hero"
                                    alt="Heirloom Tomatoes"
                                />
                                <h2>Heirloom Tomatoes</h2>
                                <p>
                                    Research into the nutritional benefits and cancer preventative
                                    properties of tomatoes, which has led to evidence suggesting
                                    that "Golden Orange" heirloom tomatoes that contain the more
                                    bio-available tetra-cis-lycopene could be superior for human
                                    health.
                                </p>
                            </Link>
                        </li>
                        <li className="box">
                            <Link to="/heirloom-beans">
                                <img
                                    src="/static/images/layout/menu-large/beans.jpg"
                                    className="hero"
                                    alt="Heirloom Beans"
                                />
                                <h2>Heirloom Beans</h2>
                                <p>
                                    Searching for, preserving and distributing heirloom bean
                                    varieties.
                                </p>
                            </Link>
                        </li>
                        <li className="box">
                            <Link to="/plums-peaches">
                                <img
                                    src="/static/images/layout/menu-large/plums.jpg"
                                    className="hero"
                                    alt="Plums and Peaches"
                                />
                                <h2>Plums and Peaches</h2>
                                <p>
                                    Research into the nutritional benefits of heritage plums and
                                    peaches.
                                </p>
                            </Link>
                        </li>
                        <li className="box">
                            <Link to="/huntingtons-disease">
                                <img
                                    src="/static/images/layout/menu-large/huntingtons.jpg"
                                    className="hero"
                                    alt="Huntington's Disease"
                                />
                                <h2>Huntington's Disease</h2>
                                <p>
                                    Research into a natural treatment to treat the symptoms and
                                    delay the onset of Huntington's disease.
                                </p>
                            </Link>
                        </li>
                        <li className="box">
                            <Link to="/ancient-wheat">
                                <img
                                    src="/static/images/layout/menu-large/wheat.jpg"
                                    className="hero"
                                    alt="Ancient Wheat"
                                />
                                <h2>Ancient Wheat</h2>
                                <p>
                                    This research involves importing ancient wheat varieties into
                                    New Zealand in order to measure comparable symptoms of any
                                    gluten intolerance between bread made with these ancient
                                    grains compared to their modern wheat counterparts.
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <hr />
            </div>
        </div>
    );
}

// The index page must populate a blank title on componentWillMount (otherwise the title will be
// whatever was defined last, i.e. the last component that was *created* - it doesn't even have
// to have been mounted)
export default title(Index, '');

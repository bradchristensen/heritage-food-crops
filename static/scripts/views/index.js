import React from 'react';
import { Link } from 'react-router';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

export default function Index() {
    return (
        <div className='page-index'>
            <a
                className='page-feature'
                href='/files/jessica-and-the-golden-orb.pdf'
                {...targetBlank}
            >
                <div className='wrapper wrap-900'>
                    <div className='wrap-right'>
                        <p>
                            <img
                                src='/static/img/layout/jessica.svg'
                                alt='Jessica and the Golden Orb'
                                width='100%'
                            />
                        </p>
                        <p>
                            A story for children about the very special properties of golden-orange
                            tomatoes, written and illustrated by Janet Bradbury.
                        </p>
                        <p>
                            We welcome you to download a copy of the book to print or read from
                            your computer for free.
                        </p>
                        <p><span className='button'>Download</span></p>
                    </div>
                </div>
            </a>

            <div className='wrapper'>
                <div className='wrapper wrap-900'>
                    <div className='feature-text'>
                        <p>
                            The <strong>Heritage Food Crops Research Trust</strong> (formerly the
                            Central Tree Crops Research Trust) is a charitable trust, established
                            to research the <strong>early prevention and treatment</strong> of
                            disease through the medicinal properties of plant-based food and
                            natural <strong>plant-based medicine</strong>.
                        </p>
                        <p />
                    </div>

                    <ul className='menu-large'>
                        <li className='box'>
                            <Link to='montys-surprise'>
                                <img
                                    src='/static/img/layout/menu-large/apples.jpg'
                                    className='hero'
                                    alt={'Monty\'s Surprise'}
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
                        <li className='box'>
                            <Link to='heirloom-tomatoes'>
                                <img
                                    src='/static/img/layout/menu-large/tomatoes.jpg'
                                    className='hero'
                                    alt='Heirloom Tomatoes'
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
                        <li className='box'>
                            <Link to='heirloom-beans'>
                                <img
                                    src='/static/img/layout/menu-large/beans.jpg'
                                    className='hero'
                                    alt='Heirloom Beans'
                                />
                                <h2>Heirloom Beans</h2>
                                <p>
                                    Searching for, preserving and distributing heirloom bean
                                    varieties.
                                </p>
                            </Link>
                        </li>
                        <li className='box'>
                            <Link to='plums-peaches'>
                                <img
                                    src='/static/img/layout/menu-large/plums.jpg'
                                    className='hero'
                                    alt='Plums and Peaches'
                                />
                                <h2>Plums and Peaches</h2>
                                <p>
                                    Research into the nutritional benefits of heritage plums and
                                    peaches.
                                </p>
                            </Link>
                        </li>
                        <li className='box'>
                            <Link to='huntingtons-disease'>
                                <img
                                    src='/static/img/layout/menu-large/huntingtons.jpg'
                                    className='hero'
                                    alt={'Huntington\'s Disease'}
                                />
                                <h2>Huntington's Disease</h2>
                                <p>
                                    Research into a natural treatment to treat the symptoms and
                                    delay the onset of Huntington's disease.
                                </p>
                            </Link>
                        </li>
                        <li className='box'>
                            <Link to='ancient-wheat'>
                                <img
                                    src='/static/img/layout/menu-large/wheat.jpg'
                                    className='hero'
                                    alt='Ancient Wheat'
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

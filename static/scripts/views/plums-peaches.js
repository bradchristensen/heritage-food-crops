import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import * as Lightbox from '../actions/lightbox';
import title from '../infrastructure/documentTitle';
import Article from '../components/article';
import SectionHeading from '../components/sectionHeading';
import SectionSubheading from '../components/sectionSubheading';

const graphBaseUrl = '/static/images/layout/plums-peaches/graphs/';

function PlumsPeaches({ dispatch }) {
    function openLightbox(event) {
        if (event.button === 0) {
            const img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
            const caption = img ? img.alt : event.currentTarget.title;
            dispatch(Lightbox.openLightbox(event.currentTarget.href, caption));
            event.preventDefault();
        }
    }

    return (
        <Article className='page-plums-peaches'>
            <div className='wrapper'>
                <SectionHeading tag='h1'>Plums</SectionHeading>

                <div className='box'>
                    <p>
                        This research will look to find superior varieties of plums for human
                        health, concentrating on investigating heritage and traditional European
                        varieties in comparison with Japanese plum varieties.
                    </p>
                </div>

                <div className='splitter'>
                    <div className='box'>
                        <SectionHeading>European Plums</SectionHeading>
                        <p>
                            These plum varieties (prunes, damsons and greengages) typically contain
                            very high levels of:
                        </p>
                        <ul>
                            <li>Anthocyanins
                                <ul>
                                    <li>Cy-rut (Cyanidin-3-rutinoside)</li>
                                    <li>Pn-glu (Peonidin-3-glycoside)</li>
                                    <li>Pn-rut (Peonidin-3-rutinoside)</li>
                                </ul>
                            </li>
                            <li>Quercetin Glycosides
                                <ul>
                                    <li>Q-rha (Quercetin-3-rhamnoside)</li>
                                    <li>Q-penthex</li>
                                </ul>
                            </li>
                            <li>Neochlorogenic acid (3-CQA)</li>
                        </ul>

                        <SectionSubheading>Graphs</SectionSubheading>
                        <div style={{ padding: '10px 20px' }}>
                            <div className='b100 gallery-thumb'>
                                <a
                                    href={`${graphBaseUrl}plums3cqa.png`}
                                    className='gallery'
                                    title='Neochlorogenic Acid in European Plums'
                                    onClick={openLightbox}
                                >
                                    <img
                                        src={`${graphBaseUrl}plums3cqa_100.png`}
                                        alt='Cinnamic Acid - 3-CQA (Neochlorogenic Acid)'
                                    />
                                </a>
                            </div>
                            <div className='b100 gallery-thumb'>
                                <a
                                    href={`${graphBaseUrl}plumscyrut.png`}
                                    className='gallery'
                                    title='Cyanidin-3-rutinoside in European Plums'
                                    onClick={openLightbox}
                                >
                                    <img
                                        src={`${graphBaseUrl}plumscyrut_100.png`}
                                        alt='Anthocyanin - Cy-rut'
                                    />
                                </a>
                            </div>
                            <div className='b100 gallery-thumb'>
                                <a
                                    href={`${graphBaseUrl}plumspnrut.png`}
                                    className='gallery'
                                    title='Peonidin-3-rutinoside in European Plums'
                                    onClick={openLightbox}
                                >
                                    <img
                                        src={`${graphBaseUrl}plumspnrut_100.png`}
                                        alt='Anthocyanin - Pn-rut'
                                    />
                                </a>
                            </div>
                            <div className='b100 gallery-thumb'>
                                <a
                                    href={`${graphBaseUrl}plumsqpenthex.png`}
                                    className='gallery'
                                    title='Quercetin Glycoside in European Plums'
                                    onClick={openLightbox}
                                >
                                    <img
                                        src={`${graphBaseUrl}plumsqpenthex_100.png`}
                                        alt='Quercetin Glycoside (Q-Penthex)'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='splitter right'>
                    <div className='box'>
                        <SectionHeading>Black Doris Plum</SectionHeading>
                        <p>Black Doris can contain very high levels of:</p>
                        <ul>
                            <li>Anthocyanins
                                <ul>
                                    <li>Cy-gal (Cyanidin-3-galactoside)</li>
                                    <li>Cy-glu (Cyanidin-3-glucoside)</li>
                                </ul>
                            </li>
                            <li>Quercetin Glycosides
                                <ul>
                                    <li>Q-glu (Quercetin-3-glucoside)</li>
                                    <li>Q-xly (Quercetin-3-xyloside)</li>
                                    <li>Q-acetythex</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='clear' />

                <SectionHeading tag='h1'>Peaches</SectionHeading>

                <div className='box'>
                    <p>
                        This research looks to find superior varieties of peaches for human health.
                    </p>
                    <p>
                        We have focussed on Blackboy peach varieties in New Zealand because of their
                        distinctive red flesh and dark skin, both colourings being indicators of
                        high levels of compounds in the variety. Blackboy Peaches are a New Zealand
                        heirloom peach variety with dark port wine skin and blood red flesh.
                        Similar red fleshed peach varieties exist around the world such as
                        pêche de vigne, or the blood peach.
                    </p>
                </div>

                <div className='box'>
                    <h2>Blackboy Peaches</h2>
                    <p>
                        Blackboy peaches can contain very high levels of chlorogenic acid (5-CQA)
                        and quercetin glycosides; Q-glu (quercetin-3-glucoside) and Q-gal
                        (quercetin-3-galactoside).
                    </p>
                    <div style={{ padding: '10px 20px 20px 20px' }}>
                        <a
                            href={`${graphBaseUrl}bb-chlorogenic-acid_800.png`}
                            className='b300'
                            onClick={openLightbox}
                            title={'Chlorogenic Acid in Blackboy Peaches compared with other peach and plum varieties'}
                        >
                            <img
                                src={`${graphBaseUrl}bb-chlorogenic-acid_300.png`}
                                alt='Chlorogenic Acid in Blackboy Peaches'
                            />
                        </a>
                        <a
                            href={`${graphBaseUrl}bb-quercetin-galactoside_800.png`}
                            className='b300'
                            onClick={openLightbox}
                            title={'Quercetin Glycoside in Blackboy Peaches compared with other peach and plum varieties'}
                        >
                            <img
                                src={`${graphBaseUrl}bb-quercetin-galactoside_300.png`}
                                alt='Quercetin Glycoside in Blackboy Peaches'
                            />
                        </a>
                    </div>
                </div>

                <div className='box'>
                    <img
                        src='/static/images/layout/plums-peaches/blackboy-peach-action-shot.jpg'
                        alt=''
                        className='fill'
                    />
                </div>

                <div className='splitter'>
                    <div className='box'>
                        <img
                            src='/static/images/layout/plums-peaches/bb-peaches-mason.jpg'
                            alt=''
                            className='fill'
                        />
                    </div>
                </div>

                <div className='splitter right'>
                    <div className='box'>
                        <img
                            src='/static/images/layout/plums-peaches/blackboy-peach.jpg'
                            alt=''
                            className='fill'
                        />
                    </div>
                </div>

                <div className='clear' />
            </div>
        </Article>
    );
}

PlumsPeaches.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(title(PlumsPeaches, 'Plums and Peaches')));

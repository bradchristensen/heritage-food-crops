import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import * as Lightbox from '../../actions/lightbox';
import title from '../../infrastructure/documentTitle';
import Article from '../../components/Article';
import SectionHeading from '../../components/SectionHeading';
import Bean from './Bean';
import beans from './data';
import gallery from './gallery';
import ImgBackground from '../../../images/layout/heirloom-beans/background.jpg';

function HeirloomBeans({ dispatch }) {
    function openLightbox(event) {
        if (event.button === 0) {
            const img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
            const caption = img ? img.alt : event.currentTarget.title;
            dispatch(Lightbox.openLightbox(event.currentTarget.href, caption));
            event.preventDefault();
        }
    }

    const emailLink = (
        <a href="mailto:info@heritagefoodcrops.org.nz">
            <strong>info@heritagefoodcrops.org.nz</strong>
        </a>
    );

    return (
        <Article className="page-heirloom-beans">
            <div className="wrapper">
                <div
                    className="box"
                    style={{
                        background: `#111 url(${ImgBackground}) no-repeat top center`,
                        border: '1px solid #FFF',
                        color: '#FFF',
                        textShadow: '1px 1px 0 #000, 0 0 1px #000, 0 0 1px #000, 0 0 3px #000',
                    }}
                >
                    <div style={{ margin: '10px auto', maxWidth: '900px' }}>
                        <p style={{ marginTop: '240px' }}>
                            Beans originated in Central and South America and began to be cultivated
                            in Mexico over 2,000 years ago. In North America today, there are over
                            4,000 different kinds of beans. All beans appear to originally have been
                            climbing beans, but over the centuries, low growing plants were selected
                            that have become our modern day dwarf varieties. Today almost all
                            commercially grown beans are dwarf because of the ease of mechanical
                            harvesting. The Trust's focus, however, is on the higher producing
                            climbing varieties with only a few dwarf varieties grown. Several of
                            the Trust's climbing varieties are shade-tolerant and have been
                            traditionally grown (in North America) amongst corn crops, where they
                            could use the corn stalks to climb up. Beans grown in this way have
                            been a wonderful protein source; rich in minerals and a superb
                            complement to corn in the diet.
                        </p>

                        <p>
                            Beans belong to the legume family, and as such can fix nitrogen in the
                            soil, which is one of the most important ingredients for plant growth;
                            they also contain soluble fibre which is beneficial in controlling
                            cholesterol and diabetes. Beans are what nutritionists call a "slow
                            release food", which is one that is slowly digested and absorbed in
                            ways that improve insulin sensitivity.
                        </p>

                        <p>
                            The Trust's experience with researching other foods indicates that
                            traditional varieties of beans will contain higher levels of
                            beneficial health compounds than modern, commercially bred cultivars.
                            Ultimately what we eat is inextricably connected with our health and
                            knowing this, our prime focus is on finding the very best varieties
                            that we can, for the present and future health of New Zealanders.
                            Secondly the changing climate conditions globally are being felt with
                            unpredictable and extreme weather occurrences here. For our own food
                            security we need to be self-reliant and have available varieties that
                            we know grow well in different climatic conditions. The Hopi Indian
                            varieties that the Trust has obtained are one example of beans that
                            can tolerate scant rainfall, semi-desert conditions, and have thrived
                            for centuries under their Indian stewardship.
                        </p>

                        <p>
                            Much of what we seek to enable us to sustain future generations has
                            been known and practiced by traditional cultures for millennia. Our
                            task is to rediscover that past knowledge to give us the foundation
                            that we need to move forward into our future.
                        </p>
                    </div>
                </div>

                <div className="box">
                    <SectionHeading>Climbing Beans imported from North America</SectionHeading>

                    <ul className="bean-list">
                        {beans.map((bean, index) => (
                            <Bean
                                // eslint-disable-next-line react/no-array-index-key
                                key={`bean-${index}`}
                                openLightbox={openLightbox}
                                {...bean}
                            />
                        ))}
                    </ul>

                    <div className="clear" />
                </div>

                <div className="box">
                    <SectionHeading>The Great New Zealand Bean Hunt</SectionHeading>
                    <p>
                        The Heritage Food Crops Research Trust has undertaken a project to find
                        all the different varieties of Heirloom Beans growing in New Zealand. These
                        old and quite often rare seeds will have superior nutritional properties
                        when compared to modern hybrid varieties. These seeds are important for the
                        medicinal health of current and future generations and need to be preserved.
                        We have undertaken to find these varieties and save them and distribute
                        them to the community.
                    </p>

                    <p>
                        If anyone in New Zealand has an old variety of bean that they would like to
                        share (whether it be a climbing bean, a Runner, a dwarf or a Broad bean)
                        we would be very pleased to hear from you. Beans may be sent to{' '}
                        <strong>
                            Heritage Food Crops Research Trust, 126A Springvale Road,
                            Whanganui 4501
                        </strong>, and we can be contacted by this address; or by
                        email at {emailLink}; or using the contact form on this website.
                    </p>

                    <p>
                        If anyone outside of New Zealand has information on beans (whether relating
                        to health, growing, or particular varieties) then we would also be very
                        interested to hear from you.
                    </p>
                </div>

                <div className="box">
                    <SectionHeading>
                        2008 Press Release: The Great New Zealand Bean Hunt
                    </SectionHeading>
                    <img
                        src={require("../../../images/layout/heirloom-beans/anasazi-beans.jpg")}
                        alt=""
                        title="Pictured: Anasazi Beans"
                        width="184"
                        height="562"
                        className="right"
                        style={{ padding: '0 15px' }}
                    />

                    <p>
                        Do you have a climber or a runner hanging around your garden shed?
                        A Whanganui-based charitable trust wants them all!
                    </p>

                    <p>
                        The Heritage Food Crops Research Trust has launched what it calls
                        "The Great New Zealand Bean Hunt" for old and rare New Zealand bean
                        varieties.
                    </p>

                    <p>
                        Director of the trust, Mark Christensen says the Trust's vision is not
                        just to save heirloom bean varieties but to improve the health of
                        New Zealanders.
                    </p>

                    <p>
                        "The work we've been involved in so far, with apples and tomatoes has
                        shown the nutritional properties of heirloom varieties tend to be greater
                        than modern varieties which are bred for commercial production," he says.
                        "This programme will endeavour to get these wonderful old varieties out
                        into the community so people can enjoy the amazing diversity of this
                        heirloom material, as well as their superior nutritional value. The Trust
                        aims to find out just what varieties of beans we have in New Zealand,
                        and which beans grow best for our particular climate and conditions. Many
                        beans are also known under more than one name, which can cause confusion.
                        It is hoped to be able to match varieties so that correct names can be
                        determined."
                    </p>

                    <p>
                        No bean is a has-been as the Trust is interested in the whole range of
                        varieties including climbing and dwarf beans, runner beans and dry beans
                        as well as Broad beans.
                    </p>

                    <p>
                        "We are looking for old varieties that people may be saving, or may be
                        sitting in jars in garden sheds, or in old seed packets, never planted.
                        Also if anyone has a special variety of bean that they would like to share,
                        this would be very much appreciated," says Mark Christensen.
                    </p>

                    <p>
                        Once gathered, the seed will be grown into plants, new seed saved and
                        named before being given away. The Heritage Food Crops Research Trust
                        works in partnership with the Whanganui Regional Health Network (WRHN)
                        to distribute trees and plants free to the community.
                    </p>

                    <p>
                        The Trust would appreciate receiving seeds or hearing from anyone who may
                        be able to assist with information on old varieties.
                    </p>
                </div>

                <SectionHeading tag="h1">Gallery</SectionHeading>
                <div className="box">
                    <p>
                        These are photos of a selection of beans and bean seed from the varieties
                        grown March/April 2009.
                    </p>
                </div>

                <div className="splitter">
                    {_.take(gallery, Math.ceil(gallery.length / 2))
                        .map((path) => (
                            <div className="box" key={path}>
                                <a href={path} onClick={openLightbox}>
                                    <img
                                        src={path}
                                        alt=""
                                        className="fill"
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="splitter right">
                    {_.takeRight(gallery, Math.floor(gallery.length / 2))
                        .map((path) => (
                            <div className="box" key={path}>
                                <a href={path} onClick={openLightbox}>
                                    <img
                                        src={path}
                                        alt=""
                                        className="fill"
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="clear" />
            </div>
        </Article>
    );
}

HeirloomBeans.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(title(HeirloomBeans, 'Heirloom Beans')));

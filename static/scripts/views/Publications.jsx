import React from 'react';
import title from '../infrastructure/documentTitle';
import OutboundLink from '../components/OutboundLink';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

const midweekLinkGoldenOrb = (
    <OutboundLink
        to="http://www.nzherald.co.nz/wanganui-chronicle/midweek/news/article.cfm?c_id=1503658&objectid=11533472"
        eventLabel="Wanganui Midweek article 'Tomato stars in new book'"
    >
        'Tomato stars in new book'
    </OutboundLink>
);

const tlcLinkGoldenOrb = (
    <OutboundLink
        to="https://www.tlc.ac.nz/news/q-what-came-first-the-chicken-or-the-egg/"
        eventLabel="The Learning Connexion article 'Q. Why did the tomato blush?'"
    >
        'Q. Why did the tomato blush?'
    </OutboundLink>
);

const midweekLinkSeedSaver = (
    <OutboundLink
        to="http://www.nzherald.co.nz/wanganui-chronicle/midweek/news/article.cfm?c_id=1503658&objectid=11741263"
        eventLabel="Wanganui Midweek article 'Spreading the seeds of heritage'"
    >
        'Spreading the seeds of heritage'
    </OutboundLink>
);

function Publications() {
    return (
        <div className="wrapper">
            <div className="wrapper wrap-900">
                <div className="feature-text">
                    <p>
                        The following stories for children, written and illustrated by
                        Janet Bradbury, explain the very special properties
                        of golden-orange tomatoes.
                    </p>
                    <p>
                        We welcome you to download a copy of these books to print, read, and
                        share with your friends and family.
                    </p>
                </div>

                <div className="box jessica publication-box-jessica">
                    <div className="flex-left">
                        <a
                            href="/static/docs/jessica-and-the-golden-orb.pdf"
                            {...targetBlank}
                        >
                            <img
                                src="/static/images/layout/jessica-cover.jpg"
                                alt=""
                            />
                        </a>

                        <p style={{ textAlign: 'center' }}>
                            <a
                                className="button"
                                href="/static/docs/jessica-and-the-golden-orb.pdf"
                                {...targetBlank}
                            >
                                Download PDF
                            </a>
                        </p>
                    </div>
                    <div className="flex-right">
                        <h2 id="jessica-and-the-golden-orb">
                            <a
                                href="/static/docs/jessica-and-the-golden-orb.pdf"
                                {...targetBlank}
                            >
                                Jessica and the Golden Orb
                            </a>
                        </h2>
                        <p>
                            <em>
                                A story for children, written and illustrated
                                by <strong>Janet Bradbury</strong>.
                            </em>
                        </p>
                        <p>
                            Jessica wants a pet, but has to settle for a heritage golden tomato
                            plant.
                            She tends the plant carefully, and discovers it has some unusual
                            characteristics - not only can it talk to those who will listen, but
                            the fruits it produces are especially good for your health.
                        </p>
                        <p>
                            Includes factual information about tomatoes and gardening, including
                            planting instructions for your own heritage tomatoes.
                        </p>

                        <h3>In the news:</h3>
                        <ul>
                            <li>{midweekLinkGoldenOrb} &mdash; Wanganui Midweek</li>
                            <li>{tlcLinkGoldenOrb} &mdash; The Learning Connexion</li>
                        </ul>
                    </div>
                </div>

                <div className="box jessica publication-box-jessica">
                    <div className="flex-left">
                        <a
                            href="/static/docs/jessica-the-seed-saver.pdf"
                            {...targetBlank}
                        >
                            <img
                                src="/static/images/layout/jessica-seed-saver-cover.jpg"
                                alt=""
                            />
                        </a>

                        <p style={{ textAlign: 'center' }}>
                            <a
                                className="button"
                                href="/static/docs/jessica-the-seed-saver.pdf"
                                {...targetBlank}
                            >
                                Download PDF
                            </a>
                        </p>
                    </div>
                    <div className="flex-right">
                        <h2 id="jessica-the-seed-saver">
                            <a
                                href="/static/docs/jessica-the-seed-saver.pdf"
                                {...targetBlank}
                            >
                                Jessica, the Seed Saver
                            </a>
                        </h2>

                        <p>
                            <em>
                                A story for children, written and illustrated
                                by <strong>Janet Bradbury</strong>.
                            </em>
                        </p>


                        <p>
                            Jessica's tomato plant finishes fruiting and suggests that she plant
                            some seeds to continue growing the golden-orange fruit. Jessica must
                            learn to save and grow the seeds of her favourite heritage tomato.
                        </p>
                        <p>Includes recipes and planting instructions.</p>

                        <h3>In the news:</h3>
                        <ul>
                            <li>{midweekLinkSeedSaver} &mdash; Wanganui Midweek</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default title(Publications, 'Publications');

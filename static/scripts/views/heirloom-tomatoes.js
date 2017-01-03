import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import Actions from '../stores/actions';
import title from '../infrastructure/documentTitle';
import Article from '../components/article';
import Contents from '../components/tableOfContents';
import References from '../components/references';
import SectionHeading from '../components/sectionHeading';
import SectionSubheading from '../components/sectionSubheading';
import Reference from '../components/reference';
import DownloadLink from '../components/downloadLink';
import OutboundLink from '../components/outboundLink';

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

const tomatoTable = [
    ['Amish Yellowish Orange Oxheart', 4.44, 0, 8.21, 0, 0, 1],
    ['Alice Brewer (orange)', 4.40, 0.02, 3.82, 0, 0, 35],
    ['Alice Brewer (orange)', 4.27, 0.02, 1.55, 0, 0, 58],
    ['Amana Orange', 4.30, 0.07, 5.04, 0, 0.01, 22],
    ['Amish Orange Sherbert Heirloom', 4.04, 0, 5.36, 0, 0, 18],
    ['Aunt Gerties Gold', 4.20, 0.06, 5.73, 0, 0, 14],
    ['Barnes Mountain Orange', 4.30, 0, 6.54, 0, 0, 8],
    ['Big Orange', 4.39, 0.03, 6.14, 0, 0, 10],
    ['Big Yellow', 4.17, 0.04, 4.06, 0, 0.03, 33],
    ['Brown\'s Yellow Giant', 4.29, 0, 3.57, 0, 0, 39],
    ['Bursztyn', 4.31, 0.03, 3.34, 0, 0, 43],
    ['Chuck\'s Golden', 4.48, 0, 5.47, 0, 0, 16],
    ['Djena Lees Golden Girl', 4.47, 0.04, 5.23, 0, 0.04, 20],
    ['Earl of Edgecomb', 4.04, 0.11, 2.52, 0, 0, 51],
    ['Elbe', 4.26, 0.03, 4.31, 0, 0, 28],
    ['Elfie (orange)', 4.23, 0.06, 4.94, 0, 0.01, 23],
    ['Elfie (orange)', 4.20, 0.09, 3.46, 0, 0, 40],
    ['Faribo Goldheart', 4.26, 0.03, 4.90, 0, 0, 24],
    ['Gary Ibsen\'s Gold', 4.35, 0.03, 4.00, 0, 0, 34],
    ['Gary\'s Golden Bear', 4.01, 0.08, 1.64, 0, 0.01, 56],
    ['Golden Grape', 4.18, 0.06, 2.50, 0.42, 0.06, 52],
    ['Golden Green', 4.24, 0.05, 7.12, 0, 0, 4],
    ['Hawaiian Pineapple', 4.28, 0.03, 6.13, 0, 0, 12],
    ['Homer Fike\'s Yellow Oxheart', 4.19, 0.05, 1.74, 0, 0.01, 54],
    ['Hurma Ukrainian', 4.36, 0.03, 5.76, 0, 0, 13],
    ['Ilse\'s Orange Latvian', 4.56, 0, 6.73, 0, 0, 7],
    ['King\'s Gold (Koanga)', 4.24, 0.04, 3.02, 0, 0, 45],
    ['Large Yellow Amish', 4.23, 0.04, 4.28, 0, 0, 29],
    ['Moonglow*', 4.43, 0, 5.38, 0, 0, 17],
    ['Mountain Gold', 4.40, 0.02, 3.60, 0, 0, 38],
    ['Old Wyandotte', 4.25, 0.02, 1.65, 0, 0, 55],
    ['Orange Beefsteak', 4.16, 0.02, 4.56, 0, 0, 26],
    ['Olga\'s Round Golden Chicken', 4.29, 0.05, 7.27, 0, 0, 3],
    ['Orange Bourgoin', 4.37, 0, 2.62, 0, 0, 49],
    ['Orange Crimea', 4.27, 0.04, 8.04, 0, 0, 2],
    ['Orange Fleshed Purple Smudge', 4.31, 0.03, 6.99, 0, 0.04, 5],
    ['Orange Latvian', 4.31, 0.02, 0.93, 0, 0, 62],
    ['Orange Plum', 4.27, 0.03, 1.84, 0, 0, 53],
    ['Orange Roma', 4.32, 0.02, 6.92, 0, 0.08, 6],
    ['Orange Strawberry', 4.29, 0.03, 4.14, 0, 0, 32],
    ['Orange Valencia', 4.16, 0.08, 4.60, 0, 0, 25],
    ['Pegs Round Orange', 4.32, 0.02, 1.08, 0, 0, 61],
    ['Persimmon', 4.00, 0.02, 5.24, 0, 0, 19],
    ['Roughwood Golden Plum', 4.34, 0.14, 3.82, 0, 0, 36],
    ['Russian Persimmon', 4.28, 0.05, 3.10, 0, 0, 44],
    ['Persimmon', 4.19, 0, 3.82, 0, 0, 37],
    ['Sakharniy Zeltiy', 4.29, 0, 3.42, 0, 0, 41],
    ['Russian Persimmon', 4.14, 0.05, 2.93, 0.52, 0.01, 46],
    ['Sibirische Orange', 4.30, 0.05, 4.56, 0.44, 0.11, 27],
    ['Small Lap', 4.07, 0.12, 2.87, 0, 0, 47],
    ['Small Sweet Orange', 4.38, 0.12, 1.63, 0.66, 0.12, 57],
    ['Summer Cider Apricot', 4.30, 0, 6.15, 0, 0, 9],
    ['Tangella (cherry type)', 4.25, 0.03, 6.13, 0, 0, 11],
    ['Tobolsk', 4.24, 0, 5.73, 0, 0.06, 15],
    ['Turkey Champ', 4.16, 0.04, 4.26, 0, 0.02, 30],
    ['Valencia', 4.38, 0.04, 1.33, 0, 0, 60],
    ['West Virginia', 4.18, 0, 5.05, 0, 0, 21],
    ['Yellow Brandywine Platfoot Strain', 4.28, 0.13, 4.15, 0, 0, 31],
    ['Yellow Oxheart', 4.23, 0.02, 2.58, 0, 0, 50],
    ['Yellow Russian', 4.40, 0.02, 1.48, 0, 0, 59],
    ['Yoders Yellow German', 4.43, 0.03, 2.65, 0, 0.01, 48],
    ['Yoder\'s Yellow German', 4.39, 0.02, 3.40, 0, 0, 42],
].map(item => ({
    genotype: item[0],
    pH: item[1],
    lutein: item[2],
    tetraCisLycopene: item[3],
    betaCarotene: item[4],
    allTransLycopene: item[5],
    ranking: item[6],
}));

function openLightbox(event) {
    if (event.button === 0) {
        const img = _.find(event.currentTarget.childNodes, node => node.tagName === 'IMG');
        const caption = img ? img.alt : event.currentTarget.title;
        Actions.openLightbox(event.currentTarget.href, caption);
        event.preventDefault();
    }
}

class HeirloomTomatoes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tomatoTableSortColumn: 'genotype',
            tomatoTableSortAscending: true,
            tomatoTableHighlightedRow: null,
            tomatoTable,
        };

        this.sortTomatoTableByColumn = this.sortTomatoTableByColumn.bind(this);
        this.renderTomatoTable = this.renderTomatoTable.bind(this);
    }

    sortTomatoTableByColumn(column) {
        const sortAscending = this.state.tomatoTableSortColumn === column ?
            !this.state.tomatoTableSortAscending : this.state.tomatoTableSortAscending;

        const newTomatoTable = _.orderBy(tomatoTable, [column], [sortAscending ? 'asc' : 'desc']);

        this.setState({
            tomatoTableSortColumn: column,
            tomatoTableSortAscending: sortAscending,
            tomatoTable: newTomatoTable,
        });
    }

    renderTomatoTable() {
        return (
            <table style={{ width: '100%', margin: 0 }}>
                <thead>
                    <tr>
                        <th style={{ border: 'none' }} />
                        <th colSpan='4' style={{ textAlign: 'center' }}>Concentration (mg/100g FW)</th>
                        <th colSpan='2' className='hide-mobile' style={{ border: 'none' }} />
                    </tr>
                    <tr>
                        {[
                            ['genotype', 'Genotype Name'],
                            ['lutein', 'Lutein'],
                            ['tetraCisLycopene', 'Tetra-cis-lycopene'],
                            ['betaCarotene', 'Beta-carotene'],
                            ['allTransLycopene', 'All-trans-lycopene'],
                            ['pH', 'pH'],
                            ['ranking', 'Ranking'],
                        ]
                        .map(column => ({ id: column[0], name: column[1] }))
                        .map((column, index) => (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                            <th
                                key={`tomato-table-header-${column.id}`}
                                style={{ textAlign: index === 0 ? 'left' : 'right' }}
                                className={`sortable-column-header${
                        this.state.tomatoTableSortColumn === column.id ? ' highlight' : ''
                        }${column.id === 'pH' || column.id === 'ranking' ? ' hide-mobile' : ''}`}
                                onClick={() => this.sortTomatoTableByColumn(column.id)}
                            >
                                {column.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tomatoTable.map((row, index) => (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <tr
                            key={`tomato-table-row-${index}`}
                            className={row.ranking === this.state.tomatoTableHighlightedRow ? 'highlight' : ''}
                            onClick={() => {
                                if (this.state.tomatoTableHighlightedRow === row.ranking) {
                                    this.setState({ tomatoTableHighlightedRow: null });
                                } else {
                                    this.setState({ tomatoTableHighlightedRow: row.ranking });
                                }
                            }}
                        >
                            <td style={{ textAlign: 'left' }}>{row.genotype}</td>
                            <td style={{ textAlign: 'right' }}>{row.lutein || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.tetraCisLycopene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.betaCarotene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }}>{row.allTransLycopene || 'n.d.'}</td>
                            <td style={{ textAlign: 'right' }} className='hide-mobile'>{row.pH}</td>
                            <td style={{ textAlign: 'right' }} className='hide-mobile'>{row.ranking}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        const midweekLink = (
            <OutboundLink
                to={'http://www.nzherald.co.nz/wanganui-chronicle/midweek/news/article.cfm?c_id=1503658&objectid=11533472'}
                eventLabel='Wanganui Midweek tomato book article'
            >
                'Tomato stars in new book'
            </OutboundLink>
        );

        const bristolLink = (
            <OutboundLink to='http://bristol.co.nz' eventLabel='Bristol Plants & Seeds'>
                www.bristol.co.nz
            </OutboundLink>
        );

        return (
            <Article className='page-heirloom-tomatoes'>
                <div className='page-feature'>
                    <div className='wrapper'>
                        <p>
                            One of these tomato varieties contains lycopene that is more easily
                            absorbed into your bloodstream, and therefore better for you. Can you
                            tell which one?
                        </p>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='splitter'>
                        <h1>Heirloom Tomatoes</h1>

                        <div className='box'>
                            <SectionHeading>Introduction</SectionHeading>
                            <p>
                                This research is looking to find the best open-pollinated tomato
                                varieties in the world for human health, particularly those highest
                                in lycopene for cancer prevention.
                                <br />
                                The research is also seeking to determine whether hybrid tomato
                                varieties (and vegetables in general) are nutritionally deficient
                                in comparison with traditional open-pollinated heirloom varieties.
                            </p>
                        </div>

                        <div className='box'>
                            <SectionHeading exclude>Contents</SectionHeading>
                            <Contents />
                        </div>

                        <div className='box jessica'>
                            <img
                                src='/static/images/layout/jessica-cover.jpg'
                                alt='Jessica and the Golden Orb'
                                className='left'
                                width='50%'
                            />
                            <div style={{ marginLeft: '50%' }}>
                                <h2 style={{ clear: 'none' }}>
                                    <a
                                        href='/static/docs/jessica-and-the-golden-orb.pdf'
                                        {...targetBlank}
                                    >
                                        Jessica and the Golden Orb
                                    </a>
                                </h2>
                                <p>
                                    A story for children about the very special properties of
                                    golden-orange tomatoes, written and illustrated by
                                    Janet Bradbury.
                                </p>
                                <p>
                                    We welcome you to download a copy of the book to print or read
                                    from your computer for free.
                                </p>
                                <p>
                                    <a
                                        className='button'
                                        href='/static/docs/jessica-and-the-golden-orb.pdf'
                                        {...targetBlank}
                                    >Download</a>
                                </p>
                                <p><em>'Jessica and the Golden Orb' was featured by the Wanganui
                                    Midweek newspaper in the article {midweekLink}.</em></p>
                            </div>
                        </div>

                        <div className='box'>
                            <SectionHeading>Research Papers</SectionHeading>

                            <DownloadLink
                                href='/files/2015-carotenoid-composition-of-tomatoes.pdf'
                                title='2015 Report - Carotenoid composition of tomatoes'
                            />

                            <DownloadLink
                                href={'/files/2014-bioavailability-of-tetra-cis-lycopene-in-humans.pdf'}
                                title={'2014 Report - The bioavailability of tetra-cis-lycopene in humans and tetra-cis lycopene concentrations in selections of heritage tomatoes'}
                            />

                            <DownloadLink
                                href={'/files/2013reportgrapefruitandtomatometabolitesforhealth.pdf'}
                                title='2013 Report - Grapefruit and Tomato Metabolites for Health'
                            />

                            <aside>
                                <DownloadLink
                                    href='/files/appendix1.pdf'
                                    title='2013 Report - Appendix 1'
                                    description={'Tangerine tomatoes increase total and tetra-cis-lycopene isomer concentrations more than red tomatoes in healthy adult humans'}
                                />

                                <DownloadLink
                                    href='/files/appendix2.pdf'
                                    title='2013 Report - Appendix 2'
                                    description={'Processing Tangerine Tomatoes: Effects of Lycopene-Isomer Concentrations and Profile'}
                                />
                            </aside>

                            <DownloadLink
                                href='/files/2009-tomato-top-varieties.pdf'
                                title='2009 Summary of Top Tomato Varieties'
                            />
                        </div>

                        <div className='box'>
                            <h2>
                                <Link to='/heirloom-tomatoes/past-research'>Past Research</Link>
                            </h2>
                            <p>
                                <Link to='/heirloom-tomatoes/past-research'>
                                    Click here to see more of our research in this area up to 2008.
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='splitter right'>
                        <div className='box'>
                            <SectionHeading>
                                The Secret to Our Health Lies in Older Varieties of Fruit
                            </SectionHeading>

                            <p><strong>Press Release 12<sup>th</sup> September 2014</strong></p>

                            <p>
                                A search for the best tomatoes for health has uncovered rare
                                heritage varieties that contain a different form of lycopene that
                                is easily absorbed when eaten raw.
                            </p>

                            <p>
                                Up to now it was generally understood that you needed to cook your
                                tomatoes in order to improve the absorption of lycopene, the
                                powerful antioxidant that appears to exert positive effects upon
                                human health. But the latest New Zealand research shows that the
                                need to cook your tomatoes only relates to modern varieties and may
                                be due to a fundamental flaw in breeding the first red tomatoes.
                            </p>

                            <p>
                                Eight years of research by the Whanganui based Heritage Food Crops
                                Research Trust (HFCRT) has culminated in a human trial at Plant &
                                Food Research in Palmerston North to test the lycopene absorption of
                                a golden/orange heritage tomato called ‘Moonglow’ in comparison with
                                a red heritage variety called ‘Rosalita’.
                            </p>

                            <p>
                                Trial participants were fed one variety of diced raw tomatoes in a
                                simple meal, and then blood samples were taken at 4, 7 and 24 hours
                                to determine how much lycopene had passed through their intestinal
                                walls and was circulating in their blood. This was followed by a 2
                                week break before the second tomato variety was eaten and further
                                blood tests were taken.
                            </p>

                            <p>
                                As expected only small amounts of lycopene from the red tomato
                                variety was detected, however the big surprise was the significant
                                amount of lycopene present from the golden/orange variety,
                                especially after 24 hours – when the amount of lycopene was at its
                                highest.
                            </p>

                            <p>
                                “It is amazing to realise that 24 hours after eating these raw
                                golden/orange tomatoes they are still providing significant health
                                benefits,” said Mark Christensen, research director for the HFCRT.
                                “We  have a wonderful opportunity to improve health outcomes for
                                people by eating the right foods, and these particular golden/orange
                                varieties are far superior in that regard compared to tomatoes of
                                other colours (including red).”
                            </p>

                            <p>
                                The underlying reasons for this significant difference appear to
                                relate to the chemistry and history of tomato.
                            </p>

                            <p>
                                The original tomatoes that were introduced into Europe in the 1520’s
                                had been cultivated in Mexico. Those original tomatoes were named
                                ‘Pomodoro’, which in Italian means ‘golden fruit’. The HFCRT
                                believes that those original golden tomatoes contained the easily
                                absorbable tetra-cis-lycopene, which has a bent molecular structure
                                and is easily absorbed by the human body when consumed as a raw
                                food – in a salad or picked and eaten straight from the vine. It is
                                believed that the ‘Moonglow’ tomato and other golden/orange
                                varieties that have been chemically analysed and shown to contain
                                tetra-cis-lycopene are strains from those original golden fruit.
                            </p>

                            <p>
                                Unfortunately when the first Europeans crossed tomatoes to introduce
                                the red colour to improve their consumer appeal, they were not aware
                                that the beneficial easily absorbed form of lycopene was a recessive
                                gene and would be replaced by the dominant red form of lycopene
                                called all-trans-lycopene. This is the form of lycopene in our
                                modern red tomatoes and has a linear molecular structure that cannot
                                pass easily into the bloodstream unless subjected to intense heat.
                                “We would like to think that if this had been known over 450 years
                                ago they may have considered the red tomatoes inappropriate for
                                human consumption and stuck with the golden ones, or at least
                                changed their name to reflect the significant difference that
                                occurred through the breeding process.”
                            </p>

                            <p>
                                The HFCRT works in partnership with the Whanganui Regional Health
                                Network and as in previous years will be distributing free tomato
                                plants around the Whanganui region – this November all the plants
                                will be golden/orange varieties to meet the joint intention of
                                enabling the community to grow the best tomato varieties for
                                health.
                            </p>

                            <p>
                                The Trust is very grateful to local Whanganui donors as well as
                                the Bay of Plenty branch of the New Zealand Tree Crops Association
                                for providing the funding for this ground-breaking research.
                            </p>

                            <p>
                                It is generally known that raw food is better for us, so it has
                                always been an anomaly to be told that tomatoes should be cooked
                                in order to improve the health benefits from their lycopene content.
                                Now with this research we are able to get a better understanding of
                                the detrimental effects that commercial breeding can have in
                                changing the inherent health benefits of the original golden
                                tomatoes. Given that commercial breeding practices have changed
                                little over the 450 years since this mistake was made with tomato,
                                this should be a red flag to all those who undertake this practice
                                and even more importantly a clarion call to all those around the
                                world who save old seed varieties. Without those dedicated
                                individuals and small (mainly non-profit) organisations that have
                                recognized the inherent value of this diverse gene pool of material,
                                we would not now have the varieties to find and return to. If we
                                are to learn from Hippocrates, the father of modern medicine, who
                                said “let food be your medicine and medicine be your food”, then we
                                and our future generations will need these seeds to keep us well.
                            </p>

                            <p>
                                The HFCRT has so far uncovered 16 golden/orange tomato varieties
                                that contain the beneficial tetra-cis-lycopene, and will continue
                                to have more varieties analysed to discover their inherent benefits.
                                They are indebted to Dr Tony McGhie and his colleagues at Plant &
                                Food Research in Palmerston North for their assistance with this
                                research. The golden/orange tomatoes will appeal to many because of
                                their stunning colour (ranging from golden to bright orange), lower
                                acidity and suitability for the home gardener.
                            </p>

                            <p>
                                Through this research and the world-wide search for heritage tomato
                                varieties conducted by the HFCRT, New Zealanders now have the
                                opportunity to grow these ‘real’ tomatoes with their more available
                                form of lycopene. Seeds of these varieties are available for
                                purchase from {bristolLink}.
                            </p>

                        </div>
                    </div>

                    <div className='clear' />

                    <div className='splitter'>
                        <div className='box'>
                            <img
                                src='/static/images/layout/tomatoes/moonglow-vertical.jpg'
                                alt='Moonglow tomatoes'
                                className='fill'
                            />
                            <p><em>Moonglow tomatoes</em></p>
                        </div>
                    </div>

                    <div className='splitter right'>
                        <div className='box'>
                            <img
                                src='/static/images/layout/tomatoes/rosalita-vertical.jpg'
                                alt='Rosalita tomatoes'
                                className='fill'
                            />
                            <p><em>Rosalita tomatoes</em></p>
                        </div>
                    </div>

                    <div className='clear' />

                    <div className='box'>
                        <SectionHeading>
                            Discovery of the Real Tomato (12 April 2013)
                        </SectionHeading>
                        <p>
                            We are delighted to announce a break-through in our understanding about
                            the superior health benefits of specific tomato varieties.
                        </p>

                        <p>
                            Two types of lycopene can be found in tomato. All-trans-lycopene is
                            commonly found in red (and other colour) tomatoes; and
                            tetra-cis-lycopene (also known as prolycopene) is found in some orange
                            heirloom tomatoes.
                        </p>

                        <p>
                            It has been known for some time that all-trans-lycopene is not well
                            absorbed by the human body: hence the advice to eat cooked tomatoes so
                            the body can better absorb the lycopene. The linear configuration of
                            the all-trans-lycopene molecule seems to hinder its absorption through
                            intestinal walls and into the blood, according to Steven Schwartz from
                            Ohio State's Comprehensive Cancer Centre.
                        </p>

                        <p>
                            However tetra-cis-lycopene is much better absorbed by the body &mdash;
                            in fact two and a half times better! This form was detected in 2011 in
                            "Tangerine", a golden orange heirloom tomato. The structure of this
                            lycopene molecule conforms more closely with the lycopene found
                            circulating in human blood.
                        </p>

                        <p>
                            Eleven more heirloom tomato varieties that contain this highly
                            beneficial anti-oxidant compound have been identified in the latest
                            research by the Heritage Food Crops Research Trust, assisted by
                            Plant and Food Research in New Zealand.
                        </p>

                        <SectionSubheading>Top Varieties with Tetra-Cis-Lycopene</SectionSubheading>

                        <div style={{ padding: '10px 25px' }}>
                            <table style={{ boxSizing: 'border-box', width: '100%', margin: 0 }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: 'none' }} />
                                        <th colSpan='4' style={{ border: 'none', textAlign: 'center' }}>Carotenoids (mg/100g FW)</th>
                                    </tr>
                                    <tr>
                                        <th style={{ border: 'none' }}>Cultivar Name</th>
                                        <th style={{ lineHeight: '120%' }}>Tetra-cis-<br />Lycopene</th>
                                        <th style={{ lineHeight: '120%' }}>All-trans-<br />Lycopene</th>
                                        <th>B-Caro</th>
                                        <th>Lutein</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/moonglow_800.jpg'
                                                title='Moonglow'
                                                onClick={openLightbox}
                                            >Moonglow</a>
                                        </td>
                                        <td>5.36</td><td>0.05</td><td>n.d.</td><td>0.06</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/tangerine_800.jpg'
                                                title='Tangerine'
                                                onClick={openLightbox}
                                            >Tangerine</a>
                                        </td>
                                        <td>4.43</td><td>n.d.</td><td>n.d.</td><td>0.05</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/orangefleshedpurplesmudge_800.jpg'
                                                title='Orange Fleshed Purple Smudge'
                                                onClick={openLightbox}
                                            >Orange Fleshed Purple Smudge</a>
                                        </td>
                                        <td>4.36</td><td>0.06</td><td>n.d.</td><td>0.09</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/amishorangesherbertheirloom_800.jpg'
                                                title='Amish Orange Sherbert Heirloom'
                                                onClick={openLightbox}
                                            >Amish Orange Sherbert Heirloom</a>
                                        </td>
                                        <td>4.35</td><td>0.01</td><td>n.d.</td><td>0.02</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/auntgertiesgold_800.jpg'
                                                title={'Aunt Gertie\'s Gold'}
                                                onClick={openLightbox}
                                            >Aunt Gertie's Gold</a>
                                        </td>
                                        <td>4.21</td><td>0.02</td><td>n.d.</td><td>0.04</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/bigorange_800.jpg'
                                                title='Big Orange'
                                                onClick={openLightbox}
                                            >Big Orange</a>
                                        </td>
                                        <td>3.79</td><td>0.03</td><td>1.36</td><td>0.02</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/amishyellowishorangeoxheart_800.jpg'
                                                title='Amish Yellowish Orange Oxheart'
                                                onClick={openLightbox}
                                            >Amish Yellowish Orange Oxheart</a>
                                        </td>
                                        <td>2.67</td><td>0.02</td><td>n.d.</td><td>0.05</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/earlofedgecomb_800.jpg'
                                                title='Earl of Edgecomb'
                                                onClick={openLightbox}
                                            >Earl of Edgecomb</a>
                                        </td>
                                        <td>2.63</td><td>n.d.</td><td>n.d.</td><td>0.07</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/elbe_800.jpg'
                                                title='Elbe'
                                                onClick={openLightbox}
                                            >Elbe</a>
                                        </td>
                                        <td>2.45</td><td>n.d.</td><td>n.d.</td><td>0.06</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/sibirischeorange_800.jpg'
                                                title='Sibirische Orange'
                                                onClick={openLightbox}
                                            >Sibirische Orange</a>
                                        </td>
                                        <td>1.72</td><td>0.03</td><td>n.d.</td><td>0.04</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/orangeroma.jpg'
                                                title='Orange Roma'
                                                onClick={openLightbox}
                                            >Orange Roma</a>
                                        </td>
                                        <td>1.42</td><td>0.10</td><td>0.41</td><td>0.13</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a
                                                href='/files/dadssunset_800.jpg'
                                                title={'Dad\'s Sunset'}
                                                onClick={openLightbox}
                                            >Dad's Sunset</a>
                                        </td>
                                        <td>1.01</td><td>0.04</td><td>0.13</td><td>0.04</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                (n.d. = not detected)<br /><strong>Click on the cultivar names to
                                see photos.</strong>
                            </p>
                        </div>

                        <p>
                            Realising that the common tomato (<em>Solanum lycopersicum</em>) was
                            originally a golden yellow/orange colour is a key piece of the puzzle.
                            This was the colour of the first tomatoes found by the Spanish in Mexico
                            in the early 1500s and taken back to Europe. When they arrived in Italy,
                            they were named <em>pomodoro</em>: "golden fruit".
                        </p>

                        <p>
                            It is our hypothesis that these golden tomatoes contained the tetra-cis
                            form of lycopene and that they were highly beneficial for human health,
                            as the tetra-cis-lycopene would have been easily absorbed through the
                            intestinal walls into the bloodstream.
                        </p>

                        <p>
                            Later, when breeding of tomatoes began, they were bred purely for
                            consumer appeal to be red. Unfortunately for 400 years there has been a
                            lack of understanding about the consequences of that breeding approach.
                        </p>

                        <p>
                            The beneficial tetra-cis-lycopene is a recessive gene, and as systematic
                            breeding took place, this recessive gene was replaced by the more
                            dominant all-trans-lycopene gene.
                        </p>

                        <p>
                            In order to correct this mistake, we must go back to the past to
                            re-discover the old original tomatoes that still contain the correct
                            composition of beneficial compounds for human health. This is the
                            focus of our research. After seven years, we believe we have found the
                            indicator that we have been searching for: tetra-cis lycopene. We
                            believe that the varieties that still contain this compound have
                            retained sufficient elements of their original genetic makeup to be the
                            correct platform from which to take tomatoes into the future.
                        </p>

                        <p>
                            One of the great challenges for people at this time is the lack of
                            understanding of the consequences of our actions. We have a vast amount
                            of knowledge and many technical skills, but we appear to lack the
                            wisdom to know when to apply them and when not to. Tomato is one of the
                            most widely eaten fruits in the world and as such could play a major
                            role in reducing heart disease and cancer &mdash; but only if we eat
                            the varieties with high levels of beneficial compounds. However the
                            unrestrained commercial breeding of tomatoes has led to a disturbing
                            reduction in their actual medicinal benefit.
                        </p>

                        <p>
                            We are now beginning the second phase of our tomato research,
                            concentrating on growing those varieties that are high in
                            tetra-cis-lycopene and distributing them throughout New Zealand
                            communities.
                        </p>

                        <p>
                            Based on what we have learnt from years of research into apples and
                            tomatoes &mdash; that commercially bred varieties contain reduced
                            levels of beneficial compounds &mdash; we will not "breed" these
                            orange tomatoes, cross them or in any other way artificially manipulate
                            them.
                        </p>

                        <p>
                            However we will encourage members of our community to become part of
                            this next phase of the research – to actively participate by growing
                            these plants with love. This is the most important ingredient that we
                            can share, along with our intention to be open to these plants further
                            evolving, so that their fruits will contain the very best qualities
                            for human health and wellbeing. In this way we wish to create through
                            our positive intention, and to allow the consequences to freely
                            manifest.
                        </p>
                    </div>

                    <div className='box'>
                        <img
                            src='/static/images/layout/tomatoes/moonglow-centrepiece.jpg'
                            alt='The Moonglow tomato variety'
                        />
                        <p><em>Moonglow tomatoes also make a terrific centrepiece!</em></p>
                    </div>

                    <div className='box'>
                        <SectionHeading>
                            2013: The Health Potential of the 'Real' Tomato
                        </SectionHeading>

                        <p>
                            The Heritage Food Crops Research Trust is a very small charitable Trust
                            in New Zealand that investigates the health properties of fruit and
                            vegetables in order to find the very best medicinal foods for human
                            health. To date, we have concentrated on apples, tomatoes and beans.
                        </p>

                        <p>
                            We wish to find the truth about what foods are best for our health. The
                            data we have gathered on tomatoes clearly shows some of the old heirloom
                            varieties have substantially higher levels of beneficial compounds than
                            modern hybrid varieties.
                        </p>

                        <p>
                            Our direction has been influenced by our earlier work on apples, which
                            indicated that there must be a flaw in modern breeding programmes
                            whereby breeding criteria (and possibly other factors) led to lower
                            levels of beneficial compounds in modern bred apples. Accordingly we
                            have striven to find the oldest tomato varieties available anywhere
                            in the world. Our work highlights the accelerated contamination of the
                            gene pool that has happened in the past hundred years.
                        </p>

                        <SectionSubheading>Tomatoes: the 'golden fruit'</SectionSubheading>

                        <p>
                            We are seven years into our tomato study. Our research on apples and
                            tomatoes has shown the importance of heirloom (heritage) and old
                            seedling varieties that contain much higher levels of beneficial
                            compounds compared to modern, commercially bred varieties. For
                            instance, within the wonderful diversity of colours, shapes and
                            sizes of heirloom tomatoes, are a rich assortment of carotenoids
                            and polyphenolic compounds. This includes varieties with good levels
                            of specific medicinal compounds such as lycopene, recognised in a
                            number of reputable studies to reduce the incidence of heart disease
                            and certain cancers.
                        </p>

                        <p>
                            In our search for the best medicinal tomato, we are trying to find a
                            tomato that has retained the purity of its genetic blueprint over a
                            considerable period of time; a variety that has not been changed through
                            human manipulation. We believe that we have found just that in some
                            heirloom orange tomatoes, varieties we think are closely linked to the
                            'golden fruits' or pomodoro that appear in the 1544 herbal of Matioli.
                            They were the first tomatoes introduced to Europe following Hernan
                            Cortes's conquest of Mexico (and tomatoes are still known by that name
                            today in Italy). Our hypothesis is that these tomatoes will provide
                            superior health benefits.
                        </p>

                        <p>
                            Because the health benefits of lycopene are widely recognized in
                            scientific literature, it is one of the key compounds we looked for
                            in the chemical analysis of our heirloom tomato samples. However the
                            all-trans-lycopene present in today's red tomatoes is a molecule whose
                            linear structure seems to hinder its absorption within the body. This
                            is why we hear recommendations to cook tomatoes and combine them with
                            fat, in order to improve our absorption of lycopene
                            <Reference
                                source={'Turning up the heat on tomatoes boosts absorption of lycopene'}
                                href='http://researchnews.osu.edu/archive/lycoproc.htm'
                            />. This has always seemed to me to be unusual, given that natural
                            food in its raw state is typically better for us, and each stage of
                            processing of food does diminish the medicinal quality of that food.
                        </p>

                        <h3>Discovered: tetra-cis-lycopene</h3>

                        <p>
                            We became aware of studies at Ohio State University and the Agricultural
                            Research Service in California on an heirloom tomato variety,
                            "Tangerine". These found an alternative form of lycopene they call
                            tetra-cis-lycopene. (It is also known as prolycopene.) Its structure is
                            more like the lycopene that circulates in human blood. Tomato sauces
                            made from red and Tangerine tomatoes were tested on volunteers. They
                            found that the tetra-cis-lycopene from the Tangerine variety was more
                            efficiently absorbed by the body. Further, oxidative damage decreased
                            after eating either of the sauces, but the effect was greater after
                            eating the Tangerine tomato sauce.
                            <Reference source={'"Tangerine Tomatoes top reds in preliminary lycopene study": Agricultural Research, February 2011'} />
                        </p>

                        <p>
                            This clearly indicates the superior benefit of consuming these orange
                            tomatoes containing tetra-cis-lycopene in a cooked form. But what about
                            raw? The research has not yet been done to find out how
                            tetra-cis-lycopene behaves and is absorbed when eaten as a raw fruit.
                            Nevertheless, based on the indicators, we are confident that it will
                            be very well absorbed by the body when eaten raw. We will endeavour to
                            obtain funding so that this research can be done.
                        </p>

                        <SectionSubheading>Our findings</SectionSubheading>

                        <p>
                            We now have data on over 300 tomato varieties. We found 12 varieties
                            with tetra-cis-lycopene ranging from 1.01 to 5.36 mg/100g FW: all are
                            heirlooms and distinctively orange in colour. We used a modern
                            commercially bred hybrid tomato called "Daniella" as a control. This
                            is one of the most popular commercial hybrid tomatoes in New Zealand
                            and is an attractive red, regular sized, firm and prolific tomato. Its
                            levels of medicinal compounds are very low!
                        </p>

                        <p>
                            Our research leads us to the hypothesis that traditional Solanum
                            lycopersicon tomatoes were originally golden-orange in colour and
                            contained tetra-cis-lycopene that is more easily absorbed in the human
                            body and therefore of great benefit for human health.
                        </p>

                        <p>
                            We further hypothesise that tomatoes containing tetra-cis-lycopene have
                            greater potential to improve human health, in particular by reducing
                            the incidence of heart disease and certain cancers.
                        </p>

                        <p>
                            Extensive breeding of tomatoes over hundreds of years has led to the
                            recessive gene in tetra-cis-lycopene being progressively bred out,
                            replaced by the more dominant all-trans-lycopene we now find in
                            tomatoes and red tomatoes in particular. This inadvertent consequence
                            of tomato breeding has significantly diminished the modern tomato's
                            medical value. It is quite probable that there is no modern commercially
                            bred hybrid tomato with this valuable tetra-cis-lycopene.
                        </p>

                        <p>
                            We consider the identification of tetra-cis-lycopene and its connection
                            to the original <em>pomodoro</em> tomatoes a breakthrough in our
                            understanding. From now on we will only grow these high-health
                            golden-orange varieties.
                        </p>

                        <p>
                            The challenge we now face is how to maintain or even enhance the
                            medicinal qualities of these varieties, without falling into the
                            commercial (or perhaps ego-driven) trap of manipulation for the wrong
                            reasons.
                        </p>

                        <SectionSubheading>Competing interests</SectionSubheading>

                        <p>
                            Our Trust contracts a scientist at a major New Zealand plant research
                            organization to carry out the chemical analysis of our tomato samples.
                            His attempts to generate some interest within his organisation in
                            further research on tomatoes have been unsuccessful. He was told there
                            were major commercial barriers to the establishment of a 'new' tomato,
                            one being the yield: if a variety can't produce 16 trusses of fruit,
                            commercial growers are not interested. And even though the research on
                            heirloom tomatoes clearly shows that they are superior for human health,
                            they are perceived to be less productive and hence not worth growing.
                            This of course ignores the quite different requirements of the many
                            gardeners  growing their own tomatoes in their backyard.
                        </p>

                        <p>
                            In the modern world we have given responsibility for growing food over
                            to commercial interests, especially as we have become more
                            time-constrained with work pressures, travel times and the complexities
                            of modern day living. However as many are now realising, modern
                            commercial growers use seeds and methods that conform to their specific
                            criteria and needs. Maximising profit for business through increasing
                            yields has come at the cost of nutritional and medicinal quality.
                        </p>

                        <p>
                            In my view, those breeding tomatoes over the centuries have been
                            completely unaware of the long-term implications of what they were
                            doing. Only on examination of the results do we see the foolhardiness
                            of the approach taken. It is impossible to quantify the adverse health
                            outcomes arising from tampering with a healthy medicinal fruit for
                            spurious commercial reasons. If this is representative of the widespread
                            breeding and manipulation of our food supply that has taken place,
                            then we only have to look around us at the level of ill health in
                            society today to see the consequences.
                        </p>

                        <p>
                            Fortunately there is a growing awareness of the need to take back
                            responsibility and exercise control over our food supply once more.
                            To this end we are very pleased to be members of various seed saving
                            organisations and part of this wonderful, worldwide reawakening of
                            understanding regarding food. It is indeed fortunate that there are
                            dedicated individuals and groups who keep the remnants of our
                            heirloom seeds alive, jewels we can turn to when these breeding
                            mistakes are eventually detected.
                        </p>

                        <p>
                            Our emphasis on medicinal quality is not new. It is an ancient
                            understanding, epitomised by the teachings of Hippocrates: that
                            food is mankind's medicine and contains within it all that is needed
                            to keep people well.
                        </p>
                    </div>

                    <div className='box'>
                        <SectionHeading>
                            Invitation to New Zealand Tomato Growers (April 2013)
                        </SectionHeading>

                        <p className='right'>
                            <a
                                href='/files/tomato-selection_800.jpg'
                                className='b300'
                                onClick={openLightbox}
                                title={'Just a few of the 100 heirloom tomato varieties grown in 2009 for scientific analysis.'}
                            >
                                <img
                                    src='/files/tomato-selection_300.jpg'
                                    alt={'Just a few of the 100 heirloom tomato varieties grown in 2009 for scientific analysis.'}
                                />
                            </a>
                        </p>

                        <p>
                            We invite keen tomato growers to join us and be part of our ongoing
                            tomato research.
                        </p>

                        <p>
                            The Heritage Food Crops Research Trust has completed 7 years of
                            research into heirloom tomatoes.  This has culminated with the finding
                            of 12 varieties that contain a better form of lycopene (known as
                            tetra-cis-lycopene) that has been shown in studies in the United States
                            to be 2.5 times more efficiently absorbed by the body than the
                            all-trans-lycopene found in red tomatoes.  The tetra-cis-lycopene is
                            found in certain golden orange heirloom tomatoes and the Trust had
                            imported seed of these varieties for its research.
                        </p>

                        <p>
                            Lycopene that can be absorbed, finds its way into the blood where
                            because it is a powerful antioxidant, it protects cells and essential
                            fatty acids ("the good fats") against oxidation.
                        </p>

                        <p>
                            To date the US studies have only compared tomato sauces made from
                            red and orange tomatoes and found in the blood samples taken from
                            their volunteers that the lycopene from the orange tomato sauce was
                            much better absorbed into the body and correspondingly better able
                            to decrease oxidative damage.
                        </p>

                        <p>
                            Lycopene in fresh red tomatoes is not well absorbed by the body because
                            it has a linear molecular structure, which has difficulty passing
                            through the intestinal wall into the blood.
                        </p>

                        <p>
                            However the tetra-cis lycopene found in these orange heritage
                            tomatoes has a bent molecular form that corresponds more closely
                            with the lycopene found naturally within the body.
                        </p>

                        <p>
                            This is one reason why our researchers believe that the lycopene
                            from these orange tomatoes picked straight from the vine or tossed
                            into a salad (especially with an oil-based dressing) will be also
                            well absorbed and able to exert its health-giving properties. We are
                            currently looking for funding from New Zealand philanthropists so that
                            we can initiate this study.  Another reason we are so excited about
                            this find is the historical background – it's been like putting the
                            pieces of a puzzle together.
                        </p>

                        <p>
                            In the early 1500's Hernan Cortes and his conquistadores conquered
                            Mexico and discovered the tomatoes that were being grown there. They
                            sent them back to Europe and when they arrived in Italy they were named
                            "Pomodoro", which is still their name in Italy today – it means golden
                            fruits.  We believe these original golden tomatoes would have all
                            contained the tetra-cis lycopene and that this would be naturally
                            well-absorbed by the body. At some stage after this introduction
                            into Europe, breeding began to take place and the tomatoes were bred to
                            be red to appeal to consumers' love of red coloured fruit. At that stage
                            we hypothesise that the recessive tetra-cis lycopene gene was
                            inadvertently replaced with the more dominant all-trans-lycopene form
                            found in red tomatoes. Hence at a very early stage in the breeding of
                            tomatoes an error occurred that has been repeated for hundreds of
                            years, and it is only now that we think we can see what has happened.
                        </p>

                        <p>
                            We believe that there is a wonderful opportunity to improve human health
                            by replacing red tomatoes with these orange tomatoes. Tomato is the
                            primary source of lycopene for human consumption. We know that it is a
                            powerful biological antioxidant and scientific studies have shown that
                            high lycopene intake is associated with decreased risk of heart disease
                            and cancer, especially prostate cancer.
                        </p>

                        <p>
                            Our Trust together with the Whanganui Regional Primary Health
                            Organisation will be getting Bristol Plants and Seeds to grow 5,000
                            of these orange tomato plants for free distribution around the
                            Whanganui region this November. We will also be asking keen tomato
                            growers to give us a few seeds back so that we can have enough seeds
                            for future wider distributions. We will also asking growers to
                            keep an eye out for any possible changes as the varieties may
                            potentially evolve naturally over time. We wish to avoid the mistakes
                            made by commercial breeders in the past who have diminished the levels
                            of beneficial compounds in today's modern tomatoes. Rather than try
                            and control the breeding process, as commercial breeders do, we would
                            like to try an alternative approach.
                        </p>

                        <p>
                            Our objective is to have the best tomatoes in the world for human
                            health and we would like individuals who share this intent to join us,
                            to grow these tomatoes with this intention and with love. It is an
                            open-source project in that people will be free to grow and sell their
                            produce or plants or give them away to others. We just ask that you
                            don't physically manipulate the varieties to try and cross them.
                            Just allow this to happen naturally, if that is what is meant to happen,
                            and if you notice that a change has occurred in the variety, then
                            please share a few seeds back with us, so that we can analyze and
                            monitor the ongoing development of these fruits.
                        </p>

                        <p>
                            Science now recognises that scientists can influence the outcomes of
                            their experiments just by wanting a particular outcome and hence the
                            modern advent and use of double-blind trials. We believe that a
                            person's intention when they plant a seed can influence the growth and
                            development of that plant.  We would like to couple that with research
                            into whether outcomes are not as random as has previously been thought.
                            Einstein used to say that "God does not play dice" (allowing for each
                            person's individual interpretation for the term "God"), perhaps
                            life has more meaning than we may have previously attributed to it.
                            Perhaps there are external factors and natural laws that affect man.
                            Perhaps we have a creative ability through our intention that can
                            influence the outcome of events. Our research intends to explore these
                            possibilities through the medium of "tomatoes".
                        </p>

                        <p><strong><em>Tomato seeds can be purchased from <OutboundLink to='http://www.bristol.co.nz' eventLabel='Bristol Plants & Seeds'>Bristol Plants & Seeds</OutboundLink>, or <Link to='contact-us'>contact us</Link> if you would like to be a part of our research and trial one of these varieties.</em></strong></p>
                    </div>

                    <div className='box'>
                        <img
                            src='/static/images/layout/tomatoes/mark-golden-orange-tomatoes.jpg'
                            alt='Mark Christensen'
                        />
                        <p><em>Mark Christensen inspects some of the Trust's
                        golden/orange tomatoes.</em></p>
                    </div>

                    <div className='box'>
                        <SectionHeading>References</SectionHeading>
                        <References />
                    </div>

                    <div className='box'>
                        <SectionHeading>
                            Appendix: Tomato varieties confirmed to contain Tetra-cis-lycopene
                        </SectionHeading>

                        <p>
                            Tetra-cis-lycopene is a highly beneficial bioavailable form of lycopene,
                            and exhibits a golden-orange or tangerine tomato colour. But not all
                            tomatoes with this colour contain tetra-cis-lycopene, as this colour can
                            also be expressed by beta-carotene. Hence it is necessary to chemically
                            analyse each tomato variety to verify whether or not it contains
                            tetra-cis-lycopene.
                        </p>

                        <p>
                            We provide here a list of all the varieties that we have had analysed
                            and confirmed to have tetra-cis-lycopene to assist health conscious
                            gardeners, healthy food advocates and researchers worldwide. Data has
                            been obtained from the 2015 season.
                        </p>

                        <div style={{ padding: '10px 25px' }}>
                            {this.renderTomatoTable()}
                        </div>

                        <h4>Notes on tetra-cis-lycopene levels</h4>

                        <p>* The level of tetra-cis-lycopene is very dependent upon the ripening
                        state of the tomato, with maximum levels appearing to be at the optimum
                        full ripeness stage for picking and immediate eating. Our 'Moonglow'
                        tomatoes were picked early and therefore their level of 5.38 for
                        tetra-cis-lycopene will be greater if left to ripen further.</p>
                        {/*
                            <p>**Data for the 'Tangerine' variety was not available for this 2015
                            season, however based on its previous analysis we have estimated its
                            level for the purpose of this table.</p>
                        */}
                        {/* TODO: Add Tangerine to the table */}
                    </div>
                </div>
            </Article>
        );
    }
}

export default title(HeirloomTomatoes, 'Heirloom Tomatoes');

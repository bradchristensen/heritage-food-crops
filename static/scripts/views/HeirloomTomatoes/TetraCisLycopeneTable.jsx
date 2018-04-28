import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import title from '../../infrastructure/documentTitle';
import Article from '../../components/Article';
import SectionHeading from '../../components/SectionHeading';
import Sidebar from './Sidebar';

function Range({ from, to }) {
    return (
        <Fragment>
            <td style={{ borderRight: 'none', textAlign: 'right' }}>{from}</td>
            <td
                style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    paddingLeft: 0,
                    paddingRight: 0,
                    textAlign: 'center',
                }}
            >
                to
            </td>
            <td style={{ borderLeft: 'none', whiteSpace: 'nowrap' }}>{to}</td>
        </Fragment>
    );
}

Range.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

function FruitCharacteristicsTable() {
    return (
        <table style={{ margin: 0, maxWidth: '700px', width: '100%' }} className="with-borders">
            <thead>
                <tr>
                    <th>Size:</th>
                    <th>Description:</th>
                    <th colSpan="3" style={{ textAlign: 'center' }}>Weight:</th>
                    <th colSpan="3" style={{ textAlign: 'center' }}>Diameter:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Small</td>
                    <td>Cherry</td>
                    <Range from="25" to="55 g" />
                    <Range from="2" to="4 cm" />
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>Plum</td>
                    <Range from="40" to="130 g" />
                    <Range from="4" to="6 cm" />
                </tr>
                <tr>
                    <td>Medium-large</td>
                    <td>Slicing</td>
                    <Range from="130" to="220 g" />
                    <Range from="6" to="10 cm" />
                </tr>
                <tr>
                    <td>Large</td>
                    <td>Beefsteak</td>
                    <Range from="185" to="220 g" />
                    <Range from="7" to="10 cm" />
                </tr>
                <tr>
                    <td>Extra-large</td>
                    <td>Beefsteak</td>
                    <Range from="220" to="320 g" />
                    <Range from="10" to="14 cm" />
                </tr>
                <tr>
                    <td>Giant</td>
                    <td>Beefsteak</td>
                    <td colSpan="3" style={{ textAlign: 'center' }}>320 g +</td>
                    <td colSpan="3" style={{ textAlign: 'center' }}>14 cm +</td>
                </tr>
            </tbody>
        </table>
    );
}

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

const tomatoBob = (
    <a href="http://www.tomatobob.com" {...targetBlank}>
        Tomatobob, Ohio, USA
    </a>
);

const tomatoGrowers = (
    <a href="http://www.tomatogrowers.com" {...targetBlank}>
        Tomato Growers, Florida, USA
    </a>
);

const amishlandSeeds = (
    <a href="http://www.amishlandseeds.com" {...targetBlank}>
        Amishland Heirloom Seeds
    </a>
);

const bakerCreekSeeds = (
    <a href="http://www.rareseeds.com" {...targetBlank}>
        Baker Creek Heirloom Seeds, Mansfield, Missouri, USA
    </a>
);

const tomatofest = (
    <a href="http://www.tomatofest.com" {...targetBlank}>
        Tomatofest, Little River, California, USA
    </a>
);

const tatianasTomatobase = (
    <a href="http://www.tatianastomatobase.com" {...targetBlank}>
        Tatiana's Tomatobase, British Colombia, Canada
    </a>
);

const chileSeeds = (
    <a href="http://www.chileseeds.co.uk" {...targetBlank}>
        The Chilli Pepper Company (UK)
    </a>
);

const solanaSeeds = (
    <a href="http://solanaseeds.netfirms.com" {...targetBlank}>
        Solana Seeds, Canada
    </a>
);

const tradeWindsFruit = (
    <a href="http://www.tradewindsfruit.com" {...targetBlank}>
        Trade Winds Fruit
    </a>
);

const seedsByDesign = (
    <a href="http://www.seedsbydesign.com" {...targetBlank}>
        Seeds by Design
    </a>
);

const koanga = (
    <a href="http://www.koanga.com" {...targetBlank}>
        Koanga Institute, NZ
    </a>
);

const organicCatalogue = (
    <a href="http://www.organiccatalogue.com" {...targetBlank}>
        The Organic Gardening Catalogue, UK
    </a>
);

const sandHill = (
    <a href="http://www.sandhillpreservation.com" {...targetBlank}>
        Sand Hill Preservation Centre
    </a>
);

const southernExposure = (
    <a href="http://www.southernexposure.com" {...targetBlank}>
        Southern Exposure Seed Exchange
    </a>
);

const terreDeSemences = (
    <a href="http://www.terredesemences.com" {...targetBlank}>
        Association Kokopelli (formerly Terre de Semences Organic seeds)
    </a>
);

const seedSaversExchange = (
    <a href="http://seedsavers.org" {...targetBlank}>
        Seed Savers Exchange, Iowa, USA
    </a>
);

const tomatoTable = [
    [
        'Alice Brewer',
        3.82,
        'Semi-determinate/semi-dwarf (about 1 metre +); early (70 days).',
        'Medium-sized orange fruit.',
        'Mild.',
        tomatoBob,
    ],
    [
        'Amana Orange',
        5.04,
        'Indeterminate; matures 90 days.',
        'Giant beefsteak.',
        'Mild.',
        tomatoGrowers,
    ],
    [
        'Amish Orange Sherbert Heirloom',
        5.36,
        'Indeterminate; high yield.',
        'Beefsteak style; vibrant orange.',
        'Sweet and mild flavour; low acid.',
        amishlandSeeds,
    ],
    [
        'Amish Yellowish Orange Oxheart',
        8.21,
        'Indeterminate; matures early; high yield.',
        'Medium-large classic oxheart-shaped salmon-orange tomatoes.',
        'Sweet and mild flavour.',
        <span>{amishlandSeeds} (no longer on their list)</span>,
    ],
    [
        'Aunt Gerties Gold',
        5.73,
        'Indeterminate; potato-leaf; mid-season 75-80 days.',
        'Giant beefsteak style; golden tomatoes.',
        'Good flavour.',
        'Seed Savers Exchange member, Iowa, USA',
    ],
    [
        'Barnes Mountain Orange (or Yellow)',
        6.54,
        'Very tall vines; matures 85-90 days.',
        'Extra-large beefsteak; fleshy smooth-skinned orange tomatoes.',
        "Rich 'old-time' tomato flavour.",
        bakerCreekSeeds,
    ],
    [
        'Big Orange',
        6.14,
        'Indeterminate; matures 75 days.',
        'Large beefsteak; juicy fruit with low acid; skin peels like an orange.',
        'Sweet flavour.',
        'Seed Savers Exchange member, Iowa, USA',
    ],
    [
        'Big Yellow',
        4.06,
        'Indeterminate; matures 80 days.',
        'Large yellow-orange beefsteak style; sometimes slightly green-shouldered.',
        null,
        tomatofest,
    ],
    [
        "Brown's Yellow Giant",
        3.57,
        'Indeterminate; late (90 days); heavy yield.',
        "Large/extra-large beefsteak. SSE Yearbook 2010 listed as Claude Brown's Yellow Giant.",
        'Mild, tropical fruity flavour.',
        tomatofest,
    ],
    [
        'Bursztyn',
        3.34,
        'Compact determinate or semi-determinate; very early fruiting; high yield.',
        'Medium plum-type yellow/orange tomatoes; the first fruits are seedless.',
        'Good sweet flavour.',
        tatianasTomatobase,
    ],
    [
        "Chuck's Golden (aka Chuck's Yellow)",
        5.47,
        'Indeterminate; matures 77 days (mid-season).',
        'Extra-large to giant beefsteak.',
        'Fleshy, sweet fruit with well-balanced flavours.',
        <span>{tomatofest} (named for seedsman Chuck Wyatt)</span>,
    ],
    [
        "Dad's Sunset",
        1.01,
        'Indeterminate.',
        "A uniformly round large beefsteak; 'glowing' orange tomato.",
        'Slightly tart, yet sweet, fruity flavour.',
        chileSeeds,
    ],
    [
        "Djena Lees Golden Girl (named for Djena Lee, pronounced 'Sheena')",
        5.23,
        'Indeterminate; mid-season (77 days).',
        'Large beefsteak-style fleshy fruit; 1st prize at the Chicago Fair for many years in the 1920s.',
        'Richly-flavoured with a well-balanced tangy sweetness.',
        tomatofest,
    ],
    [
        'Earl of Edgecomb',
        2.52,
        'Indeterminate; smaller plants about 1 metre tall; 73 days, mid-season.',
        'Large beefsteak style, 7cm diameter, globe-shaped fruits.',
        'Well-balanced sweet and acidic flavour.',
        <span>NZ heirloom sourced from {solanaSeeds}</span>,
    ],
    [
        'Elbe',
        4.31,
        <span>
            Indeterminate; tall vines (2 metres+); potato-leaf type
            (<em>grandifolium</em>); matures 85 days.
        </span>,
        'Large beefsteak style golden to bright orange tomatoes; German origin.',
        'Intense flavour.',
        solanaSeeds,
    ],
    [
        'Elfie',
        4.94,
        'Indeterminate; matures 85 days.',
        'Large beefsteak style, golden-orange tomatoes.',
        'Sweet flavour.',
        tomatoBob,
    ],
    [
        'Faribo Goldheart',
        4.9,
        'Indeterminate, 81 days, late-season; prolific yield.',
        'Large slicing tomato; round or oblate, not heart-shaped as the name would suggest.',
        'Sweet with pleasant acidic finish; suits salads or canning.',
        <span>
            {tomatofest} (originating from Farmer Seed and Nursery Co., Faribault,
            Minnesota in 1955)
        </span>,
    ],
    [
        "Gary Ibsen's Gold",
        4.0,
        'Indeterminate; tall potato-leafed; high yield; mid-season (75 days).',
        'Brilliant golden extra-large beefsteak-style tomatoes.',
        'Fruity flavour with acid to balance.',
        <span>{tomatofest} (originating from Boone County, West Virginia, USA in 1990)</span>,
    ],
    [
        "Gary's Golden Bear",
        1.64,
        'Indeterminate; medium-sized plant.',
        'Large, golden-orange juicy tomato.',
        'Richly flavoured.',
        tradeWindsFruit,
    ],
    [
        'Golden Grape',
        2.5,
        'Indeterminate.',
        'Bite-sized golden fruits.',
        'A bright and sweet variety.',
        tradeWindsFruit,
    ],
    [
        'Golden Green',
        7.12,
        'Indeterminate, matures 75 days, mid-season.',
        'Golden/orange medium slicing tomato; firm fruit.',
        null,
        tomatofest,
    ],
    [
        'Hawaiian Pineapple',
        6.13,
        'Indeterminate; matures 93 days, late season.',
        'Large golden-orange beefsteak-style fleshy fruit.',
        'Fruity, sweet, hints of pineapple.',
        tomatoBob,
    ],
    [
        "Homer Fike's Yellow Oxheart (grown by Mr. Homer Fike, USA)",
        1.74,
        'Indeterminate; matures 89 days (late season).',
        'Giant beefsteak-style, golden-orange heart-shaped fleshy fruit with few seeds.',
        'Delicious fruit-sweet flavours.',
        tomatofest,
    ],
    [
        'Hurma Ukrainian',
        5.76,
        'Indeterminate.',
        'Medium, orange slicing tomato.',
        'Sweet.',
        amishlandSeeds,
    ],
    [
        "Ilse's Orange Latvian (aka Ilse's Yellow Latvian); named for Ilse Auzina.",
        6.73,
        'Indeterminate; medium to high yield.',
        'Large slicing tomato; golden-yellow fruits, some slightly oblong. Firm fleshy thick walls.',
        'Pleasing flavour; suits canning or fresh.',
        <span>{tatianasTomatobase}; offered SSE Yearbook in 1995 or earlier.</span>,
    ],
    [
        "Kellog's Breakfast",
        3.42,
        'Indeterminate; originated West Virginia, USA.',
        'Orange beefsteak.',
        'Very good flavour; sweet.',
        seedsByDesign,
    ],
    [
        "King's Gold",
        3.02,
        null,
        'Golden colour.',
        null,
        koanga,
    ],
    [
        'Large Yellow Amish',
        4.28,
        'Indeterminate, 78 days, mid-season.',
        'Yellow-range large beefsteak-style fruit; apricot-coloured flesh.',
        'Well-balanced sweetness and acid.',
        tomatofest,
    ],
    [
        'Mini Orange',
        3.36,
        'Indeterminate.',
        'Vibrant orange large cherries; smooth texture.',
        'Subtle pleasant earthy flavour.',
        seedsByDesign,
    ],
    [
        'Moonglow (Winner of SSE 2007 Heirloom Tomato Tasting)',
        5.38,
        'Indeterminate; 85 days.',
        'Smooth, bright-orange fruits with firm, dense flesh; high pectin; medium-sized slicer-style tomato.',
        "'The best texture and flavour of any golden-yellow tomato.'",
        solanaSeeds,
    ],
    [
        'Mountain Gold',
        3.6,
        'Determinate; smaller plant with good yield.',
        'Golden-orange; firm medium-large beefsteak tomato.',
        'Mild, sweet flavour with a hint of acid.',
        tradeWindsFruit,
    ],
    [
        'Old Wyandotte',
        1.65,
        'Indeterminate, 90 days, late-season.',
        'Large beefsteak-style golden tomatoes.',
        'Well-balanced sweet and acid flavour.',
        tomatofest,
    ],
    [
        "Olga's Round Golden Chicken Egg (aka Olga's Round Yellow Chicken Egg)",
        7.27,
        'Indeterminate, regular leaf plant produces a very heavy yield; matures 70 days, mid-season; excellent to grow.',
        'Round to oval, golden, medium plum-type tomatoes with thick skin.',
        'Sweet and slightly tart flavours.',
        <span>
            {tomatofest}; brought from Russia to USA by Bill McDorman; introduced by
            Seeds Trust in early 90s.
        </span>,
    ],
    [
        'Orange Beefsteak',
        4.56,
        'Indeterminate, 79 days, mid-season; large yield.',
        'Medium-large slicing tomato; golden orange.',
        "'Delicious, well-balanced, sweet, fruity flavours.'",
        tomatofest,
    ],
    [
        'Orange Bourgoin',
        2.62,
        'Indeterminate.',
        'Orange cherry tomato.',
        "'Juicy, fruity, mild sweet with remarkable taste.'",
        organicCatalogue,
    ],
    [
        'Orange Crimea',
        8.04,
        'Indeterminate; late-maturing.',
        'Large peach-shaped, deep orange fruits; tendency for green shoulders.',
        'Very sweet and juicy.',
        sandHill,
    ],
    [
        'Orange Fleshed Purple Smudge',
        6.99,
        'Indeterminate.',
        'Medium size vibrant tangerine-orange fruit with purple blotches on the shoulders.',
        'Mildly sweet.',
        bakerCreekSeeds,
    ],
    [
        'Orange Plum',
        1.84,
        'Indeterminate; very heavy yield.',
        'Small, orange, plum-shaped tomatoes.',
        'Sweet flavour with slightly tart finish.',
        tomatofest,
    ],
    [
        'Orange Queen',
        2.41,
        'Open indeterminate vines; early, 70 days.',
        'Bright orange; beefsteak.',
        'Mild flavour.',
        seedsByDesign,
    ],
    [
        'Orange Roma',
        6.92,
        'Indeterminate; early.',
        'Medium slicer; salmon-orange colour.',
        'Pleasant flavour.',
        'Seeds sourced in New Zealand.',
    ],
    [
        'Orange Strawberry',
        4.14,
        'Vigorous, indeterminate, regular-leaf plant with average yields.',
        'Strawberry-shaped, bright-orange large oxheart with a distinct tip; fleshy fruit, few seeds.',
        'Sweet, rich, complex taste.',
        <span>{tomatofest}; offered in SSE Yearbook in 1995</span>,
    ],
    [
        'Orange Teardrop',
        5.31,
        'Indeterminate.',
        'Mid-orange coloured ovoid-shaped fruit.',
        'Flavourful; well-balanced acid and sweet.',
        seedsByDesign,
    ],
    [
        'Orange Valencia (named after the oranges of that colour)',
        4.6,
        'Good for cooler climates.',
        'Smooth, firm texture; fleshy without a large number of seeds.',
        'Well-balanced acidic and sweet flavours.',
        'Sourced in New Zealand from Niche Seeds who are no longer in business.',
    ],
    [
        "Peg's Round Orange (named for Peg Spencer)",
        1.08,
        'Indeterminate; matures 90 days; disease-resistant; high yield.',
        'Medium-large slicing tomato; orange.',
        'Sweet, low-acid.',
        southernExposure,
    ],
    [
        'Persimmon (said to be grown by Thomas Jefferson)',
        5.24,
        'Indeterminate, regular leaf plant; high yield.',
        'Named for the colour of the fruit; extra-large, beefsteak-style fleshy, few seeds.',
        'Very sweet; excellent flavour.',
        null,
    ],
    [
        'Roughwood Golden Plum',
        3.82,
        'Indeterminate, thick, green foliage; mid-season.',
        'Round bright golden, plum-sized fruits, thick, paste-like flesh.',
        'Creamy texture, good flavour.',
        sandHill,
    ],
    [
        'Russian Persimmon',
        3.1, // TODO: Check value
        'Indeterminate; 75-80 days. Very productive.',
        'Orange fruits, some more smooth and some are ruffled.',
        'Excellent sweet flavour.',
        tatianasTomatobase,
    ],
    [
        'Sakharniy Zeltiy',
        3.42,
        'Indeterminate; high yield; early for a large tomato.',
        'Medium-large golden-orange fruits.',
        'Tones of sweet mixed with tart.',
        null,
    ],
    [
        'Sibirische Orange',
        4.56,
        'Indeterminate.',
        null,
        null,
        terreDeSemences,
    ],
    [
        'Small Lap',
        2.87,
        'Semi-determinate, mid-season; very heavy producer.',
        'Orange, slightly oblate medium to large slicer.',
        null,
        sandHill,
    ],
    [
        'Small Sweet Orange',
        1.63,
        'Indeterminate; grows well in all NZ climate zones.',
        'Golden-orange cherry tomatoes.',
        'Very sweet and tender.',
        koanga,
    ],
    [
        'Summer Cider Apricot',
        6.15,
        'Indeterminate; potato-leaf; matures early.',
        'Large orange beefsteak-style with creamy orange flesh.',
        'Sweet flavour; apricot aroma.',
        amishlandSeeds,
    ],
    [
        'Tangella',
        6.13,
        'Disease resistant, highly productive.',
        'Clusters of 5cm diameter round, bright-orange fruit; blemish-free.',
        'Fragrant with a snappy tang; earthy notes.',
        tomatofest,
    ],
    [
        'Tangerine',
        5.82,
        'Indeterminate.',
        'Large, well-shaped, orange slicer.',
        'Juicy; mild flavour; not acidic.',
        seedSaversExchange,
    ],
    [
        'Tobolsk (100-year-old heirloom tomato)',
        5.73,
        'Indeterminate; origin Russia.',
        'Large, round, light golden-orange slicer, 7cm diameter.',
        'Flavours well-balanced between acid and sweet.',
        null,
    ],
    [
        'Turkey Champ',
        4.26,
        'Indeterminate; regular leaf; late.',
        'Large, golden/orange globe tomato.',
        null,
        sandHill,
    ],
    [
        'West Virginia',
        5.05,
        'Indeterminate, regular leaf plant.',
        'Extra-large/giant golden-orange beefsteak tomatoes.',
        'Fruity/sweet flavours.',
        tomatofest,
    ],
    [
        'Yellow Brandywine Platfoot Strain (named for Gary Platfoot, Ohio, USA)',
        4.15,
        'Indeterminate potato-leaf variety maturing 90 days (late season); heavy yielding.',
        'Large golden beefsteak-style tomatoes; heavily-ribbed shoulders.',
        'Intense sweet flavours balanced with a slight tartness.',
        tomatofest,
    ],
    [
        'Yellow Oxheart',
        2.58,
        'Indeterminate; vigorous vines; late (90-95 days).',
        'Medium-large, yellow-orange, heart-shaped fruit.',
        'Fleshy yet juicy.',
        null,
    ],
    [
        "Yoder's Yellow German",
        3.4,
        'Indeterminate; mid-season; named for Yoder family.',
        'Gold (not yellow) extra-large to giant beefsteak.',
        'Flavourful and fleshy.',
        tomatofest,
    ],
].map(item => ({
    varietyName: item[0],
    tetraCisLycopene: item[1],
    plantCharacteristics: item[2],
    fruitCharacteristics: item[3],
    flavour: item[4],
    source: item[5],
}));

class TetraCisLycopeneTable extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            tomatoTableSortColumn: 'varietyName',
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
                        {[
                            ['varietyName', 'Variety Name'],
                            ['tetraCisLycopene', 'Tetra-cis-lycopene (mg/100g FW)'],
                            ['plantCharacteristics', <span>Plant<br />characteristics *</span>],
                            ['fruitCharacteristics', <span>Fruit<br />characteristics †</span>],
                            ['flavour', 'Flavour ‡'],
                            ['source', 'Sourced from'],
                        ]
                            .map(([id, name], index) => (
                                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                                <th
                                    key={`tomato-table-header-${id}`}
                                    style={{ textAlign: index === 1 ? 'right' : 'left', verticalAlign: 'bottom' }}
                                    className={`sortable-column-header${
                                        this.state.tomatoTableSortColumn === id ? ' highlight' : ''
                                    }`}
                                    onClick={() => this.sortTomatoTableByColumn(id)}
                                >
                                    {name}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tomatoTable.map((row, index) => (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <tr
                            // eslint-disable-next-line react/no-array-index-key
                            key={`tomato-table-row-${index}`}
                            className={row.varietyName === this.state.tomatoTableHighlightedRow ? 'highlight' : ''}
                            onClick={() => {
                                if (this.state.tomatoTableHighlightedRow === row.varietyName) {
                                    this.setState({ tomatoTableHighlightedRow: null });
                                } else {
                                    this.setState({ tomatoTableHighlightedRow: row.varietyName });
                                }
                            }}
                        >
                            <td style={{ textAlign: 'left', verticalAlign: 'top' }}>{row.varietyName}</td>
                            <td style={{ textAlign: 'right', verticalAlign: 'top' }}>{row.tetraCisLycopene || 'n.d.'}</td>
                            <td style={{ textAlign: 'left', verticalAlign: 'top' }}>{row.plantCharacteristics}</td>
                            <td style={{ textAlign: 'left', verticalAlign: 'top' }}>{row.fruitCharacteristics}</td>
                            <td style={{ textAlign: 'left', verticalAlign: 'top' }}>{row.flavour}</td>
                            <td style={{ textAlign: 'left', verticalAlign: 'top' }}>{row.source}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <Article>
                <div className="wrapper content-with-sidebar">
                    <Sidebar page="tetra-cis-lycopene" />

                    <div className="article-content">
                        <div className="box">
                            <SectionHeading>
                                Heritage tomato varieties known to contain tetra-cis-lycopene
                            </SectionHeading>

                            <p>
                                Tetra-cis-lycopene is a highly beneficial bioavailable form of
                                lycopene, and exhibits a golden-orange or tangerine tomato colour.
                                But not all tomatoes with this colour contain tetra-cis-lycopene,
                                as this colour can also be expressed by beta-carotene. Hence it
                                is necessary to chemically analyse each tomato variety to verify
                                whether or not it contains tetra-cis-lycopene.
                            </p>

                            <p>
                                We provide here a list of all the varieties that we have had
                                analysed and confirmed to have tetra-cis-lycopene to assist
                                health conscious gardeners, healthy food advocates and researchers
                                worldwide. Data has been obtained from the 2015 season.
                            </p>

                            <div style={{ padding: '10px 25px' }}>
                                {this.renderTomatoTable()}

                                <table style={{ margin: '15px 0 0', width: '100%' }} className="no-border">
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px 14px 8px 16px', textAlign: 'center', verticalAlign: 'top' }}>
                                                <span style={{ fontSize: '24px' }}>*</span>
                                            </td>
                                            <td>
                                                <strong>Indeterminate</strong> tomato plants grow from spring
                                                until frost, producing fruit on long vines that can grow 2 metres
                                                or taller. <strong>Determinate</strong> plants bear in a shorter
                                                time, on shorter vines.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'top' }}>†</td>
                                            <td style={{ padding: '15px 3px' }}>
                                                <FruitCharacteristicsTable />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '5px 15px', textAlign: 'center', verticalAlign: 'top' }}>‡</td>
                                            <td>
                                                Flavour descriptions are subjective and vary with growing conditions.
                                                Those in quotation marks may have been generated for promotional purposes.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Article>
        );
    }
}

export default title(TetraCisLycopeneTable, 'Tetra-cis-lycopene in Tomatoes');

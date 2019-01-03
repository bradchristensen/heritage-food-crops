// Disable react/jsx-key due to false positives reported in this module
/* eslint-disable react/jsx-key */

import React from "react";
import flatten from "../../../infrastructure/flatten";

function getPlainText(stringOrJsx) {
  if (typeof stringOrJsx === "string") {
    return stringOrJsx;
  }

  if (stringOrJsx == null) {
    return null;
  }

  const flattenedNodes = flatten(stringOrJsx);
  return flattenedNodes.reduce((plainText, node) => {
    if (node && typeof node === "string") {
      return plainText + node;
    }
    return plainText;
  }, "");
}

// Shortcut for applying target='_blank' props in accordance with
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
const targetBlank = {
  target: "_blank",
  rel: "noreferrer noopener"
};

const tomatoBobUrl = "http://www.tomatobob.com";
const tomatoBob = (
  <a href={tomatoBobUrl} {...targetBlank}>
    Tomatobob, Ohio, USA
  </a>
);

const tomatoGrowersUrl = "http://www.tomatogrowers.com";
const tomatoGrowers = (
  <a href={tomatoGrowersUrl} {...targetBlank}>
    Tomato Growers, Florida, USA
  </a>
);

const amishlandSeedsUrl = "http://www.amishlandseeds.com";
const amishlandSeeds = (
  <a href={amishlandSeedsUrl} {...targetBlank}>
    Amishland Heirloom Seeds
  </a>
);

const bakerCreekSeedsUrl = "http://www.rareseeds.com";
const bakerCreekSeeds = (
  <a href={bakerCreekSeedsUrl} {...targetBlank}>
    Baker Creek Heirloom Seeds, Mansfield, Missouri, USA
  </a>
);

const tomatofestUrl = "http://www.tomatofest.com";
const tomatofest = (
  <a href={tomatofestUrl} {...targetBlank}>
    Tomatofest, Little River, California, USA
  </a>
);

const tatianasTomatobaseUrl = "http://www.tatianastomatobase.com";
const tatianasTomatobase = (
  <a href={tatianasTomatobaseUrl} {...targetBlank}>
    {"Tatiana's Tomatobase, British Colombia, Canada"}
  </a>
);

const chileSeedsUrl = "http://www.chileseeds.co.uk";
const chileSeeds = (
  <a href={chileSeedsUrl} {...targetBlank}>
    The Chilli Pepper Company (UK)
  </a>
);

const solanaSeedsUrl = "http://solanaseeds.netfirms.com";
const solanaSeeds = (
  <a href={solanaSeedsUrl} {...targetBlank}>
    Solana Seeds, Canada
  </a>
);

const tradeWindsFruitUrl = "http://www.tradewindsfruit.com";
const tradeWindsFruit = (
  <a href={tradeWindsFruitUrl} {...targetBlank}>
    Trade Winds Fruit
  </a>
);

const seedsByDesignUrl = "http://www.seedsbydesign.com";
const seedsByDesign = (
  <a href={seedsByDesignUrl} {...targetBlank}>
    Seeds by Design
  </a>
);

const koangaUrl = "http://www.koanga.com";
const koanga = (
  <a href={koangaUrl} {...targetBlank}>
    Koanga Institute, NZ
  </a>
);

const organicCatalogueUrl = "http://www.organiccatalogue.com";
const organicCatalogue = (
  <a href={organicCatalogueUrl} {...targetBlank}>
    The Organic Gardening Catalogue, UK
  </a>
);

const sandHillUrl = "http://www.sandhillpreservation.com";
const sandHill = (
  <a href={sandHillUrl} {...targetBlank}>
    Sand Hill Preservation Centre
  </a>
);

const southernExposureUrl = "http://www.southernexposure.com";
const southernExposure = (
  <a href={southernExposureUrl} {...targetBlank}>
    Southern Exposure Seed Exchange
  </a>
);

const terreDeSemencesUrl = "http://www.terredesemences.com";
const terreDeSemences = (
  <span>
    <a href={terreDeSemencesUrl} {...targetBlank}>
      Association Kokopelli
    </a>{" "}
    (formerly Terre de Semences Organic seeds)
  </span>
);

const seedSaversExchangeUrl = "http://seedsavers.org";
const seedSaversExchange = (
  <a href={seedSaversExchangeUrl} {...targetBlank}>
    Seed Savers Exchange, Iowa, USA
  </a>
);

export default [
  [
    "Alice Brewer",
    3.82,
    "Semi-determinate/semi-dwarf (about 1 metre +); early (70 days).",
    "Medium-sized orange fruit.",
    "Mild.",
    tomatoBob,
    tomatoBobUrl
  ],
  [
    "Amana Orange",
    5.04,
    "Indeterminate; matures 90 days.",
    "Giant beefsteak.",
    "Mild.",
    tomatoGrowers,
    tomatoGrowersUrl
  ],
  [
    "Amish Orange Sherbert Heirloom",
    5.36,
    "Indeterminate; high yield.",
    "Beefsteak style; vibrant orange.",
    "Sweet and mild flavour; low acid.",
    amishlandSeeds,
    amishlandSeedsUrl
  ],
  [
    "Amish Yellowish Orange Oxheart",
    8.21,
    "Indeterminate; matures early; high yield.",
    "Medium-large classic oxheart-shaped salmon-orange tomatoes.",
    "Sweet and mild flavour.",
    <span>{amishlandSeeds} (no longer on their list)</span>,
    amishlandSeedsUrl
  ],
  [
    "Aunt Gerties Gold",
    5.73,
    "Indeterminate; potato-leaf; mid-season 75-80 days.",
    "Giant beefsteak style; golden tomatoes.",
    "Good flavour.",
    "Seed Savers Exchange member, Iowa, USA",
    null
  ],
  [
    "Barnes Mountain Orange (or Yellow)",
    6.54,
    "Very tall vines; matures 85-90 days.",
    "Extra-large beefsteak; fleshy smooth-skinned orange tomatoes.",
    "Rich 'old-time' tomato flavour.",
    bakerCreekSeeds,
    bakerCreekSeedsUrl
  ],
  [
    "Big Orange",
    6.14,
    "Indeterminate; matures 75 days.",
    "Large beefsteak; juicy fruit with low acid; skin peels like an orange.",
    "Sweet flavour.",
    "Seed Savers Exchange member, Iowa, USA",
    null
  ],
  [
    "Big Yellow",
    4.06,
    "Indeterminate; matures 80 days.",
    "Large yellow-orange beefsteak style; sometimes slightly green-shouldered.",
    null,
    tomatofest,
    tomatofestUrl
  ],
  [
    "Brown's Yellow Giant",
    3.57,
    "Indeterminate; late (90 days); heavy yield.",
    "Large/extra-large beefsteak. SSE Yearbook 2010 listed as Claude Brown's Yellow Giant.",
    "Mild, tropical fruity flavour.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Bursztyn",
    3.34,
    "Compact determinate or semi-determinate; very early fruiting; high yield.",
    "Medium plum-type yellow/orange tomatoes; the first fruits are seedless.",
    "Good sweet flavour.",
    tatianasTomatobase,
    tatianasTomatobaseUrl
  ],
  [
    "Chuck's Golden (aka Chuck's Yellow)",
    5.47,
    "Indeterminate; matures 77 days (mid-season).",
    "Extra-large to giant beefsteak.",
    "Fleshy, sweet fruit with well-balanced flavours.",
    <span>{tomatofest} (named for seedsman Chuck Wyatt)</span>,
    tomatofestUrl
  ],
  [
    "Dad's Sunset",
    1.01,
    "Indeterminate.",
    "A uniformly round large beefsteak; 'glowing' orange tomato.",
    "Slightly tart, yet sweet, fruity flavour.",
    chileSeeds,
    chileSeedsUrl
  ],
  [
    "Djena Lees Golden Girl (named for Djena Lee, pronounced 'Sheena')",
    5.23,
    "Indeterminate; mid-season (77 days).",
    "Large beefsteak-style fleshy fruit; 1st prize at the Chicago Fair for many years in the 1920s.",
    "Richly-flavoured with a well-balanced tangy sweetness.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Earl of Edgecomb",
    2.52,
    "Indeterminate; smaller plants about 1 metre tall; 73 days, mid-season.",
    "Large beefsteak style, 7cm diameter, globe-shaped fruits.",
    "Well-balanced sweet and acidic flavour.",
    <span>NZ heirloom sourced from {solanaSeeds}</span>,
    solanaSeedsUrl
  ],
  [
    "Elbe",
    4.31,
    <span>
      {"Indeterminate; tall vines (2 metres+); potato-leaf type ("}
      <em>grandifolium</em>); matures 85 days.
    </span>,
    "Large beefsteak style golden to bright orange tomatoes; German origin.",
    "Intense flavour.",
    solanaSeeds,
    solanaSeedsUrl
  ],
  [
    "Elfie",
    4.94,
    "Indeterminate; matures 85 days.",
    "Large beefsteak style, golden-orange tomatoes.",
    "Sweet flavour.",
    tomatoBob,
    tomatoBobUrl
  ],
  [
    "Faribo Goldheart",
    4.9,
    "Indeterminate, 81 days, late-season; prolific yield.",
    "Large slicing tomato; round or oblate, not heart-shaped as the name would suggest.",
    "Sweet with pleasant acidic finish; suits salads or canning.",
    <span>
      {tomatofest} (originating from Farmer Seed and Nursery Co., Faribault,
      Minnesota in 1955)
    </span>,
    tomatofestUrl
  ],
  [
    "Gary Ibsen's Gold",
    4.0,
    "Indeterminate; tall potato-leafed; high yield; mid-season (75 days).",
    "Brilliant golden extra-large beefsteak-style tomatoes.",
    "Fruity flavour with acid to balance.",
    <span>
      {tomatofest} (originating from Boone County, West Virginia, USA in 1990)
    </span>,
    tomatofestUrl
  ],
  [
    "Gary's Golden Bear",
    1.64,
    "Indeterminate; medium-sized plant.",
    "Large, golden-orange juicy tomato.",
    "Richly flavoured.",
    tradeWindsFruit,
    tradeWindsFruitUrl
  ],
  [
    "Golden Grape",
    2.5,
    "Indeterminate.",
    "Bite-sized golden fruits.",
    "A bright and sweet variety.",
    tradeWindsFruit,
    tradeWindsFruitUrl
  ],
  [
    "Golden Green",
    7.12,
    "Indeterminate, matures 75 days, mid-season.",
    "Golden/orange medium slicing tomato; firm fruit.",
    null,
    tomatofest,
    tomatofestUrl
  ],
  [
    "Hawaiian Pineapple",
    6.13,
    "Indeterminate; matures 93 days, late season.",
    "Large golden-orange beefsteak-style fleshy fruit.",
    "Fruity, sweet, hints of pineapple.",
    tomatoBob,
    tomatoBobUrl
  ],
  [
    "Homer Fike's Yellow Oxheart (grown by Mr. Homer Fike, USA)",
    1.74,
    "Indeterminate; matures 89 days (late season).",
    "Giant beefsteak-style, golden-orange heart-shaped fleshy fruit with few seeds.",
    "Delicious fruit-sweet flavours.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Hurma Ukrainian",
    5.76,
    "Indeterminate.",
    "Medium, orange slicing tomato.",
    "Sweet.",
    amishlandSeeds,
    amishlandSeedsUrl
  ],
  [
    "Ilse's Orange Latvian (aka Ilse's Yellow Latvian); named for Ilse Auzina.",
    6.73,
    "Indeterminate; medium to high yield.",
    "Large slicing tomato; golden-yellow fruits, some slightly oblong. Firm fleshy thick walls.",
    "Pleasing flavour; suits canning or fresh.",
    <span>{tatianasTomatobase}; offered SSE Yearbook in 1995 or earlier.</span>,
    tatianasTomatobaseUrl
  ],
  [
    "Kellog's Breakfast",
    3.42,
    "Indeterminate; originated West Virginia, USA.",
    "Orange beefsteak.",
    "Very good flavour; sweet.",
    seedsByDesign,
    seedsByDesignUrl
  ],
  ["King's Gold", 3.02, null, "Golden colour.", null, koanga, koangaUrl],
  [
    "Large Yellow Amish",
    4.28,
    "Indeterminate, 78 days, mid-season.",
    "Yellow-range large beefsteak-style fruit; apricot-coloured flesh.",
    "Well-balanced sweetness and acid.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Mini Orange",
    3.36,
    "Indeterminate.",
    "Vibrant orange large cherries; smooth texture.",
    "Subtle pleasant earthy flavour.",
    seedsByDesign,
    seedsByDesignUrl
  ],
  [
    "Moonglow (Winner of SSE 2007 Heirloom Tomato Tasting)",
    5.38,
    "Indeterminate; 85 days.",
    "Smooth, bright-orange fruits with firm, dense flesh; high pectin; medium-sized slicer-style tomato.",
    "'The best texture and flavour of any golden-yellow tomato.'",
    solanaSeeds,
    solanaSeedsUrl
  ],
  [
    "Mountain Gold",
    3.6,
    "Determinate; smaller plant with good yield.",
    "Golden-orange; firm medium-large beefsteak tomato.",
    "Mild, sweet flavour with a hint of acid.",
    tradeWindsFruit,
    tradeWindsFruitUrl
  ],
  [
    "Old Wyandotte",
    1.65,
    "Indeterminate, 90 days, late-season.",
    "Large beefsteak-style golden tomatoes.",
    "Well-balanced sweet and acid flavour.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Olga's Round Golden Chicken Egg (aka Olga's Round Yellow Chicken Egg)",
    7.27,
    "Indeterminate, regular leaf plant produces a very heavy yield; matures 70 days, mid-season; excellent to grow.",
    "Round to oval, golden, medium plum-type tomatoes with thick skin.",
    "Sweet and slightly tart flavours.",
    <span>
      {tomatofest}; brought from Russia to USA by Bill McDorman; introduced by
      Seeds Trust in early 90s.
    </span>,
    tomatofestUrl
  ],
  [
    "Orange Beefsteak",
    4.56,
    "Indeterminate, 79 days, mid-season; large yield.",
    "Medium-large slicing tomato; golden orange.",
    "'Delicious, well-balanced, sweet, fruity flavours.'",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Orange Bourgoin",
    2.62,
    "Indeterminate.",
    "Orange cherry tomato.",
    "'Juicy, fruity, mild sweet with remarkable taste.'",
    organicCatalogue,
    organicCatalogueUrl
  ],
  [
    "Orange Crimea",
    8.04,
    "Indeterminate; late-maturing.",
    "Large peach-shaped, deep orange fruits; tendency for green shoulders.",
    "Very sweet and juicy.",
    sandHill,
    sandHillUrl
  ],
  [
    "Orange Fleshed Purple Smudge",
    6.99,
    "Indeterminate.",
    "Medium size vibrant tangerine-orange fruit with purple blotches on the shoulders.",
    "Mildly sweet.",
    bakerCreekSeeds,
    bakerCreekSeedsUrl
  ],
  [
    "Orange Plum",
    1.84,
    "Indeterminate; very heavy yield.",
    "Small, orange, plum-shaped tomatoes.",
    "Sweet flavour with slightly tart finish.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Orange Queen",
    2.41,
    "Open indeterminate vines; early, 70 days.",
    "Bright orange; beefsteak.",
    "Mild flavour.",
    seedsByDesign,
    seedsByDesignUrl
  ],
  [
    "Orange Roma",
    6.92,
    "Indeterminate; early.",
    "Medium slicer; salmon-orange colour.",
    "Pleasant flavour.",
    "Seeds sourced in New Zealand.",
    null
  ],
  [
    "Orange Strawberry",
    4.14,
    "Vigorous, indeterminate, regular-leaf plant with average yields.",
    "Strawberry-shaped, bright-orange large oxheart with a distinct tip; fleshy fruit, few seeds.",
    "Sweet, rich, complex taste.",
    <span>{tomatofest}; offered in SSE Yearbook in 1995</span>,
    tomatofestUrl
  ],
  [
    "Orange Teardrop",
    5.31,
    "Indeterminate.",
    "Mid-orange coloured ovoid-shaped fruit.",
    "Flavourful; well-balanced acid and sweet.",
    seedsByDesign,
    seedsByDesignUrl
  ],
  [
    "Orange Valencia (named after the oranges of that colour)",
    4.6,
    "Good for cooler climates.",
    "Smooth, firm texture; fleshy without a large number of seeds.",
    "Well-balanced acidic and sweet flavours.",
    "Sourced in New Zealand from Niche Seeds who are no longer in business.",
    null
  ],
  [
    "Peg's Round Orange (named for Peg Spencer)",
    1.08,
    "Indeterminate; matures 90 days; disease-resistant; high yield.",
    "Medium-large slicing tomato; orange.",
    "Sweet, low-acid.",
    southernExposure,
    southernExposureUrl
  ],
  [
    "Persimmon (said to be grown by Thomas Jefferson)",
    5.24,
    "Indeterminate, regular leaf plant; high yield.",
    "Named for the colour of the fruit; extra-large, beefsteak-style fleshy, few seeds.",
    "Very sweet; excellent flavour.",
    null,
    null
  ],
  [
    "Roughwood Golden Plum",
    3.82,
    "Indeterminate, thick, green foliage; mid-season.",
    "Round bright golden, plum-sized fruits, thick, paste-like flesh.",
    "Creamy texture, good flavour.",
    sandHill,
    sandHillUrl
  ],
  [
    "Russian Persimmon",
    // Known issue #22
    // eslint-disable-next-line no-warning-comments
    // TODO: Check value
    3.1,
    "Indeterminate; 75-80 days. Very productive.",
    "Orange fruits, some more smooth and some are ruffled.",
    "Excellent sweet flavour.",
    tatianasTomatobase,
    tatianasTomatobaseUrl
  ],
  [
    "Sakharniy Zeltiy",
    3.42,
    "Indeterminate; high yield; early for a large tomato.",
    "Medium-large golden-orange fruits.",
    "Tones of sweet mixed with tart.",
    null,
    null
  ],
  [
    "Sibirische Orange",
    4.56,
    "Indeterminate.",
    null,
    null,
    terreDeSemences,
    terreDeSemencesUrl
  ],
  [
    "Small Lap",
    2.87,
    "Semi-determinate, mid-season; very heavy producer.",
    "Orange, slightly oblate medium to large slicer.",
    null,
    sandHill,
    sandHillUrl
  ],
  [
    "Small Sweet Orange",
    1.63,
    "Indeterminate; grows well in all NZ climate zones.",
    "Golden-orange cherry tomatoes.",
    "Very sweet and tender.",
    koanga,
    koangaUrl
  ],
  [
    "Summer Cider Apricot",
    6.15,
    "Indeterminate; potato-leaf; matures early.",
    "Large orange beefsteak-style with creamy orange flesh.",
    "Sweet flavour; apricot aroma.",
    amishlandSeeds,
    amishlandSeedsUrl
  ],
  [
    "Tangella",
    6.13,
    "Disease resistant, highly productive.",
    "Clusters of 5cm diameter round, bright-orange fruit; blemish-free.",
    "Fragrant with a snappy tang; earthy notes.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Tangerine",
    5.82,
    "Indeterminate.",
    "Large, well-shaped, orange slicer.",
    "Juicy; mild flavour; not acidic.",
    seedSaversExchange,
    seedSaversExchangeUrl
  ],
  [
    "Tobolsk (100-year-old heirloom tomato)",
    5.73,
    "Indeterminate; origin Russia.",
    "Large, round, light golden-orange slicer, 7cm diameter.",
    "Flavours well-balanced between acid and sweet.",
    null,
    null
  ],
  [
    "Turkey Champ",
    4.26,
    "Indeterminate; regular leaf; late.",
    "Large, golden/orange globe tomato.",
    null,
    sandHill,
    sandHillUrl
  ],
  [
    "West Virginia",
    5.05,
    "Indeterminate, regular leaf plant.",
    "Extra-large/giant golden-orange beefsteak tomatoes.",
    "Fruity/sweet flavours.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Yellow Brandywine Platfoot Strain (named for Gary Platfoot, Ohio, USA)",
    4.15,
    "Indeterminate potato-leaf variety maturing 90 days (late season); heavy yielding.",
    "Large golden beefsteak-style tomatoes; heavily-ribbed shoulders.",
    "Intense sweet flavours balanced with a slight tartness.",
    tomatofest,
    tomatofestUrl
  ],
  [
    "Yellow Oxheart",
    2.58,
    "Indeterminate; vigorous vines; late (90-95 days).",
    "Medium-large, yellow-orange, heart-shaped fruit.",
    "Fleshy yet juicy.",
    null,
    null
  ],
  [
    "Yoder's Yellow German",
    3.4,
    "Indeterminate; mid-season; named for Yoder family.",
    "Gold (not yellow) extra-large to giant beefsteak.",
    "Flavourful and fleshy.",
    tomatofest,
    tomatofestUrl
  ]
].map(item => ({
  varietyName: item[0],
  tetraCisLycopene: item[1],
  plantCharacteristics: item[2],
  plantCharacteristicsPlainText: getPlainText(item[2]),
  fruitCharacteristics: item[3],
  fruitCharacteristicsPlainText: getPlainText(item[3]),
  flavour: item[4],
  flavourPlainText: getPlainText(item[4]),
  source: item[5],
  sourcePlainText: getPlainText(item[5]),
  sourceUrl: item[6]
}));

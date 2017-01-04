function beans(path, newPath) {
    // Redirects for bean thumbnails: removed 300px and 800px thumbnails because they were
    // not used; redirect to full size images instead.
    const dir = '/static/images/layout/heirloom-beans/thumbnails/';
    return {
        [`/files/${path}.jpg`]: `${dir}${newPath || path}.jpg`,
        [`/files/${path}_100.jpg`]: `${dir}${newPath || path}_100.jpg`,
        [`/files/${path}_300.jpg`]: `${dir}${newPath || path}.jpg`,
        [`/files/${path}_800.jpg`]: `${dir}${newPath || path}.jpg`,
    };
}

function beansGallery(path, newPath) {
    const dir = '/static/images/layout/heirloom-beans/gallery/';
    const fullNewPath = `${dir}${newPath || path}.jpg`;
    return {
        [`/files/${path}.jpg`]: fullNewPath,
        [`/files/${path}_100.jpg`]: fullNewPath,
        [`/files/${path}_300.jpg`]: fullNewPath,
        [`/files/${path}_800.jpg`]: fullNewPath,
    };
}

function plumGraph(path) {
    const dir = '/static/images/layout/plums-peaches/graphs/';
    return {
        [`/files/${path}.png`]: `${dir}${path}.png`,
        [`/files/${path}_100.png`]: `${dir}${path}_100.png`,
        [`/files/${path}_300.png`]: `${dir}${path}.png`,
        [`/files/${path}_800.png`]: `${dir}${path}.png`,
    };
}

function peachGraph(path) {
    const dir = '/static/images/layout/plums-peaches/graphs/';
    return {
        [`/files/${path}.png`]: `${dir}${path}_800.png`,
        [`/files/${path}_100.png`]: `${dir}${path}_300.png`,
        [`/files/${path}_300.png`]: `${dir}${path}_300.png`,
        [`/files/${path}_800.png`]: `${dir}${path}_800.png`,
    };
}

export default {
    '/files/jessica-and-the-golden-orb.pdf': '/static/docs/jessica-and-the-golden-orb.pdf',

    // Heirloom Beans
    '/files/anasazi-beans.jpg': '/static/images/layout/heirloom-beans/anasazi-beans.jpg',
    ...beans('cherokee-cornfield-bean'),
    ...beans('goodmotherstallard', 'good-mother-stallard'),
    ...beans('hidatsashieldfigurepolebean', 'hidatsa-shield-figure'),
    ...beans('hopilightyellow', 'hopi-light-yellow'),
    ...beans('jlbblueshackamaxon4', 'blue-shackamaxon'),
    ...beans('peruvian-goose-bean'),
    ...beans('raquelbean', 'raquel'),
    ...beans('sanluispotosiflordemayo', 'san-luis-potosi-flor-de-mayo'),
    ...beans('tarahumaragraystar', 'tarahumara-gray-star'),
    ...beans('tarahumarapurplestar', 'tarahumara-purple-star'),
    ...beans('yoemepurplestring', 'yoeme-purple-string'),
    ...beans('mayflower-bean'),
    ...beans('mayflower-beantmid', 'mayflower-bean-2'),
    ...beansGallery('america-koanga-beans'),
    ...beansGallery('america-koanga-flower'),
    ...beansGallery('america-koanga-macro'),
    ...beansGallery('america-koanga-plant'),
    ...beansGallery('assorted-beansmmch', 'assorted-beans'),
    ...beansGallery('assorted-beans', 'assorted-beans-pods'),
    ...beansGallery('beans-growing'),

    // Plums & Peaches
    '/files/blackboy-peaches_800.jpg': '/static/images/layout/plums-peaches/blackboy-peach.jpg',
    '/files/bb-peaches-mason_800.jpg': '/static/images/layout/plums-peaches/bb-peaches-mason.jpg',
    ...peachGraph('bb-chlorogenic-acid'),
    ...peachGraph('bb-quercetin-galactoside'),
    ...plumGraph('plums3cqa'),
    ...plumGraph('plumscyrut'),
    ...plumGraph('plumspnrut'),
    ...plumGraph('plumsqpenthex'),

    // Huntington's Disease
    '/files/HPLC-Chromatogram.png': '/static/images/layout/huntingtons-disease/hplc-chromatogram.png',

    // Documents from the Heirloom Tomatoes page (and past research page)
    '/files/2015-carotenoid-composition-of-tomatoes.pdf': '/static/docs/2015-carotenoid-composition-of-tomatoes.pdf',
    '/files/2014-bioavailability-of-tetra-cis-lycopene-in-humans.pdf': '/static/docs/2014-bioavailability-of-tetra-cis-lycopene-in-humans.pdf',
    '/files/2013reportgrapefruitandtomatometabolitesforhealth.pdf': '/static/docs/2013-report-grapefruit-tomato-metabolites-health.pdf',
    '/files/appendix1.pdf': '/static/docs/2013-report-appendix1.pdf',
    '/files/appendix2.pdf': '/static/docs/2013-report-appendix2.pdf',
    '/files/2009-tomato-top-varieties.pdf': '/static/docs/2009-tomato-top-varieties.pdf',
    '/files/2008-tomato-top-varieties.xls': '/static/docs/2008-tomato-top-varieties.xls',
    '/files/2007-tomato-top-varieties.xls': '/static/docs/2007-tomato-top-varieties.xls',
    '/files/tomato-varieties-chemical-analysis.xls': '/static/docs/tomato-varieties-chemical-analysis.xls',

    // Tomatoes from the table on the Heirloom Tomatoes page
    '/files/amishorangesherbertheirloom_800.jpg': '/static/images/layout/tomatoes/table/amish-orange-sherbert-heirloom.jpg',
    '/files/amishyellowishorangeoxheart_800.jpg': '/static/images/layout/tomatoes/table/amish-yellowish-orange-oxheart.jpg',
    '/files/auntgertiesgold_800.jpg': '/static/images/layout/tomatoes/table/aunt-gerties-gold.jpg',
    '/files/bigorange_800.jpg': '/static/images/layout/tomatoes/table/big-orange.jpg',
    '/files/dadssunset_800.jpg': '/static/images/layout/tomatoes/table/dads-sunset.jpg',
    '/files/earlofedgecomb_800.jpg': '/static/images/layout/tomatoes/table/earl-of-edgecomb.jpg',
    '/files/elbe_800.jpg': '/static/images/layout/tomatoes/table/elbe.jpg',
    '/files/moonglow_800.jpg': '/static/images/layout/tomatoes/table/moonglow.jpg',
    '/files/orangefleshedpurplesmudge_800.jpg': '/static/images/layout/tomatoes/table/orange-fleshed-purple-smudge.jpg',
    '/files/orangeroma.jpg': '/static/images/layout/tomatoes/table/orange-roma.jpg',
    '/files/sibirischeorange_800.jpg': '/static/images/layout/tomatoes/table/sibirische-orange.jpg',
    '/files/tangerine_800.jpg': '/static/images/layout/tomatoes/table/tangerine.jpg',
};

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

export default {
    '/files/anasazi-beans.jpg': '/static/images/layout/heirloom-beans/anasazi-beans.jpg',
    '/files/jessica-and-the-golden-orb.pdf': '/static/docs/jessica-and-the-golden-orb.pdf',
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
};

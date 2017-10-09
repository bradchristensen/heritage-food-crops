const generateWebpackConfig = require('./generateWebpackConfig');

/* Generate passing true as the parameter to specify that this is a production build. */
module.exports = generateWebpackConfig(true);

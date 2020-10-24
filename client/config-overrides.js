const {override, addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@common-components']: path.resolve(__dirname, './src/App/commonComponents'),
        ['@globals']: path.resolve('./src/globals')
    })
)

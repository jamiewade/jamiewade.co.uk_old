module.exports = {
    siteMetadata: {
        title: "Jamie Wade",
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-T94WKP7'
            }
        }
    ],
};

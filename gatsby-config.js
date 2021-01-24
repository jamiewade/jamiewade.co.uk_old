module.exports = {
    siteMetadata: {
        title: "Jamie Wade",
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Jamie Wade',
                short_name: 'jamiewade',
                start_url: '/',
                background_color: '#fff',
                theme_color: 'rgba(79, 70, 229)',
                display: 'minimal-ui',
                icon: 'src/images/icon.png'
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-T94WKP7'
            }
        }
    ],
};

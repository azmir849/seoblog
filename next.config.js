const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'SEOBLOG',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'http://localhost:8000/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'http://localhost:3000',
        FB_APP_ID: '',
        DISQUS_SHORTNAME:'seoblog-rjdfds18p3',
        GOOGLE_CLIENT_ID: ''
    }
})

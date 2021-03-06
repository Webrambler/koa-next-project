const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

if (typeof require !== 'undefined') {
  require.extensions['.css', '.scss'] = file => {}
}

module.exports = withSass(withCss())

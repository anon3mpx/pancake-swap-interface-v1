
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tpls-sdk.cjs.production.min.js')
} else {
  module.exports = require('./tpls-sdk.cjs.development.js')
}

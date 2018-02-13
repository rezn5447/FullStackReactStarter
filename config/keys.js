// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // return the production set of keys
  module.exports = require('./prod');
} else {
  // return the development set of keys
  module.exports = require('./dev');
}

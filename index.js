
const ssot = require('ssot');

module.exports = {
  config: function(){
    Object.assign(process.env, ssot)
  },
  parsed: ssot
}

const shuffle = require('crypto-shuffle')
const fonts = require('./lib/fonts.json')

module.exports = () => {
  return shuffle(fonts)[0].toLowerCase()
}

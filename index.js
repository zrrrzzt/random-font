import shuffle from 'crypto-shuffle'

const fonts = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Times',
  'Courier New',
  'Courier',
  'Verdana',
  'Georgia',
  'Palatino',
  'Garamond',
  'Bookman',
  'Comic Sans MS',
  'Trebuchet MS',
  'Arial Black',
  'Impact'
]

const randomFont = () => {
  return shuffle(fonts)[0].toLowerCase()
}

export default randomFont

export {
  randomFont
}

import $ from 'jquery'

export var $mainLayerBody = $('.Main-layerBody')

var configSlide = {
  ejecutions: 0,
  imagesNames: [2, 3, 4, 1]
}
var length = configSlide.imagesNames.length

export function slide () {
  if (configSlide.ejecutions < length) {
    $mainLayerBody.css('background-image', `url("img/${configSlide.imagesNames[configSlide.ejecutions]}.jpg")`)
    configSlide.ejecutions += 1
  } else {
    configSlide.ejecutions = 0
  }
}

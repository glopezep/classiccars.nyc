import $ from 'jquery'

export var $appContainer = $('#App-container')
var $mainContainer = $('#Main-container')

var configSlide = {
  ejecutions: 0,
  imagesNames: [2, 3, 4, 5, 6, 1]
}
var length = configSlide.imagesNames.length

export function slide () {
  if (configSlide.ejecutions < length) {
    $appContainer.css('background-image', `url("/img/${configSlide.imagesNames[configSlide.ejecutions]}.jpg")`)
    configSlide.ejecutions += 1
  } else {
    configSlide.ejecutions = 0
  }
}

export function transition (callback) {
  $mainContainer.addClass('transition')
  setTimeout(function () {
    $mainContainer.removeClass('transition')
    callback()
  }, 300)
}

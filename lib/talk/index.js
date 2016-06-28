import $ from 'jquery'
import page from 'page'
import empty from 'empty-element'
import template from './template'
import { transition } from '../util'

page('/talk', (ctx, next) => {
  var instance
  $(function () {
    if (!instance) {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA8CbuLURymr1yVV9fEodu8Q2uQMvz5BFk&callback=initMap'
      document.body.appendChild(script)
      instance = true
    }
    document.title = 'Classiccars - Talk to us'
    var mainContainer = document.getElementById('Main-container')
    transition()
    empty(mainContainer).appendChild(template)
    return false
  })
})

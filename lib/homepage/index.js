import page from 'page'
import empty from 'empty-element'
import template from './template'

page('/', (ctx, next) => {
  document.title = 'Classiccars'
  var mainContainer = document.getElementById('Main-container')
  empty(mainContainer).appendChild(template)
  return false
})

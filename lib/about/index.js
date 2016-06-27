import page from 'page'
import empty from 'empty-element'
import template from './template'

page('/about', (ctx, next) => {
  document.title = 'Classiccars - About us'
  var mainContainer = document.getElementById('Main-container')
  empty(mainContainer).appendChild(template)
  return false
})

import page from 'page'
import empty from 'empty-element'
import template from './template'
import { transition } from '../util'

page('/', (ctx, next) => {
  document.title = 'Classiccars'
  var mainContainer = document.getElementById('Main-container')
  transition(() => {
    empty(mainContainer).appendChild(template)
  })
  return false
})

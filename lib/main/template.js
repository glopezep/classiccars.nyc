import yo from 'yo-yo'

import header from '../header/template.js'
import footer from '../footer/template.js'


export function main () {
  return yo`${header}
    <section class="Main">
      <div class="container">
        <div class="Main-container row center-align">
          <h1 class="Main-title">Classiccars.nyc</h1>
        </div>
        ${footer}
      </div>
      <div class="Main-layer"></div>
    </section>`
}

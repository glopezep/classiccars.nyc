import $ from 'jquery'
import page from 'page'
import './homepage'
import './about'
import './talk'
import { slide } from './util'

page.base('/classiccars.nyc')

setInterval(() => slide(), 4000)

page()

import {render} from 'react-dom'

import {App, mountNode} from './app'


window.addEventListener('DOMContentLoaded', ()=>{
  mountNode(App, render)
})

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import Routes from './routes'
import * as store from './store'
import * as utils from './utils'

import 'normalize.css'
import './styles/global.scss'

let App = ()=>{
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}

window.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(<App />, document.querySelector('.app'))
})



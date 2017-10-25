import React from 'react'
import {Provider} from 'mobx-react'

import Routes from './routes'
import * as store from './store'

import 'normalize.css'
import './styles/global.scss'

export function App(){
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}


export function mountNode(Component, render){
  render(<Component />, document.querySelector('.app'))
}


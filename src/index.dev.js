import 'react-hot-loader/patch';
import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import { App, mountNode } from './app'


const hotRootNode = Component => {
  return function () {
    return (
      <AppContainer>
        <Component />
      </AppContainer>
    )
  }
}

mountNode(hotRootNode(App), render)

if (module.hot) {
  module.hot.accept('./app', () => {
    console.log('Accepting the updated printMe module!');
    const App = require('./app').App;
    mountNode(hotRootNode(App), render)
  })
}


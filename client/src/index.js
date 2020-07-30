import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import configureStore from './state/configureStore'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
const rootElement = document.getElementById('root')

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
})

serviceWorker.unregister()

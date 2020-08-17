import EN from './en'
import CN from './cn'

import React, { createContext } from 'react'

export const LocaleContext = createContext({
  locale: EN,
  changeLocale: () => {},
})

export const { Provider, Consumer } = LocaleContext

export const withContext = Component => props => (
  <Consumer>
    {value => <Component {...value} {...props} />}
  </Consumer>
)

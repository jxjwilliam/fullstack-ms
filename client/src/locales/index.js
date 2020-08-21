import React, { createContext } from 'react'
const Languages = ['English', '中文'];
// const Languages = ['English :us:', '中文 :cn:'];
const LocaleContext = createContext()

export {
  Languages,
  LocaleContext,
}

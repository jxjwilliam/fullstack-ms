import React from 'react'
import {FormatQuote, MoveToInbox, Payment, People} from "@material-ui/icons";
import { base, navList, mainList, defaultUrl } from "./routers";
import { getPageLayout } from '../components'

beforeEach(() => {
  const Routers = [
    {
      path: 'POC额度',
      title: 'POC额度',
      icon: FormatQuote,
      // component: C1,
    },
    {
      path: 'POC管理',
      title: 'POC管理',
      icon: People,
      // component: C2,
    },
    {
      path: 'POC流转',
      title: 'POC流转',
      icon: MoveToInbox,
      // component: C3
    },
    {
      path: '还款管理',
      title: '还款管理',
      icon: Payment,
      // component: C4,
    }
  ];
})

describe('routers', () => {
  it('test menu and nav list', () => {
    expect('hello the world').toBeTruthy()
  })
})

afterEach(() => {
})


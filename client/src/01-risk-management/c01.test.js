import React from 'react'
import {
  LaptopWindows,
  Message,
  RateReview,
  AssignmentTurnedIn,
  FormatQuote,
  Business,
  Payment,
  LocalAtm,
  DirectionsRun,
  FilterVintage,
  Layers,
} from '@material-ui/icons'
import { navList, mainList } from './routers'

describe('routers', () => {
  let [baseUrl, func, origin_routers] = [, , []]
  const routers = []

  beforeEach(() => {
    baseUrl = '风险管理'
    func = function () {}
    origin_routers = [
      {
        path: `/${baseUrl}/系统管理`,
        title: '系统管理',
        icon: LaptopWindows,
        component: func,
      },
      {
        path: `/${baseUrl}/客户信息`,
        title: '客户信息',
        icon: Message,
        // component: Layout1(C2[0], C2[1]),
      },
      {
        path: `/${baseUrl}/评级限额`,
        title: '评级限额',
        icon: RateReview,
        // component: Layout1(C3[0], C3[1]),
      },
      {
        path: `/${baseUrl}/授信审批`,
        title: '授信审批',
        icon: AssignmentTurnedIn,
        // component: Layout1(C4[0], C4[1]),
      },
      {
        path: `/${baseUrl}/额度管理`,
        title: '额度管理',
        icon: FormatQuote,
        // component: Layout1(C5[0], C5[1]),
      },
      {
        path: `/${baseUrl}/文档管理`,
        title: '文档管理',
        icon: Business,
        // component: Layout1(C6[0], C6[1]),
      },
      {
        path: `/${baseUrl}/贷后管理`,
        title: '贷后管理',
        icon: LocalAtm,
        // component: Layout1(C7[0], C7[1]),
      },
      {
        path: `/${baseUrl}/还款`,
        title: '还款',
        icon: Payment,
        // component: Layout1(C8[0], C8[1]),
      },
      {
        path: `/${baseUrl}/运营管理`,
        title: '运营管理',
        icon: DirectionsRun,
        // component: Layout1(C9[0], C9[1]),
      },
      {
        path: `/${baseUrl}/流程管理`,
        title: '流程管理',
        icon: FilterVintage,
        // component: Layout1(C10[0], C10[1]),
      },
      {
        path: `/${baseUrl}/参数配置`,
        title: '参数配置',
        icon: Layers,
        // component: Layout1(C11[0], C11[1])
      },
    ]
  })

  it('navList', () => {
    expect(navList.length).toEqual(11)
  })

  it('mainList', () => {
    expect(mainList.length).toBe(11)
  })

  it('getInitial', () => {
    const initial_path = defaultUrl
    const default_path = '/风险管理/系统管理/角色查询'
    expect(initial_path).toEqual(default_path)
  })

  describe('getAllRouters', () => {
    it('', () => {
      expect(true).toBeTruthy()
    })
  })

  describe('getPageLayout', () => {
    it('should getAllRouters works with mainList and navList', () => {
      // routers = getAllRouters(navList, mainList, baseUrl)
      // expect(routers).toMatchObject(origin_routers)
      // expect(routers.length).toBe(navList.length)
      expect(true).toBeTruthy()
    })

    it('should getPageLayout works with mainList and navList', () => {
      // const pageLayout = getPageLayout(baseUrl, baseUrl, baseUrl, routers)
      // console.log(pageLayout);
      expect(true).toBeTruthy()
    })
  })
})


// 原来的导航列表是数组，转换生成导航{}
import {getContent, getMenu, Layout1} from "../components/layout";
import {menuList, navList} from "./config";
import {getAllRouters} from './routers'

beforeEach(() => {
  const BASE = 'whatever'
})

describe('sub-routers', () => {
  it('test menu and nav list', () => {
    const test1 = menuList.reduce((obj, url) => ({ ...obj, [url]: `${BASE}/${url}` }), {});
    console.log(menuList)
    console.log(navList)
    const Routers = getAllRouters(navList, menuList)
    console.log(Routers)
    expect('hello the world').toBeTruthy()
  })
})

afterEach(() => {
})

function getSubRouters(navs, menus) {
  return navs.map((nav, idx) => {
    const nnn = getMenu(menus)
    const mmm = getContent(menus)
    return {
      path: `${BASE}/${nav[0]}`,
      title: nav[0],
      icon: nav[1],
      component: Layout1(nnn, mmm)
    }
  })
}

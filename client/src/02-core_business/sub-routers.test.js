
// 原来的导航列表是数组，转换生成导航{}
import {getContent, getMenu, Layout} from "../components/layout";

function getRouters(menuAry) {
  return menuAry.reduce((obj, url) => ({ ...obj, [url]: `${BASE}/${url}` }), {});
}


function getSubRouters(navs, menus) {
  return navs.map((nav, idx) => {
    const nnn = getMenu(menus)
    const mmm = getContent(menus)
    return {
      path: `${BASE}/${nav[0]}`,
      title: nav[0],
      icon: nav[1],
      component: Layout(nnn, mmm)
    }
  })
}

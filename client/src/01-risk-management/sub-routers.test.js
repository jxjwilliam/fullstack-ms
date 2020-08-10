import {menuList, navList} from "./config";
import {getAllRouters} from './sub-routers'

beforeEach(() => {

})

describe('sub-routers', () => {
  it('test menu and nav list', () => {
    console.log(menuList)
    console.log(navList)
    const Routers = getAllRouters(navList, menuList)
    console.log(Routers)
    expect('hello the world').toBeTruthy()
  })
})

afterEach(() => {

})

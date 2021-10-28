// import store from '@/store'

// //添加tabs路由页面
// export function changeTab(to) {
//   let tabList = [...store.state.Menu.TabList]
//   let haves = false
//   // let ifMenu=false
//   let menuList = [...store.state.Menu.SiderMenuList]
//   //设置菜单边栏的morenindex
//   menuList.map((i, index) => {
//     if (i.name === to.meta.title) {
//       // ifMenu=true
//       store.commit('Menu/SetCurrent', index)
//     }
//   })
//   store.commit('Menu/SetActiveKey', to.meta.title)
//   //设置tab页面
//   tabList.map((i) => {
//     if (i.title === to.meta.title) {
//       haves = true
//       store.commit('Menu/SetActiveKey', i.title)
//     }
//   })
//   if (!haves) {
//     tabList.push({ 'title': to.meta.title, 'path': to.path })
//     store.dispatch('Menu/AsynSetTabList', tabList)
//     haves = false
//     // console.log(tabList)
//   }
// }


import store from '@/store'
import action from "@/utils/action"
//添加tabs路由页面
export function changeTab(to) {
  // console.log(to)
  //拉取当前公共路由信息及路由base
  let tabList = [...store.state.Menu.TabList]
  let base = store.state.Menu.routerBase
  let haves = false

  //将子路由信息放入观察池
  action.setGlobalState({ activeKey: to.meta.title })
  //判断当前路由是否存在观察池中，存在则更新当前tabs key
  tabList.map((i) => {
    if (i.title === to.meta.title) {
      haves = true
      action.setGlobalState({ activeKey: i.title })
    }
  })
  //不存在则新增
  if (!haves) {
    tabList.push({ 'title': to.meta.title, 'path': base + '#' + to.fullPath, 'name': base })
    store.dispatch('Menu/AsynSetTabList', tabList)
    haves = false
    action.setGlobalState({ routerPublic: tabList })
  }
}
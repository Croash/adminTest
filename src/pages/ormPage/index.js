import React,{ Component } from 'react'
// import { StoreWrap } from '../../core'
import comp from './component'
// import reducers from './reducers'
const { OrmComp } = comp

export default {
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_init',
      namespace:'orm',
      payload: {
        t:'test_orm'
      }
    })
  },
  // reducers,
  routers: {
    '/': {
      path: 'orm',
      component: OrmComp
    }
  }
}

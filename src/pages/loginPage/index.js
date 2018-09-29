import React,{ Component } from 'react'
// import { StoreWrap } from '../../core'
import Auth from './component'

export default {
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_init',
      namespace:'login',
      payload: {
        t:'test'
      }
    })
  },
  routers: {
    '/': {
      path: 'login',
      component: Auth
    }
  }
}

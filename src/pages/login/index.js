import React,{ Component } from 'react'
// import { StoreWrap } from '../../core'
import Auth from './component'
import reducers from './reducers'

export default {
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_login',
      payload: {
        state: false,
        token: ''
      }
    })
  },
  reducers,
  routers: (app) => {
    return {
      '/': {
        path: 'login',
        component: ()=>{
          const { layout:Layout } = app.load_dict('layout')
          return <Layout><Auth/></Layout>
        }
      }
    }
  }
}

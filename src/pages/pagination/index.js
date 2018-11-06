import React,{ Component } from 'react'
// import effects from './effects'
import reducers from './reducers'
import widgets from './widgets'
const { Pagination, DataLog } = widgets

const model = {
  name: 'blog_pagination',
  // effects: {},
  reducers,
  initial_state: {
    dd: 22
  },
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_state',
      namespace:'pagination',
      payload: {
          size: 20,
          num: 1
      }
    })
  },
  routers: (app) => {
    const { layout:Layout } = app.load_dict('layout')
    return {
      '/' : {
        path: 'Datalog',
        component: ()=>(<Layout InputComponent={DataLog}/>)
      }
    }
  }
}

export default model

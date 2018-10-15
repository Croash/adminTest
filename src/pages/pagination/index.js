import React,{ Component } from 'react'
// import effects from './effects'
import widgets from './widgets'
const { Pagination, DataLog } = widgets

const model = {
  name: 'blog_pagination',
  // effects: {},
  reducers: {},
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

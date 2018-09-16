import React,{ Component } from 'react'
import { app } from 'xadmin'
import ShowComponent from './component'
import OtherComp from './other'

const HelloComp = (content)=>()=>{
  const { store } = app.context
  return (
    <button onClick={()=>{ store.dispatch({ type:'ADD', count: 22 }) }}>{ content }</button>
  )
}


const plugin = {
  start: (app) => () => {
    console.log(app)
  },
  reducers: {
    count: (state=0, action) => {
      if(action.type == 'ADD') {
        console.log(state + action.count)
        return state + action.count
      }
      return state
    }
  },
  /*
   **
   *
   * ways to config routers
   * 1. property name is 'routers'
   * 2. @ is initial routes
   * 
   */ 
  routers: {
    '@' : {
      path: '/',
      component: HelloComp('initRoute'),
      exact: true
    },
    '/' : {
      path: 'app',
      component: HelloComp('app'),
      exact: true,
      routes: [
        { 
          path:'/post',
          exact: true,
          component: HelloComp('post')
        }
      ]
    },
    '/app': {
      path: '/post1',
      component: HelloComp('app/post1'),
      exact: true
    }
  }
}

export default plugin

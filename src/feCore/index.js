import React,{ Component } from 'react'
import { app } from 'xadmin'
import ShowComponent from './component'
import OtherComp from './other'

const HelloComp = (content)=>()=>{
  <div>{content}</div>
}

const plugin = {
  start: ()=>(app)=>{
    console.log(app)
  },
  reducers: {
    count: (state=0, action) => {
      if(action.type == 'ADD') {
        return state + action.count
      }
      return state
    }
  },
  routers: {
    '@' : {
      path: '/',
      component: ()=>(<div>notgh</div>),
      exact: true
      // ,
      // indexRoute: {
      //   onEnter: (_, replace) => replace({ pathname: '/app' })
      // }
    },
    '/' : {
      path: 'app',
      component: ShowComponent,
      exact: true,
      routes: [
        { 
          path:'/lalala',
          exact: true,
          component: ShowComponent
        }
      ]
    }
  }
}

export default plugin

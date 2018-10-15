import React,{ Component } from 'react'
import Content from './Content'

const model = {
  name: 'blog_content',
  // effects: {},
  reducers: {},
  routers: (app) => {
    const { layout:Layout } = app.load_dict('layout')
    return {
      '/' : {
        path: 'Content',
        component: ()=>(<Layout InputComponent={Content}/>)
      }
    }
  }
}

export default model
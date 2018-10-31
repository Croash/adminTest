import React,{ Component } from 'react'
import Content from './Content'
import { Redirect } from 'react-dom'

const model = {
  name: 'blog_content',
  // effects: {},
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_init',
      namespace:'content',
      payload: {
        pagination: {}
      }
    })
  },
  reducers: {},
  routers: (app) => {
    const { layout:Layout } = app.load_dict('layout')
    return {
      '/' : {
        path: 'Content',
        exact: true,
        children: ({ match }) => (
            <li className={match ? "active" : ""}>
              {/* <Link to={to} {...rest} /> */}
            </li>
          ),
        component: ()=>(<div>null</div>),
        routes: [
          { 
            path:'/:cate',
            exact: true,
            component: ({match})=>{
              console.log(match)
              const { cate } = match
              return <Layout >
                <Content/>
              </Layout> 
            }
          }
        ]
      },
      '/Content': {
        path: '/Map',
        exact: true,
        component: ()=>(<div>Children</div>),
      }
    }
  }
}

export default model
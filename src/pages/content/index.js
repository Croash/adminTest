import React,{ Component } from 'react'
import Content from './Content'

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
        children: ({ match }) => (
            <li className={match ? "active" : ""}>
              {/* <Link to={to} {...rest} /> */}
            </li>
          ),
        component: ()=>(
          <div>null</div>
        ),
        // routes: [
        //   { 
        //     path:'/:cate',
        //     exact: true,
        //     component: ()=>(<Layout InputComponent={Content}/>)
        //   }
        // ]
      }
    }
  }
}

export default model
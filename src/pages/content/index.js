import React,{ Component } from 'react'
import Content from './Content'
import reducers from './reducers'
import { Redirect } from 'react-dom'

const model = {
  name: 'blog_content',
  // effects: {},
  on_create_store: (app) => () => {
    const { store } = app.context
    store.dispatch({
      type:'@@admin_data',
      namespace:'article',
      payload: {
        '1st': {
          description: '',
          main: '',
          comment: {
            
          }
        }
      }
    })
  },
  reducers,
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
              const { cate } = match
              return <Layout >
                <Content cate={cate}/>
              </Layout> 
            }
          }
        ]
      }
    }
  }
}

export default model
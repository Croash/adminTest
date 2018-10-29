import React,{ Component } from 'react'
import { app } from './core'
import initPage from './pages/initPage'
import authPage from './pages/loginPage'
import layoutPage from './layout'
import OrmPage from './pages/ormPage'
import Pagination from './pages/pagination'
import Content from './pages/content'

app
  .use(initPage)
  .use({
    routers: {
      '/' : {
        path: 'blue',
        component: ()=>{ return <div>blue</div> },
        exact: true
      }
    }
  })
  .use({
    routers: {
      '/': {
        path: 'sg',
        exact: true,
        component: () => (<div>test</div>),
        routes: [
          { 
            path:'/post',
            exact: true,
            component: ()=>(<div>lalala</div>)
          }
        ]
      },
    }
  })
  .use(authPage)
  .use(layoutPage)
  .use(OrmPage)
  .use(Pagination)
  .use(Content)
  .start({ container: '#root' })

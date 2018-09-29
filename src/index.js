import React,{ Component } from 'react'
import { app } from './core'
import feCore from './feCore'
import authPage from './pages/loginPage'
import layoutPage from './layout'
import OrmPage from './pages/ormPage'

app
  .use(feCore)
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
  .start({ container: '#root' })

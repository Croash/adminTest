import React,{ Component } from 'react'
import { app } from './core'
import feCore from './feCore'
import authPage from './pages/loginPage'

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
  .start({ container: '#root' })

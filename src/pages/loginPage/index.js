import React,{ Component } from 'react'
// import { StoreWrap } from '../../core'
import Auth from './component'

export default {
  routers: {
    '/': {
      path: 'login',
      component: Auth
    }
  }
}

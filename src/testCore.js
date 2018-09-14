import React,{ Component } from 'react'

import { app } from './core'
import core from './feCore'

app
  .use(core)
  .use({
    routers: {
      '/sg': {
        path: '/',
      },
    },
  })
  .start({ container: '#app' })

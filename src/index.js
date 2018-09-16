import React,{ Component } from 'react'
import { app } from './core'
import feCore from './feCore'

app
  .use(feCore)
  .start({ container: '#root' })

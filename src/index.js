// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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

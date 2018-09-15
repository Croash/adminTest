import React from 'react'
import ReactDOM,{ PropTypes } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware, { takeEvery, takeLatest } from 'redux-saga'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { fork } from 'redux-saga/effects'

// redux app
const redux_app = {
  context: (app) => (context, cb) => {

    const devtools = window.devToolsExtension || (() => noop => noop)
    const enhancers = [
      applyMiddleware(...app.load_list('middlewares')),
      ...app.load_list('store_enhancers'),
      devtools()
    ]

    const combine_reducer = (key, reducers) => {
      if(reducers.length > 1) {
        return (state, action) => {
          return reducers.reduce((prev, reducer) => reducer(prev, action) , state)
        }
      } else {
        return reducers[0]
      }
    }
    
    const create_reducers = () => {
      const reducers_map = app.load_dict_list('reducers')
      let reducers = {}
      for(const key in reducers_map) {
        reducers[key] = combine_reducer(key, reducers_map[key])
      }
      return combineReducers(reducers)
    }

    // create store
    const store = createStore(
      create_reducers(),
      context['initial_state'] || {},
      compose(...enhancers)
    )

    cb(null, { ...context, store })
  },
  start: (app) => () => {
    // store change
    const { store } = app.context
    const listeners = app.load_list('subscribe')
    for (const listener of listeners) {
      store.subscribe(listener)
    }
    app.load_list('on_create_store').forEach((callback) => callback(store))
  }
}

// saga app
const sagaMiddleware = createSagaMiddleware()
const sage_app = {
  context: (app) => (context, cb) => {
    // extend store
    const { store } = context
    store.runSaga = sagaMiddleware.run

    // start saga
    const effects = app.load_list('effects')
    effects.forEach(sagaMiddleware.run)
    cb(null, context)
  },
  middlewares: (app) => { return sagaMiddleware }
}

// react & react-router app
const react_app = {
  context: (app) => (context, cb) => {
    app.go = (uri) => {
      app.context.router.push(uri)
    }
    
    // const routerType = app.load_dict('config')['router'] || 'browser'
    // const router = (typeof routerType === 'string') ? {
    //   browser: browserHistory,
    //   hash: hashHistory
    // }[routerType] : routerType

    cb(null, { ...context
      // , router 
    })
  },
  start: (app) => () => {
    // init container
    let { container='#app' } = app.context
    if (typeof container === 'string') {
      container = document.querySelector(container)
    }

    const rs = app.load_dict_list('routers')
    const te = app.load_list('testConfig')
    //need trans rs to routesFunc 
    const routesFunc = (routes,prePath,memory) => {
      if(!memory)
        memory=[]
      routes.forEach(r=>{
        const { routes ,...props } = r
        memory.push({...props,path:prePath+r.path})
        if(r.routes&&r.routes instanceof Array)
          routesFunc(r.routes,prePath+r.path,memory)
      })
      return memory
    }
    const find_childs = (path) => {
      return (rs[path] || []).map((r) => {
        const childs = find_childs((path == '@' ? '' : path) + r.path)
        return childs.length > 0 ? { ...r, routes: [ ...(r.routes||[]), ...childs ] } : r
      })
    }
    const routers = find_childs('@')
    console.log(rs,te,routers,routesFunc(routers,''))
    const routersConfig = routesFunc(routers,'')

    let AppComponent = (routersConfig && routersConfig.length) ?
      () => (<Router basename = {'/'}>
        <div>
          <Switch>
            {routersConfig.map(r=><Route {...r} ></Route>)}
          </Switch>
        </div>
      </Router>) :
      (app.load_dict('components').Main || (() => <span>Please config routers or Main component.</span>))

    const RootComponent = app.load_list('root_component').reduce((PrevComponent, render) => {
      console.log(render)
      return render(PrevComponent)
    }, AppComponent)

    ReactDOM.render(<RootComponent />, container)
  }
}

// react-redux app
const react_redux_app = {
  root_component: (app) => (PrevComponent) => {
    const { store } = app.context
    return () => (
      <Provider store={store}><PrevComponent /></Provider>
    )
  }
}

export default app => {
  return app.use(redux_app).use(sage_app).use(react_app).use(react_redux_app)
}
import layout from './component'
import widgets from './widgets';

export default {
  components: {
    layout
  },
  layout: {
    layout
  },
  routers: (app) => {
    const { layout } = app.load_dict('layout')
    return {
      '/' : {
        path: 'layout',
        component: layout
      }
    }
  }
}

// export widgets

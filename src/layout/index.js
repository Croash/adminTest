import layout from './component'
import widgets from './widgets';

export default {
  components: {
    layout
  },
  routers: (app) => {
    const { layout } = app.load_dict('components')
    return {
      '/' : {
        path: 'layout',
        component: layout
      }
    }
  }
}

// export widgets

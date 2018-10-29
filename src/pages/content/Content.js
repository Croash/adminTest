import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { app } from '../../core/index'
// import Writer from './Writer'
// import Map from './Map'
// import Charts from './Charts'

import widgets from './widgets'
const { Writer,
  Map,
  Charts } = widgets
// const { Paper } = Widgets

const compList = {
  Writer,
  Map,
  Charts
}

const contentStyle = { 
  border: '2px red',
  paddingLeft: '15%', 
  paddingRight: '15%', 
  paddingTop: '64px',
  minHeight: '700px',
  paddingBottom: '300px'
}

class Content extends Writer {

  constructor(props) {
    super(props)
    this.store = app.context.store
    this.namespace = 'content'
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const data = this.store.getState().data
    const { page=0, content = [] } = data[this.namespace].pagination
    const { route:{ match:{ params:{ cate } } } } = this.context.router
    // const { page=0, content = [] }  = this.store.getState()[this.namespace].pagination

    let ShowContent = cate? ( compList[cate]!=undefined ? compList[cate]:compList['Writer'] ) 
      : null
    console.log(ShowContent,cate)
    return ( 
      <div className={'content'}>
        {/* { ShowContent? <ShowContent { ...this.props } /> : <ShowContent/> } */}
        <Map />
      </div>
    )
  }
}

export default withRouter(Content) 

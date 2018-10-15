import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Pagination'

import Paper from '../Paper'
import './style.css'
class Catalog extends Component {

  render() {
    const { page=0, content = [{},{}] }  = this.props
    console.log('gg')
    return ( 
      <div className={'content'}>
        {
          content.map(c=><Paper {...c} />)
        }
        <Pagination/>
      </div>
    )
  }
}

export default Catalog

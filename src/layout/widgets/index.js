import React from 'react'
import { withRouter } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
import Wrap from './Wrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Paper from '@material-ui/core/Paper';
import './style.css'

const _wrap_component = ({InputComponent, ...props}) => {
  console.log(props,'props')
  return <MuiThemeProvider>
    <Wrap {...props}>
      <Header/>
      <Paper>
      {props.children}
      </Paper>
      <Footer/>
      <SideBar/>
    </Wrap>
  </MuiThemeProvider>
}

export default withRouter(_wrap_component)

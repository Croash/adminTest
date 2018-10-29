import React from 'react'
import { withRouter } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
import Wrap from './Wrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style.css'

const _wrap_component = ({InputComponent, ...props}) => {
  return <MuiThemeProvider>
    <Wrap {...props}>
      <Header/>
      { InputComponent?<InputComponent/>:null }
      <Footer/>
      <SideBar/>
    </Wrap>
  </MuiThemeProvider>
}

export default withRouter(_wrap_component)

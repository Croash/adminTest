import React from 'react'
import widgets from './widgets'
const { Footer, Header, SideBar, Wrap } = widgets

export default ({InputComponent, ...props}) => (
  <Wrap {...props}>
    <Header/>
    { InputComponent?<InputComponent/>:null }
    <Footer/>
    <SideBar/>
  </Wrap>
)

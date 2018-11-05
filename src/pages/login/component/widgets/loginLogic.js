import React,{ Component } from 'react'
import AuthPage from './testauth'

class AuthLogic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usr: '',
      pwd: ''
    }
  }
  pwdChange = (e) => {
    this.setState({ pwd: e.target.value }) 
  }
  usrChange = (e) => {
    this.setState({ usr: e.target.value }) 
  }
  render() {
    const props = {
      pwdChange: this.pwdChange,
      usrChange: this.usrChange,
      pwd: this.state.pwd,
      usr: this.state.usr
    }
    return(<AuthPage {...props}/>)
  }
}

export default AuthPage

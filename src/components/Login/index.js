import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    type: 'password',
    buttonOk: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 365})
    const {history} = this.props
    history.replace('/')
  }

  onFailureSubmit = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(userDetails)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onFailureSubmit(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  handleKeyUp = event => {
    if (event !== null) {
      this.setState(prevState => ({
        buttonOk: !prevState.buttonOk,
      }))
    }
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      type: prevState.type === 'password' ? 'text' : 'password',
    }))
  }

  renderPasswordField = () => {
    const {password, type} = this.state
    return (
      <>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={type}
          id="password"
          className="password-input-filed"
          value={password}
          onKeyUp={this.handleKeyUp}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        {' '}
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, type, buttonOk} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <form id="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1713680287/Logo_2_ty0ilv.png"
            className="login-logo"
            alt="login website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <div id="passco">
              <input
                type="checkbox"
                className="check"
                id="showPassword"
                checked={type === 'text'}
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </div>
          <button
            type="submit"
            className={`login-button ${buttonOk && 'button2'}`}
          >
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login

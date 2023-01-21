import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import axiCareLogo from '../assets/axiCareLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userDetails: {
        email: '',
        password: '',
        name: 'Shanaaya',
      },
      isAuth: false
    }
  }

  render() {
    return (
      // <div className="auth-inner" style={{ marginTop: '80px' }}>
      <form>
        <Grid container justifyContent="center">
          <Grid item xs={2} sm={4} md={4} justifyContent="center">
            <SvgIconImage
              src={axiCareLogo}
              alt=""
              h="100"
              w="100"
              style={{ width: 'fit-content', padding: '0px 168px', marginTop: '80px', textAlign: 'center' }}
            /><br /><br />
            <h3><span style={{ color: '#5BC6CC' }}>Log</span> <span style={{ color: '#AE275F' }}>In</span></h3>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.userDetails.email}
                onChange={e => this.setState({ userDetails: { ...this.state.userDetails, email: e.target.value } })}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.userDetails.password}
                onChange={e => this.setState({ userDetails: { ...this.state.userDetails, password: e.target.value } })}
              />
            </div>
            {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
            <Box className="d-grid" >
              <Button className="btn btn-primary" style={{ background: '#AE275F', textDecoration: 'none', color: 'white' }}
                onClick={e => {
                  sessionStorage.setItem("userDetails", JSON.stringify({ email: this.state.userDetails.email, password: this.state.userDetails.password, firstName: "Shanaaya", lastName: 'Shah' }))
                  sessionStorage.setItem("isAuth", true)
                  this.setState({ isAuth: true })
                  window.location.pathname = '/'
                }}>
                Submit
              </Button>
            </Box>
            <div className="forgot-password">
              Don’t have an account?, <Link to={'/sign-up'} style={{ color: '#AE275F' }}>Register</Link>
            </div>
            {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
          </Grid>
        </Grid>
      </form>
      // </div>
    )
  }
}

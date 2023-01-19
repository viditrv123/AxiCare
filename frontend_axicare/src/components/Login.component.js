import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import axiCareLogo from '../assets/axiCareLogo.svg'
import { Link } from 'react-router-dom'
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default class Login extends Component {
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
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
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
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" style={{ background: '#AE275F' }}>
                Submit
              </button>
            </div>
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

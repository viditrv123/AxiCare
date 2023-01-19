import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import axiCareLogo from '../assets/axiCareLogo.svg'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
export default class SignUp extends Component {
  render() {
    return (
      // <div className="auth-inner" style={{marginTop: '460px'}}>
      <form>
        <Grid container justifyContent="center">
          <Grid item xs={2} sm={4} md={4}>
            <SvgIconImage
              src={axiCareLogo}
              alt=""
              h="100"
              w="100"
              style={{ width: 'fit-content', padding: '0px 100px', marginTop: '80px', textAlign: 'center' }}
            />
          </Grid>
        </Grid><br />
        <h3><span style={{ color: '#5BC6CC' }}>Regi</span><span style={{ color: '#AE275F' }}>ster</span></h3>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Full Name (as per Aadhar)</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Preferred Name</label>
              <input type="text" className="form-control" placeholder="Preferred Name" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Gender</label>
              <input type="text" className="form-control" placeholder="Gender" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Mobile Number</label>
              <input type="number" className="form-control" placeholder="Mobile Number" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Aadhar Number</label>
              <input type="number" className="form-control" placeholder="Aadhar Number" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>PAN Number</label>
              <input type="text" className="form-control" placeholder="PAN Number" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Email address (will be used for login)</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Verify Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={2} sm={4} md={4}>
            <div className="d-grid margin-0-20" style={{ marginTop: '20px' }}>
              <button type="submit" className="btn btn-primary" style={{ background: '#AE275F' }}>
                Submit
              </button>
            </div>
          </Grid>
        </Grid>
        <p className="forgot-password" style={{ textAlign: 'center' }}>
          Already registered? <Link to="/sign-in" style={{ color: '#AE275F' }} >Login</Link>
        </p>
      </form>
      // </div>
    )
  }
}

import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import axiCareLogo from '../assets/axiCareLogo.svg'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      aadhaarNumber: '',
      panNumber: '',
      mobileNumber: '',
      password: '',
      verifyPassword: '',
      genderIdentified: 'Yes',
      namePreferred: 'Yes'
    }
  }

  handleChange = (target) => {
    this.setState({ [target.id]: target.value })
  }

  render() {
    const { email, aadhaarNumber, panNumber, mobileNumber, password, verifyPassword, genderIdentified, namePreferred } = this.state;
    return (
      // <div className="auth-inner" style={{marginTop: '460px'}}>
      <form>
        <Grid container justifyContent="center">
          <Grid item xs={2} sm={4} md={4} justifyContent="center">
            <SvgIconImage
              src={axiCareLogo}
              alt=""
              h="100"
              w="100"
              style={{ width: 'fit-content', padding: '0px 168px', marginTop: '80px', textAlign: 'center' }}
            />
          </Grid>
        </Grid><br />
        <h3><span style={{ color: '#5BC6CC' }}>Regi</span><span style={{ color: '#AE275F' }}>ster</span></h3>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Email address</label>
              <input
                id='email'
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => this.handleChange(e.target)}
                maxlength='50'
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Aadhar Number</label>
              <input
                id='aadhaarNumber'
                type="number"
                className="form-control"
                placeholder="Aadhar Number"
                value={aadhaarNumber}
                onChange={(e) => this.handleChange(e.target)}
              // maxlength='12'
              // minlength='12'
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>PAN Number</label>
              <input
                id='panNumber'
                type="text"
                className="form-control"
                placeholder="PAN Number"
                value={panNumber}
                onChange={(e) => this.handleChange(e.target)}
                maxlength='10'
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Mobile Number</label>
              <input
                id='mobileNumber'
                type="number"
                className="form-control"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Password</label>
              <input
                id='password'
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="mb-3 margin-0-20">
              <label>Verify Password</label>
              <input
                id='verifyPassword'
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={verifyPassword}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
          </Grid>
          <Grid container m={2} px={10} spacing={1} justifyContent="center">
            <Grid item xs={6} sm={6} md={6} justifyContent="center" textAlign={'center'}>
              <FormControl>
                <label>Do want to have a Preferred Name for yourself</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  style={{ justifyContent: 'center' }}
                  value={genderIdentified}
                >
                  <FormControlLabel value={'Yes'} control={<Radio style={{ color: '#AE275F' }} />} label="Yes" onClick={(e) => this.setState({ genderIdentified: e.target.value })} />
                  <FormControlLabel value={'No'} control={<Radio style={{ color: '#AE275F' }} />} label="No" onClick={(e) => this.setState({ genderIdentified: e.target.value })} />
                </RadioGroup>
              </FormControl>
              <Box className="mb-3 margin-0-20" px={10}>
                <label>Gender</label>
                <input type="text" className="form-control" placeholder="Gender" disabled={genderIdentified === 'No'} />
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} justifyContent="center" textAlign={'center'}>
              <FormControl>
                <label>Do want to have a Preferred Name for yourself</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => this.setState({ namePreferred: e.target.value })}
                  style={{ justifyContent: 'center' }}
                  value={namePreferred}
                >
                  <FormControlLabel value={'Yes'} control={<Radio style={{ color: '#AE275F' }} />} label="Yes" onClick={(e) => this.setState({ namePreferred: e.target.value })} />
                  <FormControlLabel value={'No'} control={<Radio style={{ color: '#AE275F' }} />} label="No" onClick={(e) => this.setState({ namePreferred: e.target.value })} />
                </RadioGroup>
              </FormControl>
              <Box className="mb-3 margin-0-20" px={10}>
                <label>Full Name (as per Aadhar)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  disabled={namePreferred === 'No'}
                />
              </Box>
            </Grid>
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

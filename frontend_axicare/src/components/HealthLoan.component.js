import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import profile from '../assets/Profile.png'
import chatFrame from '../assets/chatFrame.png'
import redTick from '../assets/redTick.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import DropdownComp from '../utilities/DropdownComp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import searchBar from '../assets/searchBar.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { display } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputAdornment from '@mui/material/InputAdornment';

export default class HealthLoan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAxisBank: 'axisBank',
      mpinOption: 'custId',
      custId: '',
      mobileNumber: '',
      mpin: '',
      otp: ''
    }
  }

  doctorDataCards = [{
    image: '',
    name: 'Dr. Ankur Pandya',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Psychiatrist'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, delhi',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Vijay Shetty',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Physician'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, Lucknow',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Nirmala Shah',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Oncologist'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, mumbai',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Vidul Sheth',
    specializations: ['Cardiologist', 'MBBS', 'MD'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, kolkata',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  }]

  handleChange = (e) => {
    this.setState({ [e.id]: e.value })
  }

  render() {


    return (
      <Box pb={4}>
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Hey&nbsp; </span><span style={{ fontSize: '40px', color: '#AE275F', fontWeight: '100' }}>Shanaya,</span> */}
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Welcome to</span> */}
        {/* <Box style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
          <span style={{ fontSize: '115px', fontWeight: '100', color: '#5BC6CC' }}>Axi</span><span style={{ fontSize: '115px', color: '#AE275F', fontWeight: '100' }}>Care</span>
        </Box> */}
        <Box pt={4} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Instant <span style={{ color: '#5BC6CC' }}>Axi</span><span style={{ color: '#AE275F' }}>Care</span> Loan</span>
        </Box>
        <Box style={{ borderRadius: '8px', boxShadow: '0px 4px 4px #AE275F' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8}>
          <Box p={4} style={{ borderBottom: '2px solid black' }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ fontWeight: 'bold' }}
                value={this.state.isAxisBank}
              >
                <FormControlLabel value={'axisBank'} control={<Radio style={{ color: '#AE275F' }} />} style={{ fontWeight: 'bold' }} label="Do you own an Axis Bank Account?" onClick={e => this.setState({ isAxisBank: e.target.value })} />
                <FormControlLabel value={'otherBank'} control={<Radio style={{ color: '#AE275F' }} />} style={{ fontWeight: 'bold' }} label="Do you want to proceed with other bank account with UPI Id?" onClick={e => this.setState({ isAxisBank: e.target.value })} />
              </RadioGroup>
            </FormControl>
          </Box>
          {this.state.isAxisBank === 'axisBank' ? (<Box m={4} p={2} px={14} mx={16} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Box style={{ borderBottom: '2px solid black' }} p={2}>
              <Grid container justifyContent={'center'}>
                <Grid item xs={4} justifyContent={'center'} textAlign={'left'}>
                  <span >Login Id</span>
                </Grid>
                <Grid item xs={4} justifyContent={'center'} textAlign={'center'}>
                  <span>Debit Card</span>
                </Grid>
                <Grid item xs={4} justifyContent={'center'} textAlign={'right'}>
                  <span style={{ color: '#EB1165' }}>MPIN</span>
                </Grid>
              </Grid>
            </Box>
            <Box p={2}>
              <FormControl>
                <label>Select an option</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => this.setState({ mpinOption: e.target.value })}
                  style={{ justifyContent: 'center' }}
                  value={this.state.mpinOption}
                >
                  <FormControlLabel value={'custId'} control={<Radio style={{ color: '#AE275F' }} />} label="Customer Id" onClick={(e) => this.setState({ mpinOption: e.target.value })} />
                  <FormControlLabel value={'mobileNumber'} control={<Radio style={{ color: '#AE275F' }} />} label="Registered Mobile Number" onClick={(e) => this.setState({ mpinOption: e.target.value })} />
                </RadioGroup>
              </FormControl>
              <Grid item xs={2} sm={4} md={4}>
                {/* <div className="mb-3 margin-0-20"> */}
                <Box py={1}>
                  <label>{this.state.mpinOption === 'custId' ? 'Customer Id' : 'Mobile Number'}</label>
                  <TextField
                    id={this.state.mpinOption === 'custId' ? 'custId' : 'mobileNumber'}
                    type="text"
                    className="form-control"
                    placeholder={this.state.mpinOption === 'custId' ? 'Customer Id' : 'Mobile Number'}
                    value={this.state.mpinOption === 'custId' ? this.state.custId : this.state.mobileNumber}
                    onChange={(e) => this.handleChange(e.target)}
                    style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                  // maxlength='12'
                  // minlength='12'
                  />
                </Box>
                {/* </div> */}
                <Box py={1}>
                  <label>{this.state.mpinOption === 'custId' ? 'MPIN' : 'OTP'}</label>
                  <TextField
                    id={this.state.mpinOption === 'custId' ? 'mpin' : 'otp'}
                    type="number"
                    className="form-control"
                    placeholder={this.state.mpinOption === 'custId' ? 'mpin' : 'OTP'}
                    value={this.state.mpinOption === 'custId' ? this.state.mpin : this.state.otp}
                    onChange={(e) => this.handleChange(e.target)}
                    style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                    maxlength='10'
                  // minlength='12'
                  />
                </Box>
                <Box py={1}>
                  <button type="submit" className="btn btn-primary" style={{
                    background: '#AE275F',
                    height: '44px',
                    width: '150px',
                    borderRadius: '8px'
                  }}
                    disabled={this.state.mpinOption === 'custId' ? this.state.custId.length < 8 || this.state.mpin.length < 6 : this.state.mobileNumber.length < 8 || this.state.otp.length < 6}
                  >
                    <Link to='/loan-apply' style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
                  </button>
                </Box>
              </Grid>
            </Box>
          </Box>) : (<Box m={4} p={2} px={4} mx={16} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Box>
              <InputLabel id="demo-select-small">Select Bank Account</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.specialization}
                // label="Age"
                onChange={(e) => { this.setState({ specialization: e.target.value }) }}
                style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                placeholder={'Location'}
              >
                <MenuItem value={''}>Select</MenuItem>
                <MenuItem value={'SBI'}>SBI</MenuItem>
                <MenuItem value={'HDFC'}>HDFC</MenuItem>
                <MenuItem value={'Bank of baroda'}>Bank of baroda</MenuItem>
                <MenuItem value={'Yes Bank'}>Yes Bank</MenuItem>
                <MenuItem value={'Punjab National Bank'}>Punjab National Bank</MenuItem>
                <MenuItem value={'ICICI'}>ICICI</MenuItem>
              </Select>
            </Box>
            <Box py={1}>
              <label>Enter UPI ID</label>
              <TextField
                id='mpin'
                type="email"
                className="form-control"
                placeholder="Enter UPI ID"
                value={this.state.mpin}
                onChange={(e) => this.handleChange(e.target)}
                style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                InputProps={{
                  endAdornment:
                    (<InputAdornment position="end">
                      <SvgIconImage
                        src={redTick}
                        alt=""
                        font="large"
                        w='16'
                        h='16'
                      /><span style={{ color: '#AE275F' }}>verified</span>
                    </InputAdornment>)
                }}
              // maxlength='12'
              // minlength='12'
              />
            </Box>
            <Box py={1}>
              <button type="submit" className="btn btn-primary" style={{
                background: '#AE275F',
                height: '44px',
                width: '150px',
                borderRadius: '8px'
              }}>
                <Link to={this.state.isAxisBank === 'axisBank' ? '/loan-apply' : '/health-loan'} style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
              </button>
            </Box>
          </Box>)}
        </Box>
        <Box
          bgcolor={'#AE275F'}
          style={{
            height: '58px',
            position: 'fixed',
            bottom: '0px',
            width: '100%',
          }}>
        </Box>
      </Box >
    )
  }
}

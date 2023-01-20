import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import axiCareLogo from '../assets/axiCareLogo.svg'
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

export default class HealthInsurance extends Component {

  constructor(props) {
    super(props)
    this.state = { insuranceType: 'currentInsurance', insuranceName: '', policyNumber: '', fetchClicked: false }
  }



  render() {
    console.log(this.state.fetchClicked);

    return (
      <Box pb={4}>
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Hey&nbsp; </span><span style={{ fontSize: '40px', color: '#AE275F', fontWeight: '100' }}>Shanaya,</span> */}
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Welcome to</span> */}
        {/* <Box style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
          <span style={{ fontSize: '115px', fontWeight: '100', color: '#5BC6CC' }}>Axi</span><span style={{ fontSize: '115px', color: '#AE275F', fontWeight: '100' }}>Care</span>
        </Box> */}
        <Box pt={4} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Insurance</span>
        </Box>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8}>
          <Box p={4} pl={16} style={{ borderBottom: '2px solid black' }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => this.setState({ insuranceType: e.target.value })}
                style={{ justifyContent: 'center' }}
                value={this.state.insuranceType}
              >
                <FormControlLabel value={'currentInsurance'} style={{ paddingRight: '200px' }} control={<Radio style={{ color: '#AE275F' }} />} label="Current Insurance" onClick={(e) => this.setState({ insuranceType: e.target.value })} />
                <FormControlLabel value={'newInsurance'} control={<Radio style={{ color: '#AE275F' }} />} label="New Insurance" onClick={(e) => this.setState({ insuranceType: e.target.value })} />
              </RadioGroup>
            </FormControl>
          </Box>
          {this.state.insuranceType === 'currentInsurance' ? (<Box m={4} mx={16} >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }} p={4}>
                  <Box py={1}>
                    <label>Policy Number</label>
                    <TextField
                      id='policyNumber'
                      type="number"
                      className="form-control"
                      placeholder='Policy Number'
                      value={this.state.policyNumber}
                      onChange={(e) => this.setState({ fetchClicked: false, policyNumber: e.target.value })}
                      style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                    // maxlength='12'
                    // minlength='12'
                    />
                  </Box>
                  {/* </div> */}
                  <Box py={1}>
                    <label>Insurance Name</label>
                    <TextField
                      id='insuranceName'
                      type="text"
                      className="form-control"
                      placeholder='Insurance Name'
                      value={this.state.insuranceName}
                      onChange={(e) => this.setState({ fetchClicked: false, insuranceName: e.target.value })}
                      style={{ width: '100%', background: 'white', borderRadius: '8px', border: '1px solid #AE275F' }}
                    />
                  </Box>
                  <Box className="d-grid margin-0-20" style={{ marginTop: '20px' }} px={6}>
                    <button type="submit" className="btn btn-primary" style={{ background: '#AE275F', height: '50px' }} onClick={() => this.setState({ fetchClicked: true })} disabled={this.state.policyNumber.length < 8 || this.state.insuranceName.length < 8}>
                      Fetch
                    </button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                {!this.state.fetchClicked ? (<Box style={{ background: 'rgb(205 231 234)', borderRadius: '16px', height: '331px', textAlign: 'center' }} p={7}>
                  <SvgIconImage
                    src={axiCareLogo}
                    alt=""
                    h="200"
                    w="200"
                    style={{ width: 'fit-content', textAlign: 'center' }}
                  />
                </Box>) : (<Box style={{ background: 'rgb(205 231 234)', borderRadius: '16px', height: '331px', textAlign: 'center' }} p={4}>
                  <Box style={{ borderRadius: '8px' }} mb={4} bgcolor={'white'} px={4} py={2} textAlign={'center'}>
                    <label style={{ fontSize: '16px' }}>ABC Bank Logo</label><br /><br />
                    <span style={{ color: 'black' }}>Insurance Name - </span><span style={{ color: '#AE275F' }}>{this.state.insuranceName}</span><br />
                    <span>Current Insurance Coverage - </span><span style={{ color: '#AE275F' }}>500000</span><br />
                    <span>Utilized Amount - </span><span style={{ color: '#AE275F' }}>25000</span><br />
                    <span>Outstanding amount - </span><span style={{ color: '#AE275F' }}>50000</span><br />
                    <Box className="d-grid margin-0-20" style={{ marginTop: '20px' }} px={6} pt={4}>
                      <button type="submit" className="btn btn-primary" style={{ background: '#AE275F', height: '50px' }} onClick={() => this.setState({ fetchClicked: true })} disabled={this.state.policyNumber.length < 8 || this.state.insuranceName.length < 8}>
                        Add
                      </button>
                    </Box>

                  </Box>
                </Box>)}
              </Grid>
            </Grid>
            {/* <Box style={{ borderBottom: '2px solid black' }} p={2}>
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
            </Box> */}

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
                id='aadhaarNumber'
                type="email"
                className="form-control"
                placeholder="Enter UPI ID"
                value={this.state.mPin}
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
                Submit
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

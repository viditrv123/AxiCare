import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import profile from '../assets/Profile.png'
import chatFrame from '../assets/chatFrame.png'
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
import StarIcon from '@mui/icons-material/Star';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
export default class HealthLoan extends Component {

  constructor(props) {
    super(props)
    this.state = { isAxisBank: true }
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
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' mx={12} mt={4} mb={8}>
          <Box p={4}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ fontWeight: 'bold' }}
                value={this.state.isAxisBank}
              >
                <FormControlLabel value={true} control={<Radio style={{ color: '#AE275F' }} />} style={{ fontWeight: 'bold' }} label="Do you own an Axis Bank Account?" onClick={e => this.setState({ isAxisBank: e.target.value })} />
                <FormControlLabel value={false} control={<Radio style={{ color: '#AE275F' }} />} style={{ fontWeight: 'bold' }} label="Do you want to proceed with other bank account with UPI Id?" onClick={e => this.setState({ isAxisBank: e.target.value })} />
              </RadioGroup>
            </FormControl>
          </Box>
          {this.state.isAxisBank ? (<Box p={2}>

          </Box>) : (<Box></Box>)}
        </Box>
        <Box
          bgcolor={'#AE275F'}
          style={{
            height: '58px',
            position: 'fixed',
            bottom: '0px',
            width: '100%'
          }}>
        </Box>
      </Box >
    )
  }
}

import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import doctorConsult from '../assets/doctorConsult.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

export default class HomePage extends Component {
  render() {
    return (
      <Box>
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Hey&nbsp; </span><span style={{ fontSize: '40px', color: '#AE275F', fontWeight: '100' }}>Shanaya,</span> */}
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Welcome to</span> */}
        <Box style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
          <span style={{ fontSize: '115px', fontWeight: '100', color: '#5BC6CC' }}>Axi</span><span style={{ fontSize: '115px', color: '#AE275F', fontWeight: '100' }}>Care</span>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '30px', fontWeight: '100', color: '#5BC6CC' }}>Where we listen to and solve&nbsp;</span><span style={{ fontSize: '30px', color: '#AE275F', fontWeight: '100' }}> all your health-finance needs</span>
        </Box>
        <Box bgcolor={'#8cc7ca'} mt={8} ml={40} p={3} pt={2} style={{ borderRadius: '40px', display: 'inline-block', color: 'rgb(145 6 63)' }}>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>
            SERVICES
          </Box>
          <ol style={{ margin: 0 }}>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Your appointment books
              </Link>
            </li>
            <li>
              <Link to={'/doctor-search'} style={{ color: 'rgb(145 6 63)' }}>
                Doctor Search
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Hospital and Bed Search
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Medical History Record
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                SOS Help in Emergencies
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Instant Life Insurance
              </Link>
            </li>
            <li>
              <Link to={'/health-loan'} style={{ color: 'rgb(145 6 63)' }}>
                Instant Health Loan
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Health Tracker
              </Link>
            </li>
            <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(145 6 63)' }}>
                Online Pharmacy
              </Link>
            </li>
          </ol>
        </Box>
        <Box
          style={{
            position: 'fixed',
            bottom: '58px',
            right: '200px'
          }}>
          <SvgIconImage
            src={doctorConsult}
            alt=""
            font="large"
            w='530'
            h='410'
          />
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
      </Box>
    )
  }
}

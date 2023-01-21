import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import doctorConsult from '../assets/doctorConsult.png'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

export default class HomePage extends Component {
  componentDidMount() {
    const isAuth = sessionStorage.getItem('isAuth')
    console.log(isAuth);
  }
  render() {
    return (
      <Box>
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Hey&nbsp; </span><span style={{ fontSize: '40px', color: '#AE275F', fontWeight: '100' }}>Shanaya,</span> */}
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Welcome to</span> */}
        <Box style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
          <span style={{ fontSize: '115px', fontWeight: '100', color: '#5BC6CC' }}>Axi</span><span style={{ fontSize: '115px', color: '#AE275F', fontWeight: '100' }}>Care</span>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '30px', fontWeight: '100', color: '#5BC6CC' }}>We <span style={{ fontSize: '30px', fontWeight: '100', color: '#AE275F' }}>care</span> be</span><span style={{ fontSize: '30px', color: '#5BC6CC', fontWeight: '100' }}>cause you <span style={{ fontSize: '30px', fontWeight: '100', color: '#AE275F' }}>care!</span></span>
        </Box>
        <Box bgcolor={'#8cc7ca'} mt={8} ml={40} p={3} pt={2} style={{ borderRadius: '40px', display: 'inline-block', color: 'rgb(174, 39, 95)' }}>
          <Box p={1} style={{ display: 'flex', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>
            SERVICES
          </Box>
          <ol style={{ margin: 0 }}>
            {/* <li>
              <Link to={'/sign-up'} style={{ color: 'rgb(174, 39, 95)' }}>
                Your appointment books
              </Link>
            </li> */}
            <li>
              <Link to={'/doctor-search'} style={{ color: 'rgb(174, 39, 95)' }}>
                Doctor Search
              </Link>
            </li>
            <li>
              <Link to={'/hospital-search'} style={{ color: 'rgb(174, 39, 95)' }}>
                Hospital and Bed Search
              </Link>
            </li>
            <li>
              <Link to={'/'} style={{ color: 'rgb(174, 39, 95)' }}>
                Medical History Record
              </Link>
            </li>
            <li>
              <Link to={'/'} style={{ color: 'rgb(174, 39, 95)' }}>
                SOS Help in Emergencies
              </Link>
            </li>
            <li>
              <Link to={'/health-insurance'} style={{ color: 'rgb(174, 39, 95)' }}>
                Instant Life Insurance
              </Link>
            </li>
            <li>
              <Link to={'/health-loan'} style={{ color: 'rgb(174, 39, 95)' }}>
                Instant Health Loan
              </Link>
            </li>
            <li>
              <Link to={'/healthy-me'} style={{ color: 'rgb(174, 39, 95)' }}>
                Health Tracker
              </Link>
            </li>
            <li>
              <Link to={'/'} style={{ color: 'rgb(174, 39, 95)' }}>
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

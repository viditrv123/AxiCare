import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
import congratulations from '../assets/congratulations.svg'
import cloudUpload from '../assets/cloudUpload.png'
import Verified from '../assets/Verified.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default class LoanCongratulations extends Component {

  constructor(props) {
    super(props)
    this.state = { isAxisBank: 'axisBank', mpinOption: 'custId', loanAmount: 5000, loanTenure: 1, topUpLoan: 'No' }
  }

  calculateEMI = (principal, rateOfInterest, duration) => {
    // const calculatedEMI = 0
    // [P x R x (1+R)^N]/[(1+R)^N-1]
    const rate = rateOfInterest / 100
    const rateOfInterestPower = Math.pow(1 + rate, duration)
    const numerator = principal * rate * rateOfInterestPower
    const emi = (numerator / (rateOfInterestPower - 1))
    return emi.toFixed(2)
    // return calculatedEMI
  }

  render() {
    return (
      <Box pb={4}>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={6}>
          <Box py={2} mb={3} mx={16} style={{ display: 'flex', justifyContent: 'center', fontSize: '32px', background: 'white', borderRadius: '8px' }}>
            <SvgIconImage
              src={congratulations}
              alt=""
              h="42"
              w="42"
              style={{ width: 'fit-content', textAlign: 'center' }}
            />
            &nbsp;Congratulations, your loan has been disbursed
          </Box>
          <Box mt={15} textAlign={'center'}>
            <FormControl>
              <label>Do you want to avail Top Up Loan ?</label>
              <Grid container justifyContent={'center'} pb={4} pt={4}>
                <Grid item justifyContent={'center'} px={6}>
                  <Button style={{ width: '120px' }}> <Link to='/top-up-loan-landing' style={{ color: 'white', textDecoration: 'none' }}>Agree</Link></Button>
                </Grid>
                <Grid item justifyContent={'center'} px={6}>
                  <Button style={{ width: '120px' }}> <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Cancel</Link></Button>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Box >
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

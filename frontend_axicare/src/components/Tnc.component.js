import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SvgIconImage from '../utilities/svgImage'
import vKyc from '../assets/vKyc.png'
import vKycTick from '../assets/vkycTick.png'
import overView from '../assets/overView.png'
import todaysActivity from '../assets/todaysActivity.png'
import recommends from '../assets/recommends.png'
import coins from '../assets/coins.png'
import nutritionToday from '../assets/nutritionToday.png'
import output from '../assets/output.png'
import Discover from '../assets/Discover.png'
import congratulations from '../assets/congratulations.svg'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
export default class Tnc extends Component {

  constructor(props) {
    super(props)
    this.state = { termsAccepted: false }
  }

  render() {
    return (
      <Box pb={4}>
        <Box pt={2} mb={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Please agree the consent</span>
        </Box>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={4}>
          <Box mt={10} mx={32} bgcolor={'white'} style={{ borderRadius: '12px' }}>
            <Box style={{ textAlign: 'center' }}>
              <Box style={{ borderBottom: '1px solid black', fontSize: '22px' }} py={2}>
                Terms & Conditions
              </Box>
              <Box my={8} pb={6} px={6}>
                I understand that terms and declarations of the loan and hereby certify adherence to the repayment schedule.
                In case of non payment, AxiCare is Authorized to debit the funds or loan amount along with interest from the linked bank account.
              </Box>
            </Box>
            <Grid container justifyContent={'center'} pb={4}>
              <Grid item justifyContent={'center'} px={6}>
                <Button style={{ width: '120px' }}> <Link to='/loan-apply' style={{ color: 'white', textDecoration: 'none' }}>Agree</Link></Button>
              </Grid>
              <Grid item justifyContent={'center'} px={6}>
                <Button style={{ width: '120px' }}> <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Cancel</Link></Button>
              </Grid>
            </Grid>
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

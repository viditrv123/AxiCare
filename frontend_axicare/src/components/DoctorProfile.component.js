import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SvgIconImage from '../utilities/svgImage'
import vKyc from '../assets/vKyc.png'
import doctorProfile from '../assets/doctorForm.png'
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
export default class DoctorProfile extends Component {

  constructor(props) {
    super(props)
    this.state = { termsAccepted: false }
  }

  render() {
    return (
      <Box pb={4}>
        <Box style={{ borderRadius: '8px', textAlign: 'center' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={4}>
          <SvgIconImage
            src={doctorProfile}
            alt=""
            font="large"
            w='650'
            h='550'
          />
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

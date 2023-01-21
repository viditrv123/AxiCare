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
export default class HealthyMe extends Component {

  constructor(props) {
    super(props)
    this.state = { termsAccepted: false }
  }

  render() {
    return (
      <Box pb={4}>
        <Box pt={2} mb={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Lets Get Healthy</span>
        </Box>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={4}>
          <Grid container>
            <Grid item xs={4} px={3}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Overview</Box>
              <SvgIconImage
                src={overView}
                alt=""
                h="180"
                w="180"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Grid>
            <Grid item xs={3}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Today’s Activity</Box>
              <SvgIconImage
                src={todaysActivity}
                alt=""
                h="180"
                w="180"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Grid>
            <Grid item xs={5}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Output</Box>
              <SvgIconImage
                src={output}
                alt=""
                h="180"
                w="180"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />

            </Grid>
          </Grid>
          <Grid container pt={4}>
            <Grid item xs={4} px={3}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Recommended Community</Box>
              <SvgIconImage
                src={recommends}
                alt=""
                h="200"
                w="220"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Grid>
            <Grid item xs={3}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Coins Leaderboard</Box>
              <SvgIconImage
                src={coins}
                alt=""
                h="200"
                w="200"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Grid>
            <Grid item xs={4}>
              <Box pb={1} style={{ fontWeight: 'Bold' }}>Nutrition Today</Box>
              <SvgIconImage
                src={nutritionToday}
                alt=""
                h="200"
                w="200"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Grid>
          </Grid>
          <Box mx={3} textAlign={'left'} px={28} pt={2}>
            <Box pb={1} pl={1} style={{ fontWeight: 'Bold' }}>Discover</Box>
            <SvgIconImage
              src={Discover}
              alt=""
              h="84"
              w="200"
              style={{ width: 'fit-content', textAlign: 'center' }}
            />
          </Box >
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

import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SvgIconImage from '../utilities/svgImage'
import vKyc from '../assets/vKyc.png'
import vKycTick from '../assets/vkycTick.png'
import congratulations from '../assets/congratulations.svg'
import Checkbox from '@mui/material/Checkbox';
export default class TopUpCongratulations extends Component {

  constructor(props) {
    super(props)
    this.state = { termsAccepted: false }
  }

  render() {
    return (
      <Box pb={4}>
        <Box pt={2} mb={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Instant <span style={{ color: '#5BC6CC' }}>Axi</span><span style={{ color: '#AE275F' }}>Care</span>Top Up Loan</span>
        </Box>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={2}>
          <Box px={12} mx={16} pt={2} style={{ background: 'rgb(205 231 234)', borderRadius: '16px', textAlign: 'center' }}>
            <Box pb={2} style={{ fontSize: '32px', borderRadius: '8px' }}>
              <SvgIconImage
                src={congratulations}
                alt=""
                h="42"
                w="42"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
              &nbsp;Congratulations, your top up loan has been disbursed
            </Box>
            <SvgIconImage
              src={vKycTick}
              alt=""
              h="442"
              w="442"
              style={{ width: 'fit-content', textAlign: 'center' }}
            />

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

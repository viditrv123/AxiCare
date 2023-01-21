import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import SvgIconImage from '../utilities/svgImage'
import vKyc from '../assets/vKyc.png'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
export default class TopUpVideoKyc extends Component {

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

          <Box px={14} mx={16} pt={2} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Box style={{ textAlign: 'center' }} pb={2}>
              <label>Verification via video</label>
            </Box>
            <Box style={{ textAlign: 'center' }}>
              <SvgIconImage
                src={vKyc}
                alt=""
                h="442"
                w="442"
                style={{ width: 'fit-content', textAlign: 'center' }}
              />
            </Box>
            <Box px={16} py={2}>
              <Checkbox
                checked={this.state.termsAccepted}
                onChange={() => this.setState({ termsAccepted: !this.state.termsAccepted })}
              />I authorise AxiCare to record all my interaction
            </Box>
            <Box textAlign={'center'} py={2}>
              <button type="submit" className="btn btn-primary" style={{
                background: '#AE275F',
                height: '44px',
                width: '150px',
                borderRadius: '8px'
              }}
                disabled={!this.state.termsAccepted}>
                <Link to='/top-up-congrats' style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
              </button>
            </Box>
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

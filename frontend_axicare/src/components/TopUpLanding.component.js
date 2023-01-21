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

export default class TopUpLanding extends Component {

  constructor(props) {
    super(props)
    this.state = { isAxisBank: 'axisBank', mpinOption: 'custId', loanAmount: 5000, loanTenure: 1, topUpLoan: 'No' }
  }

  render() {
    return (
      <Box pb={4}>
        {/* <Box pt={4} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <SvgIconImage
            src={congratulations}
            alt=""
            h="100"
            w="100"
            style={{ width: 'fit-content', padding: '0px 168px', marginTop: '80px', textAlign: 'center' }}
          />
          Congratulations, your loan has been disbursed
        </Box> */}
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={6}>
          <Box m={4} p={2} px={14} mx={16} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Box pt={2} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
              <label style={{ fontSize: '16px', color: 'black' }}>Enter The following information to proceed with the top up loan</label>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid xs={6} width>
                  <Box style={{ width: '80%' }}>
                    <label>Validate Your Income</label>
                    <Box bgcolor='white' p={2} mb={2} style={{ borderRadius: '12px', textAlign: 'center' }}>
                      <SvgIconImage
                        src={cloudUpload}
                        alt=""
                        h="21"
                        w="24"
                        style={{ width: 'fit-content', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: '16px' }}>Upload ITR</span>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={6} width>
                  <Box style={{ width: '80%' }}>
                    <label>Validate KYC</label>
                    <Box bgcolor='white' p={2} mb={2} style={{ borderRadius: '12px', textAlign: 'center' }}>
                      <SvgIconImage
                        src={Verified}
                        alt=""
                        h="21"
                        w="24"
                        style={{ width: 'fit-content', textAlign: 'center' }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={6} width>
                  <Box style={{ width: '80%' }}>
                    <label>Validate Your Occupation</label>
                    <Box bgcolor='white' p={2} mb={2} style={{ borderRadius: '12px', textAlign: 'center' }}>
                      <SvgIconImage
                        src={cloudUpload}
                        alt=""
                        h="21"
                        w="24"
                        style={{ width: 'fit-content', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: '16px' }}>Upload Occupation Docs</span>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={6} width>
                  <Box style={{ width: '80%' }}>
                    <label>Upload Bank Statement</label>
                    <Box bgcolor='white' p={2} mb={2} style={{ borderRadius: '12px', textAlign: 'center' }}>
                      <SvgIconImage
                        src={cloudUpload}
                        alt=""
                        h="21"
                        w="24"
                        style={{ width: 'fit-content', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: '16px' }}>Upload Statement</span>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box textAlign={'center'} pb={1}>
              <button type="submit" className="btn btn-primary" style={{
                background: '#AE275F',
                height: '44px',
                width: '150px',
                borderRadius: '8px',
              }}
              >
                <Link to='/top-up-loan-apply' style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
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

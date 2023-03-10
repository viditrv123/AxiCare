import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import profile from '../assets/Profile.png'
import chatFrame from '../assets/chatFrame.png'
import redTick from '../assets/redTick.png'
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputAdornment from '@mui/material/InputAdornment';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#AE275F',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 14,
    background: 'unset',
    padding: 0,
    width: 62,
    height: 62,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#AE275F',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
export default class ApplyHealthLoan extends Component {

  constructor(props) {
    super(props)
    this.state = { isAxisBank: 'axisBank', mpinOption: 'custId', loanAmount: 10000, loanTenure: 1 }
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
        <Box pt={4} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>Instant <span style={{ color: '#5BC6CC' }}>Axi</span><span style={{ color: '#AE275F' }}>Care</span> Loan</span>
        </Box>
        <Box style={{ borderRadius: '8px' }} bgcolor='#8cc7ca' pb={4} mx={12} mt={4} mb={8} pt={6}>
          <Box px={14} mx={16} pt={2} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Grid container justifyContent={'center'}>
              <Grid xs={10} item><label >Select Loan Amount</label>
              </Grid>
              <Grid xs={2} justifyContent={'right'} style={{ padding: '2px 10px', background: 'white', borderRadius: '8px' }} item>???{this.state.loanAmount}
              </Grid>
            </Grid>
            <Box>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={this.state.loanAmount}
                onChange={e => this.setState({ loanAmount: e.target.value })}
                value={this.state.loanAmount}
                min={10000}
                max={50000}
              />
            </Box>
            <Grid container justifyContent={'center'}>
              <Grid xs={10} item><label>Select Loan Tenure</label>
              </Grid>
              <Grid xs={2} justifyContent={'right'} style={{ padding: '2px 10px', background: 'white', borderRadius: '8px' }} item>{this.state.loanTenure} Months
              </Grid>
            </Grid>
            <Box>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={this.state.loanTenure}
                onChange={e => this.setState({ loanTenure: e.target.value })}
                value={this.state.loanTenure}
                min={1}
                max={12}
              />
            </Box>
          </Box>
          <Box p={2} style={{ borderBottom: '2px solid black' }}>
          </Box>
          <Box m={4} p={2} px={14} mx={16} style={{ background: 'rgb(205 231 234)', borderRadius: '16px' }}>
            <Box pt={2} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: '100', color: 'black' }}>AxiCare Loan EMI Details</span>
            </Box>
            <Box style={{ borderRadius: '8px' }} mb={4} bgcolor={'white'} p={4} mx={15} textAlign={'center'}>
              <span style={{ color: 'black' }}>Monthly EMI - </span><span style={{ color: '#AE275F' }}>{this.calculateEMI(this.state.loanAmount, 18 / 12, this.state.loanTenure)}</span><br />
              <span>Principal Amount - </span><span style={{ color: '#AE275F' }}>{this.state.loanAmount}</span><br />
              <span>Rate of Interest - </span><span style={{ color: '#AE275F' }}>18%</span><br />
              <span>Total Interest - </span><span style={{ color: '#AE275F' }}>{parseFloat(this.calculateEMI(this.state.loanAmount, 18 / 12, this.state.loanTenure) * this.state.loanTenure).toFixed(2) - this.state.loanAmount}</span><br />
              <span>Total Amount - </span><span style={{ color: '#AE275F' }}>{parseFloat(this.calculateEMI(this.state.loanAmount, 18 / 12, this.state.loanTenure) * this.state.loanTenure).toFixed(2)}</span>
            </Box>
          </Box>
          <Box textAlign={'center'} pb={1}>
            <button type="submit" className="btn btn-primary" style={{
              background: '#AE275F',
              height: '44px',
              width: '150px',
              borderRadius: '8px'
            }}>
              <Link to='/loan-congratulations' style={{ color: 'white', textDecoration: 'none' }}>Submit</Link>
            </button>
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

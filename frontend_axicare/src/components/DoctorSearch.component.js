import React, { Component } from 'react'
import SvgIconImage from '../utilities/svgImage'
// import axiCareLogo from '../assets/axiCareLogo.svg'
import profile from '../assets/Profile.png'
import chatFrame from '../assets/chatFrame.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import DropdownComp from '../utilities/DropdownComp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import searchBar from '../assets/searchBar.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default class DoctorSearch extends Component {

  constructor(props) {
    super(props)
    this.state = { searchInput: '', location: '', specialization: '' }
  }



  doctorDataCards = [{
    image: '',
    name: 'Dr. Ankur Pandya',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Psychiatrist'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, delhi',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Vijay Shetty',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Physician'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, Lucknow',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Nirmala Shah',
    specializations: ['Cardiologist', 'MBBS', 'MD', 'Oncologist'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, mumbai',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  },
  {
    image: '',
    name: 'Dr. Vidul Sheth',
    specializations: ['Cardiologist', 'MBBS', 'MD'],
    clinicName: 'Care Clinic (Within 5km)',
    address: 'A-17, Krishna Nagar, kolkata',
    timing: 'Mon - Fri , 10am to 7pm',
    consultationFee: ['INR 1000 (Offline)', 'INR 800 (Online)'],
    ratings: 4.5
  }]

  cardData = (data) => (
    <Grid item xs={4}>
      <Card style={{ borderRadius: '16px', display: 'inline-block', backgroundColor: 'rgb(223 87 143)', width: '100%' }}>
        <CardContent>
          <Box pb={1}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <SvgIconImage
                  src={profile}
                  alt=""
                  font="large"
                  w='24'
                  h='24'
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" component="div" color='white' style={{ fontSize: '14px' }}>
                  {data.name}
                </Typography>
                <Typography variant="h5" component="div" color='#8cc7ca' style={{ fontSize: '11px' }}>
                  {data.specializations.map((ele, index) => `${ele}${index !== data.specializations.length - 1 ? ", " : ""}`)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <SvgIconImage
                  src={chatFrame}
                  alt=""
                  font="large"
                  w='24'
                  h='24'
                />
              </Grid>
            </Grid>
          </Box>
          <Box p={2} bgcolor="white" style={{ borderRadius: '16px' }}>
            <Typography variant="subtitle1" component="div" color='black' style={{ fontSize: '12px', fontWeight: 'bold' }}>Clinic Name - <span style={{ color: '#6a6969' }}>{data.clinicName}</span></Typography>
            <Typography variant="subtitle1" component="div" color='black' style={{ fontSize: '12px', fontWeight: 'bold' }}>Address - <span style={{ color: '#6a6969' }}>{data.address}</span></Typography>
            <Typography variant="subtitle1" component="div" color='black' style={{ fontSize: '12px', fontWeight: 'bold' }}>Timing - <span style={{ color: '#6a6969' }}>{data.timing}</span></Typography>
            <Grid container>
              <Grid xs={4} item>
                <Typography variant="subtitle1" component="div" color='black' style={{ fontSize: '12px', fontWeight: 'bold' }}>Consultation Fee -  </Typography></Grid>
              <Grid xs={8} item>
                <Typography variant="subtitle1" component="div" color='#6a6969' style={{ fontSize: '12px' }}>{data.consultationFee[0]}</Typography>
                <Typography variant="subtitle1" component="div" color='#6a6969' style={{ fontSize: '12px' }}>{data.consultationFee[1]}</Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle1" component="div" color='black' style={{ fontSize: '12px', fontWeight: 'bold' }}>Reviews -<span style={{ color: '#6a6969' }}> <Rating
              name="text-feedback"
              value={data.ratings}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              style={{ fontSize: '15px' }}
            />
            </span></Typography>
          </Box>
        </CardContent>
        <CardActions >
          <Grid container pl={1}>
            <Grid item xs={6}>
              <Button size="small" style={{ backgroundColor: 'white', color: 'white', padding: '14px', fontSize: '12px' }}>Online Appointment</Button>
            </Grid>
            <Grid item xs={6}>
              <Button size="small" style={{ backgroundColor: 'white', color: 'white', padding: '14px', fontSize: '12px' }}>Offline Appointment</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card ></Grid>
  )

  getFilteredDoctors = () => {
    const { location, specialization, searchInput } = this.state;
    return this.doctorDataCards.filter(e => e.address.toLocaleLowerCase().includes(location.toLocaleLowerCase()) && e.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) && (!specialization || e.specializations.includes(specialization)))
  }

  render() {


    return (
      <Box pb={4}>
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Hey&nbsp; </span><span style={{ fontSize: '40px', color: '#AE275F', fontWeight: '100' }}>Shanaya,</span> */}
        {/* <span style={{ fontSize: '30px', fontWeight: '100' }}>Welcome to</span> */}
        {/* <Box style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
          <span style={{ fontSize: '115px', fontWeight: '100', color: '#5BC6CC' }}>Axi</span><span style={{ fontSize: '115px', color: '#AE275F', fontWeight: '100' }}>Care</span>
        </Box> */}
        <Box pt={4} mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: '100', color: 'black' }}>Lets search for Doctors around you</span>
        </Box>
        <Box mx={10}>
          <Grid container spacing={1}>
            <Grid item xs={5} mx={3}>
              {/* <input
              type="text"
              className="form-control"
              placeholder="First name"
            /> */}
              <InputLabel id="demo-simple-select-label"
                placeholder={'Location'}
              > Search Doctor Name</InputLabel>
              <TextField id="outlined-search" type="search" style={{ width: '100%' }} value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} />
            </Grid>
            <Grid item xs={2}>
              <InputLabel id="demo-select-small">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.location}
                // label="Age"
                onChange={(e) => { this.setState({ location: e.target.value }) }}
                style={{ width: '100%' }}
                placeholder={'Location'}
              >
                <MenuItem value={''}>Select</MenuItem>
                <MenuItem value={'Location'}>Your Location</MenuItem>
                <MenuItem value={'Delhi'}>Delhi</MenuItem>
                <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                <MenuItem value={'Lucknow'}>Lucknow</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <Box ml={3}>
                <InputLabel id="demo-select-small">Specialization</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.specialization}
                  // label="Age"
                  onChange={(e) => { this.setState({ specialization: e.target.value }) }}
                  style={{ width: '100%' }}
                  placeholder={'Location'}
                >
                  <MenuItem value={''}>Select</MenuItem>
                  <MenuItem value={'Psychiatrist'}>Psychiatrist</MenuItem>
                  <MenuItem value={'Physician'}>Physician</MenuItem>
                  <MenuItem value={'Oncologist'}>Oncologist</MenuItem>
                  <MenuItem value={'Cardiologist'}>Cardiologist</MenuItem>
                  <MenuItem value={'MBBS'}>MBBS</MenuItem>
                  <MenuItem value={'MD'}>MD</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={2} justifyContent='right'>
              <Box ml={3} mt={3}>
                <SvgIconImage
                  src={searchBar}
                  alt=""
                  font="large"
                  w='50'
                  h='50'
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ borderRadius: '8px', boxShadow: '0px 4px 4px #AE275F' }} bgcolor='#8cc7ca' mx={12} mt={4} mb={8}>
          <Box p={3} style={{
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '33px',
            letterSpacing: '0em',
            textAlign: 'center'
          }}>
            Results
          </Box>
          <Box p={3}>
            <Grid container spacing={3}
              direction="row"
            >
              {this.getFilteredDoctors().map(card => { return this.cardData(card) })}
            </Grid>
          </Box>
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
      </Box >
    )
  }
}

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login.component'
import SignUp from './components/SignUp.component'
import SvgIconImage from './utilities/svgImage'
import axiCareLogo from './assets/axiCareLogo.svg'
import chatFrame from './assets/chatFrame.png'
import SOS from './assets/SOS.png'
import profileCircle from './assets/profileCircle.png'
import HomePage from './components/HomePage.component'
import DoctorSearch from './components/DoctorSearch.component'
import HealthLoan from './components/HealthLoan.component'
import HospitalSearch from './components/HospitalSearch.component'
import ApplyHealthLoan from './components/ApplyHealthLoan.component'
import LoanCongratulations from './components/LoanCongratulations.component'
import TopUpLoanApply from './components/TopUpLoanApply.component'
import TopUpVideoKyc from './components/TopUpVideoKyc.component'
import TopUpCongratulations from './components/TopUpCongratulations.component'
import HealthInsurance from './components/HealthInsurance.component'
import HealthyMe from './components/HealthyMe.component'
import Box from '@mui/material/Box';
import Tnc from './components/Tnc.component'
import CommunitySearch from './components/CommunitySearch.component'

function App() {

  const isAuth = sessionStorage.getItem('isAuth')
  console.log(isAuth);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: 'white', boxShadow: '0px 4px 4px #AE275F' }}>
          <div className="container">
            <div class="navbar-header">
              <Link className="navbar-brand" to={'/'}>
                <SvgIconImage
                  src={axiCareLogo}
                  alt=""
                  font="large"
                  w='70'
                  h='40'
                />
              </Link>
            </div>
            <ul class="nav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/doctor-search'}>
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/hospital-search'}>
                  Hospitals
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/health-loan'}>
                  Fino-Instant Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/health-insurance'}>
                  Fino-Insurance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/community-search'}>
                  Join Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/healthy-me'}>
                  Healthy Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link className="navbar-brand" to={'/'}>
                  <SvgIconImage
                    src={chatFrame}
                    alt=""
                    font="large"
                    w='24'
                    h='24'
                  />
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to={'/'}>
                  <SvgIconImage
                    src={SOS}
                    alt=""
                    font="large"
                    w='24'
                    h='24'
                  />
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to={'/sign-in'}>
                  <SvgIconImage
                    src={profileCircle}
                    alt=""
                    font="large"
                    w='24'
                    h='24'
                    style={{ border: '1px solid rgb(174, 39, 95)', borderRadius: '16px' }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="auth-wrapper" style={{ display: 'block', justifyContent: 'normal', paddingTop: '68px' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/doctor-search" element={<DoctorSearch />} />
            <Route path="/hospital-search" element={<HospitalSearch />} />
            <Route path="/health-loan" element={<HealthLoan />} />
            <Route path="/loan-apply" element={<ApplyHealthLoan />} />
            <Route path="/loan-congratulations" element={<LoanCongratulations />} />
            <Route path="/top-up-loan-apply" element={<TopUpLoanApply />} />
            <Route path="/top-up-kyc" element={<TopUpVideoKyc />} />
            <Route path="/top-up-congrats" element={<TopUpCongratulations />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/healthy-me" element={<HealthyMe />} />
            <Route path="/tnc" element={<Tnc />} />
            <Route path="/community-search" element={<CommunitySearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App

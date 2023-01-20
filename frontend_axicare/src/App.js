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

function App() {
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
                <Link className="nav-link" to={'/sign-in'}>
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Healthy Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Fino-Services
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
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/doctor-search" element={<DoctorSearch />} />
            <Route path="/health-loan" element={<HealthLoan />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App

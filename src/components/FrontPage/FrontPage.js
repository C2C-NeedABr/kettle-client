import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Home from '../Home/Home'
import './fronpage.css'

const unauthenticatedOptions = (
  <Fragment>
    <div className="jumbotron jumbotron-fluid">
      <div className="container frontPageHeading">
        <h1 className="display-4 frontPageTitle">kettle</h1>
        <p className="lead frontPageSubTitle anim-typewriter">Its tea time</p>
      </div>
    </div>
    <div className='authButton'>
      <Button variant='secondary' block href="#sign-up">Sign Up</Button>
      <Button variant='secondary' block href="#sign-in">Sign In</Button>
    </div>
  </Fragment>
)

const FrontPage = ({ user, msgAlert }) => (
  <div>
    <div className="ml-auto">
      { user ? <Route path='/home' render={() => (
        <Home user={user} msgAlert={msgAlert} />
      )} /> : unauthenticatedOptions }
    </div>
  </div>
)

export default FrontPage

import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from './../Header/Header';

const Home = props => {
  return (
    <div>
        <Header></Header>
        <h2>this is home components</h2>
        <Outlet></Outlet>
      
    </div>
  )
}

Home.propTypes = {

}

export default Home

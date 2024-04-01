import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const Home = props => {
  return (
    <div>
        <h2>this is home components</h2>
        <Outlet></Outlet>
      
    </div>
  )
}

Home.propTypes = {

}

export default Home

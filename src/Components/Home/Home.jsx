import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Home = props => {
  return (
    <div>
        <Header></Header>
        {/* <h2>this is home components</h2> */}
        <Outlet></Outlet>
        <Footer></Footer>
      
    </div>
  )
}

Home.propTypes = {

}

export default Home

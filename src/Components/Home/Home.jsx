import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Home = props => {
  const navigation = useNavigation();
  return (
    <div>
        <Header></Header>
        {
          navigation.state === 'loading' ? 
          <p>loading...</p>:
          <Outlet></Outlet>

        }
        {/* <h2>this is home components</h2> */}
        {/* <Outlet></Outlet> */}
        <Footer></Footer>
      
    </div>
  )
}

Home.propTypes = {

}

export default Home

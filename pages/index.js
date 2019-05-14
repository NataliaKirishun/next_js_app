import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js'
import './index.less'
import Logo from '../components/Logo/Logo'
import Search from '../components/Search/Search'
import EmptyResult from '../components/EmptyResult/EmptyResult'
import Footer from '../components/Footer/Footer'


 class Main extends Component {

 render(){
  return (
    <Layout>
      <Logo />
      <Search />
      <EmptyResult>Please, select your desired film...</EmptyResult>
      <Footer />
    </Layout>
  )
}
}

export default withRouter(Main);
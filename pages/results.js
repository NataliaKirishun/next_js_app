import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';
import Layout from '../components/MyLayout.js'
import './index.less'
import Logo from '../components/Logo/Logo'
import Search from '../components/Search/Search'
import EmptyResult from '../components/EmptyResult/EmptyResult'
import Footer from '../components/Footer/Footer'
import Film from '../components/Film/Film'

 class Results extends Component {

  static async getInitialProps ({query}) {
         // Get id from query
         console.log(query);
         var moviesPerPage=query.limit,
         offset=query.offset,
         term=query.search,
         searchBy=query.searchBy,
         sortBy=query.sortBy,
         sortOrder=query.sortOrder;
         var res = await axios.get(`http://react-cdp-api.herokuapp.com/movies?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`);
         return {
            data: res.data.data
         }
  }

 render(){

  return (
    <Layout>
      <Logo />
      <Search />
      {this.props.data.map((film) => <Film info={film} key={film.id} />)}
      <Footer />
    </Layout>
  )
}
}

export default withRouter(Results);
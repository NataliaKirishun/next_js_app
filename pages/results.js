import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios';
import Layout from '../components/MyLayout.js'
import './index.less'
import Logo from '../components/Logo/Logo'
import Search from '../components/Search/Search'
import EmptyResult from '../components/EmptyResult/EmptyResult'
import Footer from '../components/Footer/Footer'
const Film = dynamic(() => import('../components/Film/Film'));


 class Results extends Component {

  static async getInitialProps ({query}) {
         // Get id from query
         console.log(query);
         var term=query.search;
         var res = await axios.get(`http://react-cdp-api.herokuapp.com/movies?searchBy=title&sortBy=release_date&sortOrder=asc&search=${term}&offset=0&limit=30`);
         return {
            data: res.data.data
         }
  }

 render(){

  return (
    <Layout>
      <Logo />
      <Search />
      {this.props.data.map((film) => <Film info={film} key={film.id}/>)}
      <Footer />
    </Layout>
  )
}
}

export default withRouter(Results);
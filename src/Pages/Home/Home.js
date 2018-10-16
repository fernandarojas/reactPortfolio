import React, { Component, Fragment } from "react";
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (

      <Fragment>
        <Header />
        <Hero />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="intro">
          <h2 className="quote">The Only Difference Between <b>Screwing Around</b> And <b>Science</b> Is <i>Writing It Down</i></h2>
          <h3 className="cite"> - Adam Savage</h3>
        </section>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

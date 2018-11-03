import React, { Component } from 'react';
import '../stylesheets/home.css';

class Home extends Component {
  render() {
    return (
      <main>
        <header className="header">
          <div className="overlay"></div>
          <div className="header-text">
            <h1 id="fancy-cars-name" alt="Fancy Cars">Fancy Cars</h1>
          </div>
        </header>
        <section className="cars-listing-section">     </section>
      </main>
    );
  }
}

export default Home;

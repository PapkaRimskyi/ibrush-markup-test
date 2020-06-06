import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import Header from './blocks/header';
import Main from './blocks/main';
import Footer from './blocks/footer';

const rootContainer = document.getElementById('root');

function AppRoot() {
  return (
    <div className="root-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<AppRoot />, rootContainer);

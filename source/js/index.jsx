import React from 'react';
import ReactDOM from 'react-dom';
import './polyfills';

import '../sass/style.scss';

import Header from './blocks/site-blocks/header/header';
import Main from './blocks/site-blocks/main/main';
import Footer from './blocks/site-blocks/footer/footer';

const rootContainer = document.getElementById('root');

function Index() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(<Index />, rootContainer);

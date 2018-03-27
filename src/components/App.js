import React from 'react';
import Header from './Header'
import Slide from './Slide'
import Aside from './Aside'
import Main from './Main';
import Footer from './Footer'

const App = () => (
  <div>
    <Header />
    <Slide />
    <div className='container-fluid'>
      <div className='row'>
        <Aside />
        <Main />
      </div>
    </div>
    <Footer />
  </div>
)
export default App

//import { BrowserRouter, Routes, Route } from './Routes';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './components/Router'
import React from 'react';
import { 
  MDBBtn, 
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem 
} from 'mdb-react-ui-kit';

import HomePage from './pages/HomePage';

import BreakfastPage from './pages/BreakfastPage';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Router />
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breakfast" element={<BreakfastPage />} />
          <Route path="/lunch" element={<HomePage />} />
          <Route path="/snack" element={<HomePage />} />
          <Route path="/dinner" element={<HomePage />} />
          <Route path="/dessert" element={<HomePage />} />
          <Route path="/bread" element={<HomePage />} />
          <Route path="/drink" element={<HomePage />} />
          <Route path="/calculate" element={<HomePage />} />

          <Route element={<NotFoundPage />} />

        </Routes>
  </BrowserRouter>*/}
      {/*<Routes />*/}
      {/*<MDBContainer fluid>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://mdbootstrap.com/img/new/slides/041.jpg'
            alt='...'
          >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt='...'
        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
    <MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <img
            className='mb-4'
            src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
            style={{ width: 250, height: 90 }}
          />
          <h5 className='mb-3'>
            Thank you for using our product. We're glad you're with us.
          </h5>
          <p className='mb-3'>MDB Team</p>
          <MDBBtn
            tag='a'
            href='https://mdbootstrap.com/docs/standard/getting-started/'
            target='_blank'
            role='button'
          >
            Start MDB tutorial
          </MDBBtn>
        </div>
      </div>
  </MDBContainer>*/}
    </>
  );
}

export default App;

import React from 'react';
import { CloseButton } from 'react-bootstrap';

function PageNotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
          alt="Page Not Found"
        />
        <div id="info">
        <h3 className='ml-5'>
            This page could not be found{' '}
            <span style={{ color: 'red' }}>404 !</span> 
                <a href="./"> Return to Home Page </a>
          </h3>        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

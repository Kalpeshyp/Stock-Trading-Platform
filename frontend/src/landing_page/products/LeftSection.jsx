import React from 'react'

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="leftimage" />
        </div>
        <div className="col-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className='mx-3 p-5'>tryDemo <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore}>learnMore <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay} className='mx-3 p-3'>
              <img src={googlePlay} alt="googlePlay" />
            </a>
            <a href={appStore}>
              <img src={appStore} alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
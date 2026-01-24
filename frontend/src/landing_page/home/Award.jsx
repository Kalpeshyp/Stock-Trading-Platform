import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="public/media/images/largestBroker.svg"
            alt="Largest Broker"
          />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha Client contribute to over 15% of all volumes in
            india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>future and option</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks 7 IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov.Security</p>
                </li>
              </ul>
            </div>
            <img src="media\images\pressLogos.png" alt="" style={{width:"90%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

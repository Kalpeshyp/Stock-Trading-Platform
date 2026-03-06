import React from "react";
function Hero() {
  return (
    <div className="row text-center mt-5 p-5">
      <div className="text-center">
        <h1 className="fs-4">Charges</h1>
        <p className="fs-4 text-muted ">List of all charges and taxes</p>
      </div>
      <div className="col-4 p-4">
        <img src="./media/images/pricingEquity.svg" alt="pricingImage" />
        <h1 className="fs-4">Free equity delivery</h1>
        <p className="text-muted">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
          brokerage
        </p>
      </div>
      <div className="col-4 p-4">
        <img src="./media/images/intradayTrades.svg" alt="pricingImage" />
        <h1 className="fs-4">Intraday and F&O trades</h1>
        <p className="text-muted">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday
          trades across equity, currency, and commodity trades. Flat ₹20 on all
          option trades.
        </p>
      </div>
      <div className="col-4 p-4">
        <img src="./media/images/pricingEquity.svg" alt="pricingImage" />
        <h1 className="f-3">Free direct MF</h1>
        <p className="text-muted">
          All direct mutual fund investments are absolutely free — ₹ 0
          commissions & DP charges.
        </p>
      </div>
    </div>
  );
}

export default Hero;

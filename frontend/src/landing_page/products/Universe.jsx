import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h3>The Zerodha Universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4  p-3 text-center">
          <img src="./media/images/zerodhaFundhouse.png" alt="universeImage" />
          <p className="text-small text-muted p-3">
            Our asset management venture
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="./media/images/sensibullLogo.svg" alt="universeImage" />
          <p className="text-small text-muted p-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="./media/images/smallcaseLogo.png" alt="universeImage" />
          <p className="text-small text-muted p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="row">
          <div className="col-4  p-3 mt-3 text-center">
            <img
              src="./media/images/streakLogo.png"
              alt="universeImage"
              className="w-50 h-50"
            />
            <p className="text-small text-muted p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-3 text-center">
            <img src="./media/images/goldenpiLogo.png" alt="universeImage" />
            <p className="text-small text-muted p-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-3 text-center">
            <img
              src="./media/images/dittoLogo.png"
              alt="universeImage"
              className="w-50 h-25"
            />
            <p className="text-small text-muted p-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="text-center mt-4 mb-5">
          <Link to="/signup">
            <button className="btn btn-primary fs-5 px-4 py-2">
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;

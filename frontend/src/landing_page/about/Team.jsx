import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-2 mt-3">
          <h1 className="fs-2 text-center">People</h1>
        </div>
        <div className="row p-5 mt-3 text-muted fs-6">
          <div className="col-6 p-5 text-center">
            <img
              src="./media/images/nithinKamath.jpg"
              className="rounded-circle w-50"
              alt="team-image"
            />
            <h4 className="p-3 fs-4">Nithin Kamath</h4>
            <h6 className="p-1 text-muted">Founder, CEO</h6>
          </div>
          <div className="col-6 p-5">
            <p className="lh-lg p-1">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="lh-lg p-1">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="lh-lg p-1">Playing basketball is his zen.</p>
            <p className="lh-lg p-1">
              Connect on <a href="">Homepage</a>/<a href="">TradingQnA</a> /
              <a href="">Twitter</a>
            </p>
          </div>
        </div>
        <div className="row p-5 mt-3 mb-5 text-muted fs-6">
          <div className="col-4 p-3 text-center">
            <img
              src="./media/images/Nikhil.jpg"
              className="rounded-circle w-50"
              alt="team-image"
            />
            <h4 className="p-3 fs-4">Nikhil Kamath</h4>
            <h6 className="p-1 text-muted">Co-founder & CFO</h6>
          </div>
          <div className="col-4 p-3 text-center">
            <img
              src="./media/images/Kailash.jpg"
              className="rounded-circle w-50"
              alt="team-image"
            />
            <h4 className="p-3 fs-4">Dr. Kailash Nadh</h4>
            <h6 className="p-1 text-muted">CTO</h6>
          </div>
          <div className="col-4 p-3 text-center">
            <img
              src="./media/images/Venu.jpg"
              className="rounded-circle w-50"
              alt="team-image"
            />
            <h4 className="p-3 fs-4">Venu Madhav</h4>
            <h6 className="p-1 text-muted">COO</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

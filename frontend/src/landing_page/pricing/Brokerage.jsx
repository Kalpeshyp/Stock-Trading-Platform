import React from "react";

function Brokerage() {
  return (
    <div className="container p-4 border-top mb-5">
      <div className="row">
        <div className="col-8 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-4">Brokerage Calculator</h3>
          </a>
          <ul className="text-muted lh-lg">
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-4">List Of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

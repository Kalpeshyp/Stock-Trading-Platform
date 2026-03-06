import React from "react";

function Hero() {
  return (
    <div id="support" className="container-fluid bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h1 className="fw-bold">Support Portal</h1>
          
            <input
              type="text"
              className="form-control mt-3 p-3"
              placeholder="EG : How do i open my account,How do i activate F&Q..."
            />
          </div>

          <div className="col-md-6 text-md-end text-start mt-3 mt-md-0">
            <button className="btn btn-light text-primary fw-bold">
              My Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

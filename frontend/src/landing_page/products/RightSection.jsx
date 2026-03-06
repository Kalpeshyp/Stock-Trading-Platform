import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="">{productDescription}</p>
          <div>
            <a href={learnMore} className="p-2">
              learnMore <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="rightImage"  className="p-5"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

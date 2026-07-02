import React from "react";

const Rightsection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  learnMoreLink,
}) => {
  return (
    <div className="container mt-3">
      <div className="row mt-5 align-items-center">
        <div className="col-1"></div>

        <div className="col-4">
          <h1 className="fs-3 mb-3">{productName}</h1>

          <p>{productDescription}</p>

          <div>
            {learnMoreLink && (
              <a
                href={learnMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {learnMore}{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Rightsection;
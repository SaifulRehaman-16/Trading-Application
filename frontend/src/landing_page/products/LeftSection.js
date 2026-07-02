import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  tryDemoLink,
  learnMore,
  googleplay,
  appstore,
}) => {
  return (
    <div className="container mt-5 p-4">
      <div className="row mt-5 align-items-center">
        <div className="col-1"></div>

        <div className="col-5">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>

        <div className="col-2"></div>

        <div className="col-4">
          <h1 className="fs-3 mb-3">{productName}</h1>
          <p>{productDescription}</p>

          <div>
            {tryDemoLink && (
              <a
                href={tryDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {tryDemo}{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  marginLeft: "50px",
                }}
              >
                Learn More{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>

          <div className="mt-5">
            {googleplay && (
              <a
                href={googleplay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                />
              </a>
            )}

            {appstore && (
              <a
                href={appstore}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "50px" }}
              >
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
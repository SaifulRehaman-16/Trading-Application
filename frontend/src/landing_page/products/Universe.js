import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center fs-5 text-muted">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href="https://zerodha.tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          Zerodha.tech
        </a>{" "}
        blog.
      </h3>

      <div className="row text-center mt-5 p-5">
        <h2 className="fs-4 text-muted">The Zerodha Universe</h2>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-3 p-3 text-center">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
          />
          <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-3 p-3 text-center">
          <img
            style={{ width: "50%" }}
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
          />
          <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-3 p-3 text-center">
          <img
            style={{ width: "50%" }}
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
          />
          <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-2"></div>

        <div className="row mt-3">
          <div className="col-2"></div>

          <div className="col-3 p-3 text-center">
            <img
              style={{ width: "40%" }}
              src="media/images/streakLogo.png"
              alt="Streak"
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-3 p-3 text-center">
            <img
              style={{ width: "50%" }}
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>

          <div className="col-3 p-3 text-center">
            <img
              style={{ width: "30%" }}
              src="media/images/dittoLogo.png"
              alt="Ditto"
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>

          <div className="col-2"></div>
        </div>
      </div>

      <div className="text-center mt-3">
        <button
          className="p-2 rounded-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
import React from "react";

const Stats = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className="mb-4 fs-2">Trust with Confidence</h1>

          <div>
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div>
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div>
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            style={{ width: "100%" }}
          />

          <div className="text-center mt-4">
            <a
              href="https://zerodha.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore Our Products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href="https://kite-demo.zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Try Kite Demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
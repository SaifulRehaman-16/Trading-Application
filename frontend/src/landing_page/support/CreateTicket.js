import React from "react";

const CreateTicket = () => {
  const handleClick = (topic) => {
    alert(`${topic} page coming soon!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

      <div className="row">
        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-solid fa-circle-plus mx-2"></i>
            Account Opening
          </h1>

          <button className="btn btn-link p-0 d-block text-start" onClick={() => handleClick("Resident Individual")}>Resident individual</button>
          <button className="btn btn-link p-0 d-block text-start" onClick={() => handleClick("Minor")}>Minor</button>
          <button className="btn btn-link p-0 d-block text-start" onClick={() => handleClick("NRI")}>Non Resident Indian (NRI)</button>
          <button className="btn btn-link p-0 d-block text-start" onClick={() => handleClick("Company")}>Company, Partnership, HUF and LLP</button>
          <button className="btn btn-link p-0 d-block text-start" onClick={() => handleClick("Glossary")}>Glossary</button>
        </div>

        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-solid fa-circle-user mx-2"></i>
            Your Zerodha Account
          </h1>

          <button className="btn btn-link p-0 d-block text-start">Your Profile</button>
          <button className="btn btn-link p-0 d-block text-start">Account modification</button>
          <button className="btn btn-link p-0 d-block text-start">Client Master Report (CMR)</button>
          <button className="btn btn-link p-0 d-block text-start">Nomination</button>
          <button className="btn btn-link p-0 d-block text-start">Transfer and conversion of securities</button>
        </div>

        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-solid fa-arrow-trend-up mx-2"></i>
            Kite
          </h1>

          <button className="btn btn-link p-0 d-block text-start">IPO</button>
          <button className="btn btn-link p-0 d-block text-start">Trading FAQs</button>
          <button className="btn btn-link p-0 d-block text-start">Margin Trading Facility (MTF)</button>
          <button className="btn btn-link p-0 d-block text-start">Charts and orders</button>
          <button className="btn btn-link p-0 d-block text-start">Alerts and Nudges</button>
          <button className="btn btn-link p-0 d-block text-start">General</button>
        </div>
      </div>

      <div className="row">
        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-solid fa-money-bill mx-2"></i>
            Funds
          </h1>

          <button className="btn btn-link p-0 d-block text-start">Add money</button>
          <button className="btn btn-link p-0 d-block text-start">Withdraw money</button>
          <button className="btn btn-link p-0 d-block text-start">Add bank accounts</button>
          <button className="btn btn-link p-0 d-block text-start">eMandates</button>
        </div>

        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-solid fa-magnifying-glass mx-2"></i>
            Console
          </h1>

          <button className="btn btn-link p-0 d-block text-start">Portfolio</button>
          <button className="btn btn-link p-0 d-block text-start">Corporate actions</button>
          <button className="btn btn-link p-0 d-block text-start">Funds statement</button>
          <button className="btn btn-link p-0 d-block text-start">Reports</button>
          <button className="btn btn-link p-0 d-block text-start">Profile</button>
          <button className="btn btn-link p-0 d-block text-start">Segments</button>
        </div>

        <div className="col-4 p-5">
          <h1 className="fs-4 mb-3">
            <i className="fa-regular fa-circle mx-2"></i>
            Coin
          </h1>

          <button className="btn btn-link p-0 d-block text-start">Mutual funds</button>
          <button className="btn btn-link p-0 d-block text-start">National Pension Scheme (NPS)</button>
          <button className="btn btn-link p-0 d-block text-start">Fixed Deposit (FD)</button>
          <button className="btn btn-link p-0 d-block text-start">Features on Coin</button>
          <button className="btn btn-link p-0 d-block text-start">Payments and Orders</button>
          <button className="btn btn-link p-0 d-block text-start">General</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
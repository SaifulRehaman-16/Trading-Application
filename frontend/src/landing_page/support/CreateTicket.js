import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container mt-5 '>
      <h1 className='fs-2'>To create a ticket,select relevent topic</h1>
      <div className='row '>
        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-solid fa-circle-plus mx-2"></i>Account Opening</h1>
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Resident individual</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Minor</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Non Resident Indian (NRI)</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Glossary</a><br />


        </div>
        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-solid fa-circle-user mx-2"></i> Your Zerodha Account </h1>
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Your Profile</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Account modification</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Client Master Report (CMR) and Depository Participant </a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Nomination</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Transfer and conversion of securities</a><br />
        </div>
        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-solid fa-arrow-trend-up mx-2"></i> Kite </h1>
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>IPO</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Trading FAQs</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Margin Trading Facility (MTF) and Margins </a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Charts and orders</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Alerts and Nudges</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>General</a><br />
        </div>
      </div>
     



      <div className='row '>
        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-solid fa-money-bill mx-2"></i>Funds</h1>
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}> Add money</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Withdraw money</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Add bank accounts</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>eMandates</a><br />


        </div>
        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-solid fa-magnifying-glass mx-2"></i>Console </h1>
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}> Portfolio</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Corporate actions</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Funds statement</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Reports</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Profile</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Segments</a><br />
        </div>

        <div className='col-4 p-5'>
          <h1 className='fs-4 mb-3'><i class="fa-regular fa-circle mx-2"></i> Coin </h1>
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Mutual funds</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>National Pension Scheme (NPS)</a><br />
          <a href='' style={{ textDecoration: "none" ,lineHeight:"2"}}>Fixed Deposit (FD)</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Features on Coin</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>Payments and Orders</a><br />
          <a href='' style={{ textDecoration: "none",lineHeight:"2" }}>General</a><br />
        </div>
      </div>


    </div>
  )
}

export default CreateTicket

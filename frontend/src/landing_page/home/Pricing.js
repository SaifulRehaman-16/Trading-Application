import React from 'react'

const Pricing = () => {
  return (
    <div className='container mb-5 '>
        <div className='row'>
            <div className='col-4'>
                <h1 className=' mb-3 fs-2'>Unbeatable pricing</h1>
                <p className=' mb-3 text-muted'>
                    We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden changes.
                </p>

                <a href='' style={{textDecoration:'none'}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-5'>
                <div className='row  text-center'>
                    <div className='col-6 p-3 border '>
                        <h1 className='mb-3 mt-3'>₹0</h1>
                        <p>Free equity derivery and <br/> mutual funds</p>

                    </div>
                    <div className='col-6 p-3 border'>
                    <h1 className='mb-3 mt-3'>₹20</h1>
                    <p>Intraday and F&O</p>

                    </div>
                </div>
            </div>

        </div>
   
    </div>
  )
}

export default Pricing

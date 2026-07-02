import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src='media/images/Homehero.png' alt='Hero image' className='mb-5' />
            <h1 className="mt-5">Invest in Every Thing</h1>
            <p> Online Platform to invest in stocks, derivates, Mutual Funds and more</p>
            <button className='p-2 rounded-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto", }}>Signup Now</button>
        </div>
     
    </div>
  )
}

export default Hero

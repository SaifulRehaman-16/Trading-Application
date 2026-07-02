import React from 'react'

const Hero = () => {
  return (
   
    <nav className='bg-light'>
    <div className='container p-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='text-muted'>Support Portal</h1>
        <button className=' rounded-2 btn btn-primary fs-5 ' style={{ width: "20%" }}>My tickets</button>
      </div>
      <div className=' mt-4 border d-flex align-items-center px-3 '>
        <i class="fa-solid fa-magnifying-glass mx-2"></i>
      
          <input  placeholder='Eg: How do I open my account,How do i activate F&O... ' style={{ height: "55px",border:"none",width:"100%",outline: "none",
  boxShadow: "none", }} />
       
      </div>

    </div>
    </nav>
  )
}

export default Hero

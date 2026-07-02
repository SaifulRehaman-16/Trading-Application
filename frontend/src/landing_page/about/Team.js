import React from 'react'

const Team = () => {
  return (
    <div>
   <div className='container'>
     <div className='row p-5 mt-5 mb-5 border-top  text-center'>
       <h1 className='fs-3'>People</h1>
     </div>
     <div className='row   text-muted'style={{lineHeight:"1.8"}}>
      <div className='col-1'></div>
      <div className='col-5  text-center'>
        <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%" ,width:"55%"}}/>
        <h5 className=' mt-4 mb-4'>Nithin Kamath</h5>
        <h6 className='text-muted'>Founder, CEO</h6>
     </div>
      <div className='col-5  ' >
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

      </div>
      <div className='col-1'></div>

     </div>
     <div className='row   mt-5 text-muted'style={{lineHeight:"1.8"}}>
      <div className='col-1'></div>
      <div className='col-5  text-center'>
         <img src="media/images/saiful.jpeg" style={{borderRadius:"100%" ,width:"55%"}}/>
        <h5 className=' mt-4 mb-4'>Saiful Rehaman</h5>
        <h6 className='text-muted'>Developer</h6>
     </div>
      <div className='col-5 ' >
        <p>Mohammad Saiful Rehaman Developed Zerodha with the vision of making investing simple, transparent, and accessible for the next generation of investors.</p>

<p>As a Computer Science student and technology enthusiast, he combines his passion for software development and financial markets to build modern tools that help users learn, invest, and grow their wealth confidently.</p>

<p>His interests include full-stack development, stock market analysis, open-source contributions, and building impactful products.</p>

<p>Connect on:  <a style={{textDecoration:"none"}}href='https://github.com/SaifulRehaman-16'>GitHub</a> / <a style={{textDecoration:"none"}}href='https://www.linkedin.com/in/saiful-rehaman-793781323/'>LinkedIn</a> / <a style={{textDecoration:"none"}}href='https://x.com/saiful_rehaman'> Twitter</a></p>
      </div>
      <div className='col-1'></div>

     </div>
      
    </div>
    </div>
  )
}

export default Team

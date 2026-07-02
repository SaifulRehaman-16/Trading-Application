import React from 'react'

const LeftSection = ({ imageUrl, productName, productDescription, tryDemo, learnMore, googleplay, appstore }) => {
  return (
    <div className='container mt-5 p-4 '>
      <div className='row mt-5 align-items-center'>
        <div className='col-1'></div>
        <div className='col-5'>
          <img src={imageUrl}/>

        </div>
           <div className='col-2'></div>
        <div className='col-4 '>
          <h1 className='fs-3 mb-3'>{productName}</h1>
          <p>{productDescription}</p>
         <div>
          <a style={{textDecoration:"none"}} href=''>{tryDemo} <i class="fa-solid fa-arrow-right-long"></i></a>
          <a  style={{textDecoration:"none",marginLeft:"50px"}} href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
         </div>

         <div className="mt-5">
          <a href={googleplay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a style= {{marginLeft:"50px"}} href={appstore}><img src="media/images/appstoreBadge.svg"/></a>
         </div>
          
        </div>
    
      </div>


    </div>
  )
}

export default LeftSection

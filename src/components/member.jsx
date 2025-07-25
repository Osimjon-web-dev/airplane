import React from 'react'
import Ship from './Ship'

export default function Member() {
  return (
    <div className='member'>
<h1 className='fw-bold fs-1 d-flex justify-content-center mt-5 mb-5' >Enjoy our membership</h1>
<div className="container">
  <div className="row d-flex-justify-content-between g-3 d-lg-flex flex-wrap ">
   
      <Ship pop="Business" soqqa="$480/month"/>
      <Ship pop="Popular" soqqa="$250/month"/>
      <Ship pop="Elite" soqqa="$680/month"/>

  </div>
</div>
    </div>
  )
}

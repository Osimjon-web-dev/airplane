import React from 'react'

export default function Ship({pop, soqqa}) {
  return (
     <div className="col-lg-4 col-12 popular align-items-center rounded-4">
      <h3 className='fw-bold mt-4'>{pop}</h3>
      <h3 className='text-secondary mt-4'>What You’ll Get</h3>
      <p className='d-flex  align-items-center gap-3'><img src="./img/tick.png" alt="" />
      <p  className='mt-3'>One-time initiation fee $0</p>
      </p>
         <p className='d-flex po align-items-center gap-3'><img src="./img/tick.png" alt="" />
      <p  className='mt-3'>Deposit $50k</p>
      </p>
         <p className='d-flex po align-items-center gap-3'><img src="./img/tick.png" alt="" />
      <p  className='mt-3'>Pricing / rates  Dynamic</p>
      </p>
         <p className='d-flex po align-items-center gap-3'><img src="./img/tick.png" alt="" />
      <p  className='mt-3'>Priority fleet access Yes</p>
      </p>
         <p className='d-flex po align-items-center gap-3'><img src="./img/tick.png" alt="" />
      <p  className='mt-3'>Guaranteed fleet access No</p>
      </p>
      <p className='chizu'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
      <h3 className='mt-5 mb-5'>{soqqa}</h3>
      <button className='butbut py-3 px-5'>Choose</button>
    </div>
  )
}

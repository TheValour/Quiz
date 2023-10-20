import React from 'react'

export default function Hero() {
  return (
    <div className='flex justify-evenly bg-yellow-200 w-screen h-72 p-8'>
        <div className='w-5/12 h-5/6'>
          <h2 className='text-2xl mb-3 font-bold'>Are you Ready!</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quibusdam quam quaerat architecto commodi nihil natus esse labore maxime iusto earum eos repellendus consectetur perferendis omnis aut consequatur, dignissimos quod!
        </div>

        <div className='flex justify-center w-5/12 h-5/6'><img src="./photos/heroSection.jpg" alt="img" /></div>
    </div>
  )
}

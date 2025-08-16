import { Button } from '@/components/ui/button'
import React from 'react'
import { MdLocalOffer } from "react-icons/md";

function Pricing({carDetail}) {
  return (
    <div className='p-10 rounded-xl border shadow-md'>
        <h2>Our Price</h2>
        <h2 className='font-bold text-4xl'>${carDetail?.sellingPrice}</h2>

        <Button className='w-full text-white mt-7 bg-black' size='lg'><MdLocalOffer className='text-white text-lg mr-2'/>Make an Offer Price</Button>
    </div>
  )
}

export default Pricing
import React from 'react'
import Search from './Search'

function Hero() {
    return (
        <div>
            <div className='flex flex-col items-center p-10 py-30 gap-6 h-[750px] w-full bg-[#5d5c6471]'>
                
                <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
                <Search/>

               <img src='/mclaren.png' alt="Car" className="w-250 h-auto mt-2" />

            </div>
        </div>
    )
}

export default Hero
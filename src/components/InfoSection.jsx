import React from 'react'
import { Link } from 'react-router-dom'

function InfoSection() {
  return (
    <section className="bg-[#5d5c6471]">
      <div className="">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">

          {/* Image Section */}
          <div className="w-full">
            <img
              src="https://www.hdwallpapers.in/download/bentley_mulliner_batur_2023_light_grey_car_4k_5k_hd_cars-HD.jpg"
              className="w-full h-[420px] object-cover shadow-xl"
              alt="Luxury car"
            />
          </div>

          {/* Text Content */}
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
                Find Your Dream Car With Confidence
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Explore a wide range of premium cars from trusted sellers. Whether you’re looking for a brand-new luxury ride or a well-maintained pre-owned vehicle, we’ve got you covered.
              </p>
              <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className="mt-8 px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-red-900 transition">
                  Browse Cars
                </button>
              </Link>

            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default InfoSection

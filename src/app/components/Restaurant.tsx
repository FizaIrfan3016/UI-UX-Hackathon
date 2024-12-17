import React from 'react'
import Image from 'next/image'


const RestaurantProcess = () => {
  return (
    <div className="relative w-full md:w-[100vw] md:-ml-[10vw]">
      <section className="relative w-full">
        {/* Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Restraind creative Process.png" 
            alt="Process background" 
            fill
            className="object-cover"
            priority
          />
          {/*overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        
      </section>
    </div>
  )
}

export default RestaurantProcess 
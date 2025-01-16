import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Chefs = () => {
  const chefs = [
    {
      image: '/Chef card.png',
      name: 'D.Estwood',
      role: 'Chief Chef',
    },
    {
      image: '/Card 2.png',
      name: 'D.Scoriesh',
      role: 'Assistant Chef',
    },
    {
      image: '/Card 3.png',
      name: 'M.William',
      role: 'Advertising Chef',
    },
    {
      image: '/Card 4.png',
      name: 'W.Readfroad',
      role: 'Chef',
    },
  ]

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      
      
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-2">
            Chefs
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            Me<span className="text-white">et Our Chef</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {chefs.map((chef, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white from-black/80 to-transparent p-6">
                <h3 className="text-black text-2xl font-bold mb-1">
                  {chef.name}
                </h3>
                <p className="text-black text-lg">
                  {chef.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center">
          <button className="px-8 py-3 border border-[#FF9F0D] text-[#FF9F0D] rounded-full bg-transparent hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300">
           <Link href='/about'> See More </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Chefs
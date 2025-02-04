import React from 'react'
import Image from 'next/image'



const FoodCategory = () => {
  const foodItems = [
    {
      id: 1,
      image: '/food1.png',
      title: 'Healthy food',
      discount: 'Save 30%',
      
      
    },
    {
      id: 2,
      image: '/food2.png',
      title:'Fast food',
      
    },
    {
      id: 3,
      image: '/food3.png',
      title:'Dessert',
      
    },
    {
      id: 4,
      image: '/food4.png',
      title:'Salads',
    },
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-2">
            Food Category
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            Ch<span className="text-[#ffffff]">oose Food Items</span>
          </h2>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <div key={item.id} className="relative group cursor-pointer">
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                
                <Image
                  src= {item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Discount Tag */}
                {item.discount && (
                  <div className="absolute top-4 left-4 bg-white text-[#FF9F0D] px-4 py-1 rounded">
                    {item.discount}
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white bg-[#FF9F0D] text-xl font-semibold text-center rounded-full">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategory 
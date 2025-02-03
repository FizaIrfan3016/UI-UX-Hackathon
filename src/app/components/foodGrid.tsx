
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Foods } from '../../../types/food';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { two } from '@/sanity/lib/queries';
import Link from 'next/link';

const FoodGrid=()=>{

     const [menu, setMenu] = useState<Foods[]>([])
      useEffect (()=>{
             async function fetchMenu(){
              const fetchedMenu : Foods[] = await client.fetch(two)
              setMenu(fetchedMenu)
             }
             fetchMenu()
      },[])

     return(
        
          <div className="container mx-auto px-4 py-8">
             <h2 className="text-2xl font-bold mb-6">Similar menu</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent">
                {menu.map((menu, index) => (
                      <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer">
                           <Link href={`/food/${menu.slug.current}`}>
                           <div className='relative'>
                               {menu.image && (
                                                     <Image
                                                       src={urlFor(menu.image).url()}
                                                       alt={menu.name}
                                                       width={400}
                                                       height={300}
                                                       className="object-cover  transition-transform duration-300 group-hover:scale-110"
                                                     />
                                                   )}

                           </div>
                           <div className="p-4">
                           <h3 className="text-lg font-semibold">{menu.name}</h3>
                           <div className="flex items-center mt-2">
                <span className="text-lg font-bold text-orange-500">${menu.price.toFixed(2)}</span>
                {menu.originalPrice && (
                  <span className="text-gray-500 line-through ml-2">${menu.originalPrice.toFixed(2)}</span>
                )}
              </div>
                            </div>
                           </Link>
                      </div>
                ))}

             </div>
          </div>
          
        
       

      

     )
}

export default FoodGrid;



import React from 'react';
import Image from 'next/image';
import PageHeader from '../components/Pageheader';
import Link from 'next/link';



const MenuSection = ({ title, image }: { title: string; image: string }) => {
  return (
    
           
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
        {/* Menu Content */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b border-gray-200 pb-1 text-center">
            {title}
          </h2>
          <Link href='/shop'>
          <ul className="space-y-3 pt-4">
            <li className="flex justify-between items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800 hover:text-yellow-500">Pizza</h3>
                <p className="text-sm text-gray-600 mt-1">Crispy fried chicken bites served with dipping sauce.</p>
                <p className="text-xs text-gray-500 mt-1">500 CAL</p>
              </div>
              <span className="text-[#FF9F0D] font-bold text-lg">$12</span>
            </li>
            <li className="flex justify-between items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800  hover:text-yellow-500">Limka</h3>
                <p className="text-sm text-gray-600 mt-1">Fruit limkas with delicious flavors.</p>
                <p className="text-xs text-gray-500 mt-1">20 CAL</p>
              </div>
              <span className="text-[#FF9F0D] font-bold text-lg">$21</span>
            </li>
            <li className="flex justify-between items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800  hover:text-yellow-500">Chicken Bites with Marconi</h3>
                <p className="text-sm text-gray-600 mt-1">Chicken tangy bites with cheesy macroni.</p>
                <p className="text-xs text-gray-500 mt-1">560 CAL</p>
              </div>
              <span className="text-[#FF9F0D] font-bold text-lg">$45</span>
            </li>
            <li className="flex justify-between items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800  hover:text-yellow-500">Double Decker Burger</h3>
                <p className="text-sm text-gray-600 mt-1">Mouth melted cheeseburger with delicious flavors.</p>
                <p className="text-xs text-gray-500 mt-1">560 CAL</p>
              </div>
              <span className="text-[#FF9F0D] font-bold text-lg">$38</span>
            </li>
            <li className="flex justify-between items-center gap-2 p-1.5 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800  hover:text-yellow-500">Country Burger</h3>
                <p className="text-sm text-gray-600 mt-1">Cheesy meat burger with delicious taste.</p>
                <p className="text-xs text-gray-500 mt-1">560 CAL</p>
              </div>
              <span className="text-[#FF9F0D] font-bold text-lg">$28</span>
            </li>
          </ul>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-md">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Menu() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader title="Our Menu" currentPage="Menu" />

      {/* Menu Sections */}
      <div className="space-y-16">
        <MenuSection title="Starter Menu" image="/menu1.png" />
        <MenuSection title="Main Course" image="/menu2.png" />
        <MenuSection title="Dessert" image="/menu3.png" />
        <MenuSection title="Drinks" image="/menu4.png" />
      </div>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-base md:text-lg text-[#FF9F0D]">Partners & Clients</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
            We work with the best people
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
            <Image src="/p1.png" alt="Partner 1" width={100} height={50} />
            <Image src="/p2.png" alt="Partner 2" width={100} height={50} />
            <Image src="/p3.png" alt="Partner 3" width={100} height={50} />
            <Image src="/p4.png" alt="Partner 4" width={100} height={50} />
            <Image src="/p5.png" alt="Partner 5" width={100} height={50} />
            <Image src="/p6.png" alt="Partner 6" width={100} height={50} />
          </div>
        </div>
      </section>
    </div>
    
  );
}

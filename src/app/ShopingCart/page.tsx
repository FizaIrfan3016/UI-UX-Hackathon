import React from 'react';
import Image from "next/image";
import PageHeader from '../components/Pageheader';

const ShoppingCart: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <PageHeader title="Shopping Cart" currentPage="Shopping Cart" />
      <main className="py-12 px-6 md:px-16 lg:px-28">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 font-semibold">Product</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Quantity</th>
              <th className="p-4 font-semibold">Total</th>
              <th className="p-4 font-semibold">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 flex items-center">
                <Image 
                  src="/choose1.png" 
                  alt="Burger" 
                  width={64}
                  height={64}
                  className="object-cover rounded mr-4" 
                />
                <span>Burger</span>
              </td>
              <td className="p-4">$10.99</td>
              <td className="p-4">
                <input
                  type="number"
                  value={2}
                  className="w-16 border rounded px-2 py-1 text-center"
                  readOnly
                />
              </td>
              <td className="p-4">$21.98</td>
              <td className="p-4 text-red-500 cursor-pointer">&times;</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 flex items-center">
                <Image 
                  src="/choose2.png" 
                  alt="Fresh Lime" 
                  width={64}
                  height={64}
                  className="object-cover rounded mr-4" 
                />
                <span>Fresh Lime</span>
              </td>
              <td className="p-4">$3.49</td>
              <td className="p-4">
                <input
                  type="number"
                  value={1}
                  className="w-16 border rounded px-2 py-1 text-center"
                  readOnly
                />
              </td>
              <td className="p-4">$3.49</td>
              <td className="p-4 text-red-500 cursor-pointer">&times;</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 flex items-center">
                <Image 
                  src="/choose3.png" 
                  alt="Pizza" 
                  width={64}
                  height={64}
                  className="object-cover rounded mr-4" 
                />
                <span>Pizza</span>
              </td>
              <td className="p-4">$9.99</td>
              <td className="p-4">
                <input
                  type="number"
                  value={4}
                  className="w-16 border rounded px-2 py-1 text-center"
                  readOnly
                />
              </td>
              <td className="p-4">$39.96</td>
              <td className="p-4 text-red-500 cursor-pointer">&times;</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 flex items-center">
                <Image 
                  src="/choose4.png" 
                  alt="Chocolate Muffin" 
                  width={64}
                  height={64}
                  className="object-cover rounded mr-4" 
                />
                <span>Chocolate Muffin</span>
              </td>
              <td className="p-4">$4.49</td>
              <td className="p-4">
                <input
                  type="number"
                  value={1}
                  className="w-16 border rounded px-2 py-1 text-center"
                  readOnly
                />
              </td>
              <td className="p-4">$4.49</td>
              <td className="p-4 text-red-500 cursor-pointer">&times;</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 flex items-center">
                <Image 
                  src="/choose5.png" 
                  alt="Cheese Butter" 
                  width={64}
                  height={64}
                  className="object-cover rounded mr-4" 
                />
                <span>Cheese Butter</span>
              </td>
              <td className="p-4">$11.99</td>
              <td className="p-4">
                <input
                  type="number"
                  value={3}
                  className="w-16 border rounded px-2 py-1 text-center"
                  readOnly
                />
              </td>
              <td className="p-4">$35.97</td>
              <td className="p-4 text-red-500 cursor-pointer">&times;</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your code"
                className="flex-grow border rounded-l px-4 py-2"
                readOnly
              />
              <button
                className="bg-[#FF9F0D] text-white px-6 py-2 rounded-r font-semibold">
                Apply
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-between mb-4">
                <span>Cart Subtotal</span>
                <span>$105.89</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Discount</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping Charges</span>
                <span>$30.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>$135.89</span>
              </div>
              <button className="w-full bg-[#FF9F0D] text-white mt-4 py-3 rounded font-semibold hover:bg-[#FF9F0D]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;

import React from 'react';
import { PiClockClockwiseBold } from "react-icons/pi";
import Image from "next/image";






const Footer = () => {
return(
    
        <footer className='flex flex-col bg-black w-full'>
         <div className='w-full px-4 sm:px-6 lg:px-[135px] py-6 sm:py-8 lg:py-[50px]' >
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6'>
                <div className='text-white w-full sm:w-1/2 text-center sm:text-left'>
                <h2 className="text-lg sm:text-xl lg:text-[32px] font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support ?
            </h2>
            <p className="text-xs sm:text-sm lg:text-base mt-2 sm:mt-[17px]">
              Don't wait, make a smart & logical decision now. It's easy.
            </p>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-0">
            <input 
              type="text" 
              placeholder="Enter Your Email" 
              className="w-full sm:w-auto bg-[#FF9F0D] text-white py-2 px-3 sm:px-4 lg:px-6 rounded-sm text-sm lg:text-base " 
            />
            <button className="text-[#FF9F0D] bg-white py-2 px-3 sm:px-4 lg:px-6 rounded-sm text-sm lg:text-base whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          </div>
         </div>
         <hr className="border-[#FF9F0D] mx-4 sm:mx-6 lg:mx-[135px]" />
          
          {/* Main footer */}
         <div className="w-full px-4 sm:px-6 lg:px-[135px] py-6 sm:py-8 lg:py-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-[30px]">
                {/* About section */}
                <div className='space-y-4 sm:space-y-6 col-span-1'>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase text-white">About us</h2>
                    <p className="text-white text-xs sm:text-sm lg:text-base">
                    Corporate clients and leisure travelers have relied on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
                    </p>
                    <div className='flex items-start gap-3 sm:gap-4'>
                        <div className='bg-[#FF9F0D] flex-shrink-0 flex justify-center items-center w-[78px] sm:w-16 h-[72px] sm:h-16'>
                        <PiClockClockwiseBold className="text-white text-2xl sm:text-3xl" />
                        </div>
                        <div>
                         <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Opening Hours</h3>
                         <p className="text-white text-xs sm:text-sm">Mon - Sat (8:00 AM - 6:00 PM)</p>
                         <p className="text-white text-xs sm:text-sm">Sunday - Closed</p>
                        </div>
                    </div>

                </div>

                   {/* usefull section */}
                   <div className='space-y-3 sm:space-y-4 col-span-1'>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Useful Links</h2>
                    <ul className="space-y-2 sm:space-y-3 text-white">
                        <li>About</li>
                        <li>News</li>
                        <li>Partners</li>
                        <li>Team</li>
                        <li>Menu</li>
                        <li>Contacts</li>
                    </ul>

                   </div>
                   {/* help section */}
                   <div className='space-y-3 sm:space-y-4 col-span-1'>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Help?</h2>
                    <ul className="space-y-2 sm:space-y-3 text-white">
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Reporting</li>
                        <li>Documentation</li>
                        <li>Support Policy</li>
                        <li>Privacy</li>
                    </ul>

                   </div>

                   {/* Recent posts */}
                    <div className='space-y-3 sm:space-y-4 col-span-1'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-white'>Recent Post</h2>
                    <div className="space-y-3 sm:space-y-4">
                          <div  className="flex items-center gap-3 sm:gap-4">
                            <Image 
                              src="/pic1.png" 
                              alt="Blog 1" 
                              width={60} 
                              height={60} 
                              className='rounded object-cover w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]'
                            />
                            <div>
                           <p className="text-gray-400 text-xs sm:text-sm">20 Feb 2022</p>
                           <h3 className="text-white text-sm sm:text-base">Keep Your Bussines</h3>
                         </div>
                            
                          </div>
                          <div  className="flex items-center gap-3 sm:gap-4">
                            <Image 
                              src="/pic2.png" 
                              alt="Blog 1" 
                              width={60} 
                              height={60} 
                              className='rounded object-cover w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]'
                            />
                             <div>
                           <p className="text-gray-400 text-xs sm:text-sm">20 Feb 2022</p>
                           <h3 className="text-white text-sm sm:text-base">Keep Your Bussines</h3>
                         </div>
                            
                          </div>
                          <div  className="flex items-center gap-3 sm:gap-4">
                            <Image 
                              src="/pic3.png" 
                              alt="Blog 1" 
                              width={60} 
                              height={60} 
                              className='rounded object-cover w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]'
                            />
                             <div>
                           <p className="text-gray-400 text-xs sm:text-sm">20 Feb 2022</p>
                           <h3 className="text-white text-sm sm:text-base">Keep Your Bussines</h3>
                         </div>
                            
                          </div>
                     </div>
                   </div>


              </div>
         </div>

         {/* Footer social media icons */}

         <div className='w-full bg-[#FF9F0D]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm text-white">
              © 2023 . All Rights Reserved.
            </span>
                      <div className='flex gap-2 sm:gap-3' >
                        {/* <FaFacebookF className='bg-white hover:bg-[#FF9F0D] text-black hover:text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-colors' /> */}
                        <Image src='/Sociali icon.png' alt='icons' height={34} width={240} />
                      </div>
                </div>
            </div>
         </div>
           
         
        
          
       </footer>
    
)

}

export default Footer
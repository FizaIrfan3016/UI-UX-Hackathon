import React from 'react';
import PageHeader from '@/app/components/Pageheader';
import Link from 'next/link';
import { SignIn } from '@clerk/nextjs'

export default function Signin() {
    return(

        <div className='min-h-screen bg-[#FF9F0D]'>
         <PageHeader title='Signin' currentPage='Signin' />
            
          <div className="flex justify-center h-screen items-center">
             {/* Signin Form */}
             
      <SignIn />
    
          </div>
             
        
        </div>
    )
}
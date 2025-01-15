import React from 'react';
import PageHeader from '../components/Pageheader';
import Link from 'next/link';

export default function Signin() {
    return(

        <div className='min-h-screen bg-[#FF9F0D]'>
         <PageHeader title='Signin' currentPage='Signin' />


          {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-lg bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-8">
            <p>You dont have an account? <Link href="/Signup" className='text-yellow-500 font-semibold'>Signin</Link></p>
            <p>or</p>
            
            <button className="w-full bg-black border text-white py-2 hover:text-yellow-500  rounded mt-2 flex items-center justify-center">
             Sign in with Google
            </button>
            <button className="w-full bg-black border text-white py-2 hover:text-yellow-500 rounded mt-2 flex items-center justify-center">
             Sign in with Facebook
            </button>
          </div>
        </div>
      </section>
        </div>
    )
}
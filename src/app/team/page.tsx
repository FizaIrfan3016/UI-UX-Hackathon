"use client"
import React from 'react';
import PageHeader from '../components/Pageheader';
import ChefGrid from '../components/Chefgrid'

// Ourteam page


export default function Ourteam(){
    return(
        <div className='bg-white'>
            <PageHeader title='Our Chef' currentPage='team' />

            {/* Team */}
              
           <ChefGrid />


        </div>
    )
}
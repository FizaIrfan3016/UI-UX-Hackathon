import React from 'react';
import PageHeader from '../components/Pageheader';
import Link from 'next/link';
import ChefGrid from '../components/Chefgrid'


export default function Ourteam(){
    return(
        <div className='bg-white'>
            <PageHeader title='Our Chef' currentPage='team' />

            {/* Team */}
              
           <ChefGrid />


        </div>
    )
}
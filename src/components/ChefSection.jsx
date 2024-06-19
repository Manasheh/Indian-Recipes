import React from 'react'
import ChefCard from './ChefCard'
function ChefSection() {
    const chefs = [
        {
            name: 'Letsei',
            img: '/public/images/top-chef/chef1.avif',
            cuisine: 'Indian'
        },
        {
            name: 'Paupu',
            img: '/public/images/top-chef/1.jfif',
            cuisine: 'Indian'
        },
        {
            name: 'Lutpu',
            img: '/public/images/top-chef/2.jfif',
            cuisine: 'Indian'
        },
        {
            name: 'Jangrose',
            img: '/public/images/top-chef/7.jfif',
            cuisine: 'Indian'
        },
        {
            name: 'Ngamsei',
            img: '/public/images/top-chef/5.jfif',
            cuisine: 'Indian'
        },
        {
            name: 'Seiboi',
            img: '/public/images/top-chef/6.jfif',
            cuisine: 'Indian'
        },

    ]
  return (
    <div className='section chef'>
        <h1 className='title'>Our Top Chefs'</h1>
        <div className='top-chef-container'>
            {
                chefs.map((chef, index) => {
                    return (
                        <ChefCard key={index} chef={chef} />
                    )
                })
            } 
        </div>
    </div>
  )
}

export default ChefSection
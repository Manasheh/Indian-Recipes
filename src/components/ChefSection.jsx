import React from 'react'
import ChefCard from './ChefCard'
function ChefSection() {
    const chefs = [
        {
            name: 'Letsei',
            img: '/images/top-chef/1.jpg',
            cuisine: 'Indian'
        },
        {
            name: 'Paupu',
            img: '/images/top-chef/two.jpg',
            cuisine: 'Indian'
        },
        {
            name: 'Lutpu',
            img: '/images/top-chef/seven.jpg',
            cuisine: 'Indian'
        },
        {
            name: 'Jangrose',
            img: '/images/top-chef/four.jpg',
            cuisine: 'Indian'
        },
        {
            name: 'Ngamsei',
            img: '/images/top-chef/five.jpg',
            cuisine: 'Indian'
        },
        {
            name: 'Seiboi',
            img: '/images/top-chef/six.jpg',
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
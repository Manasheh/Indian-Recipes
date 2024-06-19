import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
function Recipes() {
  const recipes = [
    {
      title: 'Mepoh',
      desc: "Mepoh, a traditional dish in Kukiland, is a savory and aromatic meat stew known for its rich flavors and cultural significance.",
      img: '/images/gallery/mepoh.jpg',
      authorImg: '/images/top-chef/mepoh.png',
    },
    {
      title: 'Samosa',
      desc: '"Iconic Indian snack loved for its crispy shell and flavorful filling."',
      img: '/images/gallery/samosa.jpg',
      authorImg: '/images/top-chef/1.jfif',
    },
    {
      title: 'Dosa',
      desc: "Traditional South Indian crepe known for its crispy texture and savory taste.",
      img: '/images/gallery/dosa.jpeg',
      authorImg: '/images/top-chef/2.jfif',
    },
    {
      title: 'Fried Rice',
      desc: "Popular Indian dish known for its crispy and flavorful deep-fried preparation.",
      img: '/images/gallery/friedrice.jpg',
      authorImg: '/images/top-chef/4.jfif',
    },
    {
      title: 'Idli',
      desc:"Idli, a beloved South Indian staple, is renowned for its soft and fluffy texture, often enjoyed with chutney and sambar.",
      img: '/images/gallery/idli.jpeg',
      authorImg: '/images/top-chef/6.jfif',
    },
    {
      title: 'Pani Puri',
      desc: "Pani Puri, a popular Indian street food, features crispy puris filled with spicy tangy water and delicious chutneys, offering a burst of flavors in every bite.",
      img: '/images/gallery/panipuri.jpg',
      authorImg: '/images/top-chef/7.jfif',
    },
    {
      title: 'Puri',
      desc: "Puri, a staple in Kuki cuisine, is a deep-fried bread enjoyed across Kukiland, known for its crispiness and versatility as a side or main dish.",
      img: '/images/gallery/puri.webp',
      authorImg: '/images/top-chef/8.jfif',
    },
    {
      title: 'Noodles',
      desc: "Noodles, a versatile dish enjoyed worldwide, are a staple in many cuisines for their deliciously slurp-worthy texture and endless flavor possibilities.",
      img: '/images/gallery/noodles.jpg',
      authorImg: '/images/top-chef/9.jfif',
    },
    {
      title: 'BBQ Steak',
      desc: "BBQ steak, a savory delight popular in many cultures, is cherished for its smoky aroma, tender texture, and rich flavor profile.",
      img: '/images/gallery/bbq.avif',
      authorImg: '/images/top-chef/5.jfif',
    },
    
   
    
  ]
  return (
    <div>
        <PreviousSearches />
        <div className="recipes-container">
          {
            recipes.map((recipe, index) => {
              return (
                <RecipeCard key={index} recipe={recipe} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Recipes
import React from 'react'
import CustomImages from './CustomImages'
function RecipeCard({recipe}) {
  return (
    <div className='recipe-card'>
        <CustomImages imgsrc={recipe.img} pt='65%' />
        <div className="recipe-card-info">
            <img className='author-img' src={recipe.authorImg} alt="" />
            <p className='recipe-title'>{recipe.title}</p>
            <p className='recipe-desc'>
                {recipe.desc}
            </p>
            <a href="#!" className='view-btn'>view more</a>
        </div>
    </div>
  )
}

export default RecipeCard
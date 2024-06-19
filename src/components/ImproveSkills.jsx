import React from 'react'

function ImproveSkills() {
    const list = [
        'Learn Indian cooking techniques.',
        'Explore regional cuisines.',
        'Discover chef tips.',
        'Master popular recipes.',
        'Enhance culinary skills.',
        'Join our community.'
    ]
  return (
    <div className='section improve-skills'>
        <div className="col img">
           <img src='/images/gallery/4.jpg' alt="" />
        </div>
        <div className="col typography">
            <h1 className='title'>What are we about</h1>
            {list.map((item, index) => (
                <p key={index} className='skill-item'>{item}</p>
            ))}
            <button className='btn'>sign up now</button>
        </div>
        
    </div>
  )
}

export default ImproveSkills
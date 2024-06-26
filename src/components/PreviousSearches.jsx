import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function PreviousSearches() {
    const searches = [  'Mepoh', 'Idli', 'Dosa', 'Changpah me', 'Soup', 'Veg Friedrice', 'Puri', 'Noodles', 'Pani Puri', 'Omelette', 'Samosa']
  return (
    <div className="previous-searches section">
          <h2>Previous Searches</h2>
          <div className="previous-searches-container">
            {searches.map((search, index) => (
              <div key={index} style={{animationDelay: index * 0.1 + "s"}} className='search-item'>{search}</div>
            ))}
          </div>
          <div className="search-box">
            <input type="text" placeholder='search' />
            <button className='btn'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
  )
}

export default PreviousSearches
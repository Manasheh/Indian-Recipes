import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function QuoteSection() {
  return (
    <div className='section quote'>
        <p className='quote-text'>
            <FontAwesomeIcon icon={faQuoteLeft} />
             "Cooking is like love. It should be entered into with abandon or not at all."
        </p>
        <p className='quote-author'>- Harriet Van Horne</p>
    </div>
  );
}

export default QuoteSection;

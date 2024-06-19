import React from 'react';
import CustomImages from './CustomImages';

function HeroSection() {
    const images = [
        '/images/gallery/mepoh.jpg',
        '/images/gallery/dosa.jpeg',
        '/images/gallery/idli.jpeg',
        '/images/gallery/friedrice.jpg',
        '/images/gallery/puri.webp',        
        '/images/gallery/noodles.jpg',
        '/images/gallery/samosa.jpg',
        '/images/gallery/panipuri.jpg',
        '/images/gallery/vegrice.jpg',
    ];

    return (
        <div className='section hero'>
            <div className="col typography">
                <h1 className='title'>Explore the Flavors of India</h1>
                <p className='info'>Delve into the rich tapestry of Indian cuisine, where every dish tells a story of tradition, culture, and flavors. From spicy curries to aromatic biryanis, discover authentic recipes that will tantalize your taste buds and transport you to the vibrant streets of India.</p>
                <button className='btn'>Explore Now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImages key={index} imgsrc={src} alt={`Image ${index + 1}`} pt={'90%'} />
                ))}
            </div>
        </div>
    );
}

export default HeroSection;

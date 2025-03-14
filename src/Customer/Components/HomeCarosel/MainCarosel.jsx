import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const data = [
    {
        image: "https://i.ibb.co/xq0018gD/img1.jpg"
    },
    {
        image: "https://i.ibb.co/chBGtyYY/img2.jpg"
    },
    {
        image: "https://i.ibb.co/V0FhJJn2/img4.jpg"
    }
];

const MainCarousel = () => {
    // Mapping over data to create carousel items with images
    const items = data.map((item, index) => (
        <div key={index} className="item">
            <img src={item.image} alt={`Carousel Image ${index + 1}`} />
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default MainCarousel;
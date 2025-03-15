import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mens_kurta } from '../../../public/men_kurta'

const HomeSectionCarosel = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = mens_kurta.slice(0, 15).map((item, index) => (
        <HomeSectionCard product={item} key={index} />
    ));

    // Handle previous button click
    const handlePrev = () => {
        if (carouselRef.current) {
            console.log('Sliding to previous');
            carouselRef.current.slidePrev();
        }
    };

    // Handle next button click
    const handleNext = () => {
        if (carouselRef.current) {
            console.log('Sliding to next');
            carouselRef.current.slideNext();
        }
    };

    // Update the current index when the slide changes
    const handleSlideChanged = ({ item }) => {
        setCurrentIndex(item);
    };

    return (
        <div className="px-4 lg:px-8">
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    mouseTracking
                    items={items}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={handleSlideChanged}
                />

                {/* Previous Button */}
                <Button
                    variant="contained"
                    className="btn z-50"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '-2rem',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '0.5rem',
                        display: currentIndex === 0 ? 'none' : 'block',
                    }}
                    onClick={handlePrev}
                    aria-label="prev"
                >
                    <ChevronLeftIcon sx={{ color: 'black' }} />
                </Button>

                {/* Next Button */}
                <Button
                    variant="contained"
                    className="btn z-50"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '-2rem',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '0.5rem',
                        display:
                            currentIndex === items.length - 1 ? 'none' : 'block',
                    }}
                    onClick={handleNext}
                    aria-label="next"
                >
                    <KeyboardArrowRightIcon sx={{ color: 'black' }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
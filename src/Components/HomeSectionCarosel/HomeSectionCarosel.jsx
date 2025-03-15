import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const HomeSectionCarosel = () => {
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1].map((item, index) => (
        <HomeSectionCard key={index} />
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

    return (
        <div className="relative px-4 lg:px-8">
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
                    }}
                    onClick={handlePrev}
                    aria-label="prev"
                >
                    <ChevronLeftIcon />
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
                    }}
                    onClick={handleNext}
                    aria-label="next"
                >
                    <ChevronRightIcon />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarosel;

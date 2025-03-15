import React from 'react'
import MainCarousel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../../../Components/HomeSectionCarosel/HomeSectionCarosel'

function Home() {
    return (
        <div className='container mx-auto'>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-20 flex flex-col justify-center'>
                <HomeSectionCarosel></HomeSectionCarosel>
                <HomeSectionCarosel></HomeSectionCarosel>
                <HomeSectionCarosel></HomeSectionCarosel>

            </div>
        </div>
    )
}

export default Home

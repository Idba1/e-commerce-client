import React from 'react'
import MainCarousel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../../../Components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../../data/men_kurta'
import { dressPage1 } from '../../../../data/dressPage1'

function Home() {
    return (
        <div className='container mx-auto'>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-20 flex flex-col justify-center'>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarosel>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}></HomeSectionCarosel>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}></HomeSectionCarosel>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}></HomeSectionCarosel>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's kurta"}></HomeSectionCarosel>
                <HomeSectionCarosel data={dressPage1} sectionName={"Women's Dress"}></HomeSectionCarosel>

            </div>
        </div>
    )
}

export default Home

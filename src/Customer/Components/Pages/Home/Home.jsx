import React from 'react'
import MainCarousel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../../../Components/HomeSectionCarosel/HomeSectionCarosel'

function Home() {
  return (
    <div className='container mx-auto'>
      <MainCarousel></MainCarousel>
      <HomeSectionCarosel></HomeSectionCarosel>
    </div>
  )
}

export default Home

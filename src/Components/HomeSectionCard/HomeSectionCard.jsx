import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>

            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70" alt="" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Womens Dress</h3>
                <p className='mt-2 text-sm text-gray-500'>Let's start your fashion journey with Idba's shop!</p>
            </div>
        </div>
    )
}

export default HomeSectionCard

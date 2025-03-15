import React from 'react'

const ProductCard = () => {
    return (
        <div className="card bg-base-100 shadow-sm max-w-xs mx-auto">
            <figure className="w-full h-56">
                <img
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70"
                    alt="Shoes"
                    className="w-full h-full object-contain"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-lg text-gray-700 font-bold">Card Title</h2>
                <p className='text-gray-600'>A card component has a figure, a body part, and inside</p>
            </div>
        </div>
    )
}

export default ProductCard
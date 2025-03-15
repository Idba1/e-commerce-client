import React from "react";
import { motion } from "framer-motion"; 

const ProductCard = () => {
    const product = {
        image: "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70",
        title: "Yellow Dress for Women",
        brand: "Aarvia",
        originalPrice: "1499",
        discountPrice: "999",
        discount: 33,
    };

    return (
        <motion.div
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}  
        >
            {/* Image (without animation) */}
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
            />
            
            {/* Card Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.brand}</h2>
                <p className="text-sm text-gray-600">{product.title}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-gray-900">₹{product.discountPrice}</span>
                    <span className="text-sm line-through text-gray-500">₹{product.originalPrice}</span>
                    <span className="text-sm text-green-600 font-semibold">{product.discount}% off</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

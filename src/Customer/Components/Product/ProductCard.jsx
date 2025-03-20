import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <motion.div onClick={() => navigate(`/product/${7}`)}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative w-full h-64">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.brand}</h2>
                <p className="text-sm text-gray-600">{product.title}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-gray-900">₹{product.discountedPrice}</span>
                    <span className="text-sm line-through text-gray-500">₹{product.price}</span>
                    <span className="text-sm text-green-600 font-semibold">{product.discountPercent}% off</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

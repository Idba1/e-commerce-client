import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { motion } from "framer-motion";

const OrderTracker = ({ activeStep }) => {
    const steps = [
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out For Delivery",
        "Delivered"
    ];

    return (
        <div className="w-full p-4 flex flex-col items-center">
            <motion.div
                className="w-full max-w-6xl overflow-x-auto scrollbar-hide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Stepper activeStep={activeStep} alternativeLabel className="w-full">
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel
                                sx={{
                                    color: activeStep >= index ? "#9155FD" : "#ccc",
                                    fontSize: "14px",
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </motion.div>

            {[1, 1, 1, 1, 1].map(() =>
                <motion.div
                    className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between p-6 border rounded-lg shadow-md bg-white mt-6 transition-all duration-300 hover:shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.img
                        src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                        alt="Men Slim Mid Rise Black Jeans"
                        className="w-24 h-24 rounded-md object-cover transition-transform duration-300 hover:scale-110"
                    />

                    <div className="flex-grow text-center md:text-left mt-3 md:mt-0 md:ml-4">
                        <h3 className="font-semibold text-lg">Men Slim Mid Rise Black Jeans</h3>
                        <p className="text-gray-500 text-sm">Color: Pink &nbsp; | &nbsp; Size: M</p>
                        <p className="text-gray-600 text-sm">Seller: Ilinaria</p>
                        <p className="font-bold text-lg mt-1">₹1099</p>
                    </div>

                    <motion.button
                        className="text-purple-600 font-medium flex items-center gap-1 hover:underline mt-3 md:mt-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        ⭐ Rate & Review Product
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
};

export default OrderTracker;
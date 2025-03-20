import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
    return (
        <div className="w-full flex flex-col md:flex-row p-4 gap-6">
            {/* Sidebar Filter */}
            <div className="w-full md:w-1/4 p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-lg font-semibold mb-3">Filters</h2>
                <h3 className="text-md font-medium mb-2">ORDER STATUS</h3>
                <div className="space-y-2">
                    {["On The Way", "Delivered", "Cancelled", "Returned"].map((status) => (
                        <label
                            key={status}
                            className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition"
                        >
                            <input type="checkbox" className="h-4 w-4 accent-blue-500" />
                            <span>{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Orders List */}
            <div className="w-full md:w-3/4 p-4 space-y-4">
                <OrderCard />
            </div>
        </div>
    );
};

export default Order;
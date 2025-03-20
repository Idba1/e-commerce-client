import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const orders = [
        {
            id: 1,
            image:
                "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Men Slim Mid Rise Black Jeans",
            price: "₹1099",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 2,
            image:
                "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Women Bodycon Yellow Dress",
            price: "₹499",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 3,
            image:
                "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Men Slim Mid Rise Black Jeans",
            price: "₹1099",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 4,
            image:
                "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Women Bodycon Yellow Dress",
            price: "₹499",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
    ];

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className="w-full p-4">
            {orders.length > 0 ? (
                <div className="space-y-4">
                    {orders.map((order, index) => (
                        <div
                            key={order.id}
                            className="flex flex-col md:flex-row items-center p-4 border rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 opacity-100 animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={order.image}
                                alt={order.name}
                                className="w-24 h-24 rounded-md object-cover"
                            />
                            <div className="ml-0 md:ml-6 flex-grow text-center md:text-left">
                                <h3 className="font-semibold text-lg">{order.name}</h3>
                                <p className="text-gray-600">Size: {order.size}</p>
                                <p className="font-bold">{order.price}</p>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-green-600 font-medium">
                                    ✅ Expected Delivery: {order.expectedDelivery}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Your item has been {order.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No orders available</p>
            )}
        </div>
    );
};

export default OrderCard;
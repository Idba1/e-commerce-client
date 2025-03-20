import React from 'react'

const Order = () => {
    const orders = [
        {
            id: 1,
            image: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Men Slim Mid Rise Black Jeans",
            price: "₹1099",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 2,
            image: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Women Bodycon Yellow Dress",
            price: "₹499",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 3,
            image: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Women Skater Yellow Dress",
            price: "₹1099",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
        {
            id: 4,
            image: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
            name: "Yellow Mirrorwork Net Readymade Lehenga",
            price: "₹11999",
            size: "M",
            status: "Delivered",
            expectedDelivery: "Mar 03",
        },
    ];

    return (
        <div className="flex p-4">
            {/* Sidebar Filter */}
            <div className="w-1/4 p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-lg font-semibold mb-2">Filters</h2>
                <h3 className="text-md font-medium mb-2">ORDER STATUS</h3>
                <div className="space-y-2">
                    {["On The Way", "Delivered", "Cancelled", "Returned"].map((status) => (
                        <label key={status} className="flex items-center space-x-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>{status}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Orders List */}
            <div className="w-3/4 p-4 space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="flex p-4 border rounded-lg shadow-sm bg-white items-center"
                    >
                        <img src={order.image} alt={order.name} className="w-16 h-16 rounded-md" />
                        <div className="ml-4 flex-grow">
                            <h3 className="font-semibold">{order.name}</h3>
                            <p className="text-gray-600">Size {order.size}</p>
                            <p className="font-bold">{order.price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-green-600 font-medium">
                                ✅ Expected Delivery On {order.expectedDelivery}
                            </p>
                            <p className="text-gray-500 text-sm">Your Item Has Been {order.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order

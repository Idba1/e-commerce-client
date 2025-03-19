import React, { useState } from 'react';

const DeliveryAddressForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            firstName,
            lastName,
            address,
            city,
            state,
            zip,
            phone
        });
    };

    return (
        <div>
            {/* Address Selection & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded-lg mt-6">
                {/* Saved Addresses */}
                <div className="border p-4 overflow-auto h-48">
                    <div className="mb-4">
                        <h3 className="font-semibold">Raam Shah</h3>
                        <p className="text-gray-600">
                            Mumbai, gokuldham market, new shivam building, 400001, Mumbai
                            Maharastra 400001
                        </p>
                        <p className="text-gray-700 font-medium">Phone Number: 9038423984</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Dev Dixit</h3>
                        <p className="text-gray-600">
                            Mumbai, chincholi bandar, mind space, 400001, Mumbai Maharastra
                            400001
                        </p>
                        <p className="text-gray-700 font-medium">Phone Number: 9087356787</p>
                    </div>
                </div>

                {/* New Address Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name *"
                            className="border p-2 rounded w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name *"
                            className="border p-2 rounded w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <textarea
                        placeholder="Address *"
                        className="border p-2 rounded w-full mt-4 h-20"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="City *"
                            className="border p-2 rounded w-full"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="State/Province/Region *"
                            className="border p-2 rounded w-full"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Zip / Postal code *"
                            className="border p-2 rounded w-full"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number *"
                            className="border p-2 rounded w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded mt-6 w-full" type="submit">
                        DELIVERED HERE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddressForm;

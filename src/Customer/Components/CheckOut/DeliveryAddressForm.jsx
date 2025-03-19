import React, { useState } from 'react';
import Swal from 'sweetalert2';

const DeliveryAddressForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState({});

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // basic validation
        const validationErrors = {};
        if (!firstName) validationErrors.firstName = "First Name is required";
        if (!lastName) validationErrors.lastName = "Last Name is required";
        if (!address) validationErrors.address = "Address is required";
        if (!city) validationErrors.city = "City is required";
        if (!state) validationErrors.state = "State is required";
        if (!zip) validationErrors.zip = "Zip Code is required";
        if (!phone) validationErrors.phone = "Phone Number is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // successfully submitting the form
            console.log({
                firstName,
                lastName,
                address,
                city,
                state,
                zip,
                phone
            });
            Swal.fire({
                icon: 'success',
                title: 'Address successfully submitted!',
                text: 'Your address has been saved successfully.',
                confirmButtonText: 'OK'
            });
            setFirstName('');
            setLastName('');
            setAddress('');
            setCity('');
            setState('');
            setZip('');
            setPhone('');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Delivery Address</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="John"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
                        <textarea
                            id="address"
                            placeholder="123 Main St, Apt 4B"
                            className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
                            <input
                                id="city"
                                type="text"
                                placeholder="New York"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
                            <input
                                id="state"
                                type="text"
                                placeholder="NY"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code *</label>
                            <input
                                id="zip"
                                type="text"
                                placeholder="10001"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.zip ? 'border-red-500' : 'border-gray-300'}`}
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                            {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="(555) 123-4567"
                                className={`mt-1 block w-full px-4 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Deliver Here
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddressForm;
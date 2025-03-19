import React from 'react'

const AddressCard = () => {
    return (
        <div>
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
        </div>
    )
}

export default AddressCard

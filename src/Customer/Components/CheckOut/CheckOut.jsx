import React from "react";
import Stepper from "react-stepper-horizontal";

const CheckOut = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Progress Bar */}
      <Stepper
        steps={[
          { title: "Login" },
          { title: "Delivery Address" },
          { title: "Order Summary" },
          { title: "Payment" },
        ]}
        activeStep={1}
        activeColor="#6B46C1"
        completeColor="#6B46C1"
        defaultColor="#CBD5E0"
      />

      {/* Address Selection & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded-lg mt-6">
        {/* Saved Addresses */}
        <div className="border p-4 overflow-auto h-48">
          <div className="mb-4">
            <h3 className="font-semibold">Raam Shah</h3>
            <p className="text-gray-600">Mumbai, gokuldham market, new shivam building, 400001, Mumbai Maharastra 400001</p>
            <p className="text-gray-700 font-medium">Phone Number: 9038423984</p>
          </div>
          <div>
            <h3 className="font-semibold">Dev Dixit</h3>
            <p className="text-gray-600">Mumbai, chincholi bandar, mind space, 400001, Mumbai Maharastra 400001</p>
            <p className="text-gray-700 font-medium">Phone Number: 9087356787</p>
          </div>
        </div>

        {/* New Address Form */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name *" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Last Name *" className="border p-2 rounded w-full" />
          </div>
          <textarea placeholder="Address *" className="border p-2 rounded w-full mt-4 h-20"></textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="City *" className="border p-2 rounded w-full" />
            <input type="text" placeholder="State/Province/Region *" className="border p-2 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Zip / Postal code *" className="border p-2 rounded w-full" />
            <input type="text" placeholder="Phone Number *" className="border p-2 rounded w-full" />
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded mt-6 w-full">DELIVERED HERE</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummery from "./OrderSummery";

const CheckOut = () => {
    const [activeStep, setActiveStep] = useState(0); 
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedStep = localStorage.getItem("checkoutStep");
        const savedLoginStatus = localStorage.getItem("loggedIn");

        if (savedStep) {
            setActiveStep(parseInt(savedStep, 10));
        }

        if (savedLoginStatus === "true") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }

        if (!savedLoginStatus || savedLoginStatus === "false") {
            setActiveStep(0);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem("checkoutStep", activeStep);

        if (activeStep !== 0) {
            navigate(`?step=${activeStep}`, { replace: true });
        }
    }, [activeStep, navigate]);

    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1); 
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1); 
        }
    };

    const handleLogin = () => {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
        setActiveStep(1);
    };

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
                activeStep={activeStep}
                activeColor="#6B46C1" 
                completeColor="#6B46C1" 
                defaultColor="#CBD5E0"
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={handleBack}
                    className={`px-6 py-2 rounded ${activeStep === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 text-white"
                        }`}
                    disabled={activeStep === 0}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className={`px-6 py-2 rounded ${activeStep === 3 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 text-white"
                        }`}
                    disabled={activeStep === 3}
                >
                    Next
                </button>
            </div>

            <div>
                {activeStep === 0 && !loggedIn ? (
                    <div>
                        <h3>Please log in to continue</h3>
                        <button onClick={handleLogin} className="bg-purple-600 text-white px-6 py-2 rounded mt-4">
                            Log In
                        </button>
                    </div>
                ) : activeStep === 1 ? (
                    <DeliveryAddressForm />
                ) : activeStep === 2 ? (
                    <OrderSummery />
                ) : (
                    <div>Payment</div>
                )}
            </div>
        </div>
    );
};

export default CheckOut;
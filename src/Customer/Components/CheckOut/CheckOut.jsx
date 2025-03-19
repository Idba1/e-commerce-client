import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummery from "./OrderSummery";

const CheckOut = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialStep = parseInt(queryParams.get("step")) || 0;
    
    const [step, setStep] = useState(initialStep);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
    
    useEffect(() => {
        navigate(`?step=${step}`, { replace: true });
    }, [step, navigate]);

    const handleNext = () => {
        if (step < 3) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((prevStep) => prevStep - 1);
        }
    };

    const handleLogin = () => {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
        setStep(1);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Stepper
                steps={[
                    { title: "Login" },
                    { title: "Delivery Address" },
                    { title: "Order Summary" },
                    { title: "Payment" },
                ]}
                activeStep={step}
                activeColor="#6B46C1"
                completeColor="#6B46C1"
                defaultColor="#CBD5E0"
            />

            <div className="flex justify-between mt-6">
                <button
                    onClick={handleBack}
                    className={`px-6 py-2 rounded ${step === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 text-white"}`}
                    disabled={step === 0}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className={`px-6 py-2 rounded ${step === 3 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 text-white"}`}
                    disabled={step === 3}
                >
                    Next
                </button>
            </div>

            <div>
                {step === 0 && !loggedIn ? (
                    <div>
                        <h3>Please log in to continue</h3>
                        <button onClick={handleLogin} className="bg-purple-600 text-white px-6 py-2 rounded mt-4">
                            Log In
                        </button>
                    </div>
                ) : step === 1 ? (
                    <DeliveryAddressForm />
                ) : step === 2 ? (
                    <OrderSummery />
                ) : (
                    <div>Payment</div>
                )}
            </div>
        </div>
    );
};

export default CheckOut;

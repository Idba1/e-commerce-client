import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div className=''>
                <h1 className='font-bold text-xl py-10'>Delivery Address</h1>
                <AddressCard></AddressCard>
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={3}></OrderTraker>
            </div>
        </div>
    )
}

export default OrderDetails

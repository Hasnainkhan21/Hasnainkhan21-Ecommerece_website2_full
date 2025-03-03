import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress } from '../Redux/cartSlice';

const AddressForm = () => {
    const dispatch = useDispatch();
    const savedAddress = useSelector(state => state.cart.address);
    const [address, setAddress] = useState(savedAddress);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAddress(address));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-sm font-semibold mb-2">Delivery Address</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="w-full px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                    required
                />
                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        required
                    />
                    <input
                        type="text"
                        name="zipCode"
                        value={address.zipCode}
                        onChange={handleChange}
                        placeholder="ZIP Code"
                        className="w-full px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-1 text-sm rounded-md hover:bg-red-700 transition-colors"
                >
                    Update Address
                </button>
            </form>
        </div>
    );
};

export default AddressForm; 
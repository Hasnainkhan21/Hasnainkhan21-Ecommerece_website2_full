import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaBox, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';

const OrderSuccess = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.products);
    const address = useSelector(state => state.cart.address);

    useEffect(() => {
        // If no items in cart, redirect to home
        if (cartItems.length === 0) {
            navigate('/');
        }
    }, [cartItems, navigate]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                {/* Order Confirmation Header */}
                <div className="text-center mb-8">
                    <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
                    <p className="text-gray-600">Order #{orderNumber}</p>
                    <p className="text-gray-600 mt-2">Thank you for shopping with us!</p>
                </div>

                {/* Order Details */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FaBox className="mr-2" /> Order Details
                    </h2>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center border-b pb-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-16 h-16 object-contain"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/150';
                                    }}
                                />
                                <div className="ml-4 flex-grow">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="flex justify-between pt-4">
                            <span className="font-semibold">Total Amount:</span>
                            <span className="font-bold text-red-600">${calculateTotal()}</span>
                        </div>
                    </div>
                </div>

                {/* Shipping Information */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FaTruck className="mr-2" /> Shipping Information
                    </h2>
                    <div className="flex items-start">
                        <FaMapMarkerAlt className="text-red-600 mt-1 mr-2" />
                        <div>
                            <p className="font-medium">Delivery Address:</p>
                            <p className="text-gray-600">{address.street}</p>
                            <p className="text-gray-600">{address.city}, {address.zipCode}</p>
                        </div>
                    </div>
                </div>

                {/* Estimated Delivery */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-2">Estimated Delivery</h2>
                    <p className="text-gray-600">Your order will be delivered within 3-5 business days</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                    <Link 
                        to="/" 
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                    <button 
                        onClick={() => window.print()}
                        className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        Print Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess; 
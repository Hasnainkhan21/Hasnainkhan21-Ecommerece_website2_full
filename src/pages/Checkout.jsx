import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

const Checkout = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.products);
    const savedAddress = useSelector(state => state.cart.address);
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [billingInfo, setBillingInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    useEffect(() => {
        // Redirect to cart if cart is empty
        if (cartItems.length === 0) {
            navigate('/cart');
        }
    }, [cartItems, navigate]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear any previous errors when user starts typing
        setError(null);
    };

    const validateForm = () => {
        if (paymentMethod === 'card') {
            if (!/^\d{16}$/.test(billingInfo.cardNumber.replace(/\s/g, ''))) {
                setError('Please enter a valid 16-digit card number');
                return false;
            }
            if (!/^\d{2}\/\d{2}$/.test(billingInfo.expiryDate)) {
                setError('Please enter a valid expiry date (MM/YY)');
                return false;
            }
            if (!/^\d{3}$/.test(billingInfo.cvv)) {
                setError('Please enter a valid 3-digit CVV');
                return false;
            }
        }
        if (!billingInfo.fullName || !billingInfo.phone) {
            setError('Please fill in all required fields');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);
        try {
            // Simulate order processing
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            if (paymentMethod === 'cash') {
                // Handle cash on delivery
                console.log('Processing Cash on Delivery order...', { billingInfo });
            } else {
                // Handle card payment
                console.log('Processing card payment...', { billingInfo });
            }
            
            // Navigate to success page
            navigate('/order-success');
        } catch (err) {
            setError('Order processing failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Order Summary */}
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-16 h-16 object-contain"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150';
                                        }}
                                    />
                                    <div className="flex-grow">
                                        <h4 className="font-medium">{item.name}</h4>
                                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t mt-4 pt-4">
                            <div className="flex justify-between font-semibold">
                                <span>Total:</span>
                                <span className="text-red-600">${calculateTotal()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                        <div className="text-sm text-gray-600">
                            <p>{savedAddress.street}</p>
                            <p>{savedAddress.city}, {savedAddress.zipCode}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Payment Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={billingInfo.fullName}
                                onChange={handleBillingChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={billingInfo.phone}
                                    onChange={handleBillingChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={billingInfo.email}
                                    onChange={handleBillingChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <h4 className="font-medium mb-2">Payment Method *</h4>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('cash')}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-md border ${
                                        paymentMethod === 'cash' ? 'border-red-500 text-red-600' : 'border-gray-300'
                                    }`}
                                >
                                    <FaMoneyBillWave />
                                    <span>Cash on Delivery</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-md border ${
                                        paymentMethod === 'card' ? 'border-red-500 text-red-600' : 'border-gray-300'
                                    }`}
                                >
                                    <FaCreditCard />
                                    <span>Credit Card</span>
                                </button>
                            </div>
                        </div>

                        {paymentMethod === 'card' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Card Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={billingInfo.cardNumber}
                                        onChange={handleBillingChange}
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                        required={paymentMethod === 'card'}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Expiry Date *
                                        </label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={billingInfo.expiryDate}
                                            onChange={handleBillingChange}
                                            placeholder="MM/YY"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                            required={paymentMethod === 'card'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            CVV *
                                        </label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={billingInfo.cvv}
                                            onChange={handleBillingChange}
                                            placeholder="123"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                            required={paymentMethod === 'card'}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`w-full py-3 rounded-lg transition-colors mt-6 ${
                                isProcessing 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-red-600 hover:bg-red-700 text-white'
                            }`}
                        >
                            {isProcessing 
                                ? 'Processing...' 
                                : paymentMethod === 'cash' 
                                    ? 'Place Order (Cash on Delivery)'
                                    : `Pay $${calculateTotal()}`
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
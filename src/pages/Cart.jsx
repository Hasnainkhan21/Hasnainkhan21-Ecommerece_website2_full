import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/cartSlice';
import AddressForm from '../Components/AddressForm';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.products);
    
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                <p className="mb-4">Add some products to your cart and they will show up here</p>
                <Link to="/shop" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                                <div className="w-24 h-24 flex-shrink-0">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150';
                                        }}
                                    />
                                </div>
                                <div className="ml-6 flex-grow">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                    <p className="text-red-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    
                                    <div className="flex items-center mt-2">
                                        <button 
                                            onClick={() => handleDecrease(item.id)}
                                            className="p-1 hover:text-red-600 transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <FaMinus />
                                        </button>
                                        <span className="mx-3 font-semibold">{item.quantity}</span>
                                        <button 
                                            onClick={() => handleIncrease(item.id)}
                                            className="p-1 hover:text-red-600 transition-colors"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="p-2 hover:text-red-600 transition-colors"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-1">
                    <AddressForm />
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Total:</span>
                            <span className="text-xl font-bold text-red-600">${calculateTotal()}</span>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 
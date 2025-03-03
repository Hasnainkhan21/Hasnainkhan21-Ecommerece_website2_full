import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <button 
                        onClick={() => navigate('/shop')}
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                    >
                        Return to Shop
                    </button>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const features = [
        {
            icon: <FaTruck className="text-2xl text-red-600" />,
            title: 'Free Delivery',
            description: 'Free shipping on all orders'
        },
        {
            icon: <FaShieldAlt className="text-2xl text-red-600" />,
            title: 'Secure Payment',
            description: '100% secure payment'
        },
        {
            icon: <FaUndo className="text-2xl text-red-600" />,
            title: 'Easy Returns',
            description: '30 days return policy'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Product Image */}
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400';
                        }}
                    />
                    {product.discount > 0 && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                            {product.discount}% OFF
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                    
                    <div className="flex items-center space-x-4">
                        <Box>
                            <Rating
                                name="product-rating"
                                value={product.rating || 0}
                                precision={0.5}
                                readOnly
                            />
                        </Box>
                        <span className="text-gray-600">({product.reviews || 0} reviews)</span>
                    </div>

                    <div className="text-2xl font-bold text-red-600">
                        ${product.price.toFixed(2)}
                        {product.oldPrice && (
                            <span className="ml-2 text-lg text-gray-500 line-through">
                                ${product.oldPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Availability:</span>
                            <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center space-x-2 w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300"
                        >
                            <FaShoppingCart />
                            <span>Add to Cart</span>
                        </button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div>{feature.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                                    <p className="text-xs text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Product Details</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {product.category && (
                            <div>
                                <span className="font-semibold">Category: </span>
                                <span className="text-gray-600">{product.category}</span>
                            </div>
                        )}
                        {product.brand && (
                            <div>
                                <span className="font-semibold">Brand: </span>
                                <span className="text-gray-600">{product.brand}</span>
                            </div>
                        )}
                        {product.sku && (
                            <div>
                                <span className="font-semibold">SKU: </span>
                                <span className="text-gray-600">{product.sku}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails; 
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div 
            className="bg-white p-4 relative transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md cursor-pointer"
            onClick={handleClick}
        >
            <div className="relative h-48 mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150';
                    }}
                />
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2 h-12 overflow-hidden">
                {product.description}
            </p>
            <p className="text-red-600 font-bold">${product.price}</p>
            <Box className="flex items-center mt-2 mb-8">
                <Rating
                    name={`rating-${product.id}`}
                    defaultValue={2.5}
                    value={product.rating || 2.5}
                    precision={0.5}
                    
                    size="small"
                />
                <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews || 0})
                </span>
            </Box>
            <button
                onClick={handleAddToCart}
                className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 bg-red-600 
                group text-white text-sm rounded-full hover:w-20 hover:bg-red-700 transition-all"
            >
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                </span>
            </button>
        </div>
    );
};

export default ProductCard;
import React, { useEffect } from 'react';
import { Categories as CategoriesData, mockData } from '../assets/MockData'; // Renamed to avoid conflict
import InfoSection from '../Components/infoSection';
import Categories from '../Components/Categories'; // Import the Categories component
import { setProducts } from '../Redux/productSlice'; // Fixed import path (removed space)
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Shop from './Shop';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products); // Access products directly

    useEffect(() => {
        dispatch(setProducts(mockData)); 
    }, [dispatch]);

    return (
        <div>
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 py-8'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
                {/* Categories List Section */}
                <div className='w-full md:w-1/4'>
                    <div className='bg-red-600 text-white text-sm font-bold px-4 py-3 rounded-t-lg'>
                        Shop by Categories
                    </div>
                    <ul className='space-y-4 bg-gray-100 p-4 border border-gray-200 rounded-b-lg'>
                        {CategoriesData.map((category, index) => (
                            <li key={index} className='flex items-center text-sm font-medium hover:text-red-600 cursor-pointer'>
                                <div className='w-2 h-2 border border-red-500 rounded-full mr-3'></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Banner Section */}
                <div className='w-full md:w-3/4 h-96 relative rounded-lg overflow-hidden shadow-lg'>
                    <img
                        src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Banner"
                        className='h-full w-full object-cover'
                    />
                    <div className='absolute top-10 left-8 font-extrabold text-white'>
                        <p className='text-gray-300 mb-2 text-lg'>Shop with NAINO</p>
                        <h2 className='text-4xl font-bold mb-3'>Welcome to e-shop</h2>
                        <p className='text-xl font-bold text-gray-200'>Millions+ Products</p>
                        <Link 
                            to="/shop" 
                            className='inline-block bg-red-600 px-8 py-2 text-white mt-6 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md'
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </div>

            {/* InfoSection and Categories Components */}
            <InfoSection />
            <Categories />

            {/* Display Top Products */}
            <div className='container mx-auto py-12'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6'>
                {products.slice(0, 5).map((product, index) => (
                    <ProductCard product={product} key={index} />
                   
                ))}
                </div>
                <div className="text-center mt-8">
                    <Link 
                        to="/shop" 
                        className="inline-block bg-red-600 px-8 py-2 text-white hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
        <Shop />
        </div>
    );
};

export default Home;
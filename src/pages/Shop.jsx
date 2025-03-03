import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
    const { filteredProducts, searchQuery } = useSelector(state => state.product);

    return (
        <div className="px-4 md:px-16 lg:px-24 mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Shop'}
            </h2>
            {searchQuery && (
                <p className="text-center text-gray-600 mb-6">
                    {filteredProducts.length} products found
                </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts && filteredProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600">
                        No products found. Try adjusting your search.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Shop;

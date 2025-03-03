import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { setSearchQuery } from '../Redux/productSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const cartItems = useSelector(state => state.cart.products);
    const { user, isAuthenticated } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchQuery(searchTerm));
        navigate('/shop');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        dispatch(setSearchQuery(e.target.value));
    };

    return(
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to='/'>e-shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder='Search Product' 
                            className='w-full border py-2 px-4 rounded-md' 
                        />
                        <button type="submit" className="absolute top-2 right-3">
                            <FaSearch className='text-red-500'></FaSearch>
                        </button>
                    </form>
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to='/cart' className="relative">
                        <FaShoppingCart className='text-lg'/>
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                    
                    {isAuthenticated ? (
                        <div className="relative group">
                            <button className="flex items-center space-x-2">
                                <FaUser className="text-lg" />
                                <span className="hidden md:inline">{user.name}</span>
                            </button>
                            <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                                <Link 
                                    to="/profile" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link 
                                    to="/orders" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Orders
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link 
                                to="/login"
                                className="hidden md:block text-sm hover:text-red-600"
                            >
                                Login
                            </Link>
                            <Link 
                                to="/register"
                                className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
                            >
                                Register
                            </Link>
                            <Link to="/login" className="block md:hidden">
                                <FaUser />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:text-red-600 transition-colors'>Home</Link>
                <Link to="/shop" className='hover:text-red-600 transition-colors'>Shop</Link>
                <Link to="/about" className='hover:text-red-600 transition-colors'>About</Link>
                <Link to="/contact" className='hover:text-red-600 transition-colors'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;

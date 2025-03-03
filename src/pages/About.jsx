import React from 'react';
import { FaShoppingBag, FaTruck, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaShoppingBag className="text-3xl text-red-600" />,
            title: 'Wide Selection',
            description: 'Browse through thousands of products across multiple categories.'
        },
        {
            icon: <FaTruck className="text-3xl text-red-600" />,
            title: 'Fast Delivery',
            description: 'Get your orders delivered quickly and efficiently to your doorstep.'
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600" />,
            title: '24/7 Support',
            description: 'Our customer service team is always ready to help you.'
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
            title: 'Best Prices',
            description: 'We offer competitive prices and regular discounts on our products.'
        }
    ];

    const team = [
        {
            name: 'Muhammad Hasnain',
            position: 'CEO & Founder',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Sami jan',
            position: 'Head of Operations',
            image: 'https://randomuser.me/api/portraits/women/1.jpg'
        },
        {
            name: 'Mike Johnson',
            position: 'Lead Developer',
            image: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            name: 'Sarah Wilson',
            position: 'Marketing Director',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">About e-shop</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We're dedicated to providing the best shopping experience with quality products,
                    excellent customer service, and competitive prices.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Story Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-600 mb-4">
                        Founded in 2023, e-shop began with a simple mission: to make quality products 
                        accessible to everyone. What started as a small online store has grown into a 
                        comprehensive e-commerce platform serving customers worldwide.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Our commitment to customer satisfaction, quality products, and competitive 
                        pricing has helped us build a loyal customer base and establish ourselves as 
                        a trusted name in online retail.
                    </p>
                    <p className="text-gray-600">
                        Today, we continue to grow and innovate, always putting our customers first 
                        and striving to provide the best possible shopping experience.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div>
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="text-center">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                            <p className="text-gray-600">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About; 
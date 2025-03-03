import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl text-red-600" />,
            title: 'Phone',
            info: '+1 234 567 890',
            subInfo: 'Mon-Fri 9am-6pm'
        },
        {
            icon: <FaEnvelope className="text-2xl text-red-600" />,
            title: 'Email',
            info: 'support@eshop.com',
            subInfo: '24/7 Online Support'
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
            title: 'Location',
            info: '123 Shopping Street',
            subInfo: 'New York, NY 10001'
        },
        {
            icon: <FaClock className="text-2xl text-red-600" />,
            title: 'Working Hours',
            info: 'Mon-Fri: 9:00-18:00',
            subInfo: 'Sat-Sun: 9:00-14:00'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Have questions? We're here to help. Send us a message and we'll respond as
                    soon as possible.
                </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactInfo.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-800 mb-1">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.subInfo}</p>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Thank you for your message. We'll get back to you soon!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Message subject"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            placeholder="Your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Map */}
            <div className="mt-12">
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373946229!3d40.69766374932921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645454332412!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact; 
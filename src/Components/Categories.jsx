import React from "react";

// Rename the array to avoid naming conflict
const categoriesData = [
    {
        title: "Man",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9QTP3KlZGhqbFJXLggMUYWx98uNI73SYZA&s",
    },
    {
        title: "Women",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopwCQgvl8MGaYX9CoalRWexF0eRg8e_rjaQ&s",
    },
    {
        title: "Kids",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJMtMaEav7oDNf1EOYz225aBxtFFB9EdCpA&s",
    }
];

export default function Categories() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:grid-cols-1 cursor-pointer">
            {categoriesData.map((category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
                    <img 
                        src={category.imageUrl} 
                        alt={category.title} 
                        className="w-full h-full object-cover rounded-lg shadow-md" 
                    />
                    <div className="absolute top-20 left-12">
                        <p className="text-3xl font-bold">{category.title}</p>
                        <p className="text-Black-600">View All</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
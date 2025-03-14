import React, { useState } from "react";
import { BsHouseDoor, BsGrid, BsClipboardCheck, BsGear, BsPerson } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

const Stock: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Sample data for the list
  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/100x100?text=Plant1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$17.00",
      count: 30,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100x100?text=Plant2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$17.00",
      count: 17,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100x100?text=Plant3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$17.00",
      count: 20,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100x100?text=Plant4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$17.00",
      count: 17,
    },
  ];

  const navItems = [
    { icon: BsHouseDoor, path: '/home', label: 'Home' },
    { icon: BsGrid, path: '/gallery', label: 'Gallery' },
    { icon: BsClipboardCheck, path: '/stock', label: 'Stock' },
    { icon: BsGear, path: '/settings', label: 'Settings' },
    { icon: BsPerson, path: '/profile', label: 'Profile' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ maxWidth: '500px', margin: '0 auto' }}>
      {/* Header with Search Bar */}
      <header className="bg-white p-4">
        <div className="flex items-center bg-gray-100 rounded-lg p-2">
          <input
            type="text"
            placeholder="Stock"
            className="w-full bg-transparent border-none focus:outline-none"
          />
          <button className="ml-2">
            <span className="text-xl">🔍</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Insumos</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 mb-4 rounded-lg border border-gray-100 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 mr-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={`Item ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="font-bold">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-gray-700">{item.count}</span>
              <button className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
                +
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="flex justify-between items-center px-4 py-2">
          {navItems.map((item, index) => {
            // Center button is the update button
            if (index === 2) {
              return (
                <button
                  key={item.path}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium"
                >
                  Actualizar
                </button>
              );
            }
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center w-12 h-12"
              >
                <item.icon
                  size={24}
                  className={location.pathname === item.path ? 'text-blue-500' : 'text-gray-400'}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stock;
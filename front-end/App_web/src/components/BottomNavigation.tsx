import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsHouseDoor, BsGrid, BsClipboardCheck, BsGear, BsPerson } from 'react-icons/bs';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: BsHouseDoor, path: '/home', label: 'Home' },
    { icon: BsGrid, path: '/gallery', label: 'Gallery' },
    { icon: BsClipboardCheck, path: '/stock', label: 'Stock' },
    { icon: BsGear, path: '/settings', label: 'Settings' },
    { icon: BsPerson, path: '/profile', label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="flex justify-between items-center px-4 py-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center w-12 h-12"
          >
            <item.icon
              size={24}
              className={location.pathname === item.path ? 'text-[#073194]' : 'text-[#94a0ba]'}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
    const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-black"></div>
            <span className="text-sm uppercase tracking-widest">Digital Horizons</span>
          </div>
          <div className="hidden md:flex space-x-12">
            {['Data Analysis','Services',  'About', 'Contact','Home'].map((item) => (
              <a 
                key={item} 
                className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
                onClick={(e) => (navigate(`/${item}`))}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

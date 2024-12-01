import React from 'react';
import { BeakerIcon, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav className={`fixed w-full z-10 ${isDarkMode ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-800'} backdrop-blur-md shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6" />
            <span className="font-abril-fatface text-xl">Backyard Scientist</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
          
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
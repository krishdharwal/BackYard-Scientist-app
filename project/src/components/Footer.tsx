import React from 'react';
import { BeakerIcon, Github, Mail } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export const Footer: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BeakerIcon className="h-6 w-6" />
              <span className="font-abril-fatface text-xl">Backyard Scientist</span>
            </div>
            <p className="text-sm">
              Inspiring young minds through fun and educational DIY projects. Let's make science an adventure!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Safety Guidelines</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Parent Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Project Tips</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Backyard Scientist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
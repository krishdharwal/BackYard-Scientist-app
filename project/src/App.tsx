import type { FC } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { useThemeStore } from './store/themeStore';
import '@fontsource/abril-fatface';
import '@fontsource/poppins';
import './styles/gradients.css';

const App: FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`min-h-screen font-poppins ${
      isDarkMode ? 'dark text-gray-200' : 'text-gray-900'
    }`}>
      <div className="gradient-background min-h-screen">
        <Navbar  />
        <Hero />
        <main className="pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ProjectGrid />
        </main>
        <Footer />
       
      </div>
    </div>
  );
};

export default App;
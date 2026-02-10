import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {About} from "./components/About.tsx";
import { Skills } from "./components/Skills.tsx";
import { Experience } from "./components/Experience.tsx";
import { Project } from "./components/Project.tsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-[#f5f3ef] text-gray-900'} transition-colors duration-300`}>
            <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Project />
        </div>
    );
}

export default App;

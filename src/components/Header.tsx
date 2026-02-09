import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    onToggleDarkMode: () => void;
}

export function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
    return (
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="text-xl font-mono">&lt;LC/&gt;</div>

            <div className="flex items-center gap-8">
                <a href="#about" className="text-sm hover:opacity-70 transition-opacity">
                    Acerca de
                </a>
                <a href="#work" className="text-sm hover:opacity-70 transition-opacity">
                    Trabajo
                </a>
                <a href="#contact" className="text-sm hover:opacity-70 transition-opacity">
                    Contacto
                </a>

                <button
                    onClick={onToggleDarkMode}
                    className="p-2 hover:opacity-70 transition-opacity"
                    aria-label="Toggle theme"
                >
                    {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                    Descargar CV
                </button>
            </div>
        </nav>
    );
}

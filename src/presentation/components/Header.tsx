import { useMemo, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    onToggleDarkMode: () => void;
    contactEmail: string;
    cvUrl: string;
}

const navLinkClassName = 'text-sm hover:opacity-70 transition-opacity';
const actionButtonClassName = 'p-2 hover:opacity-70 transition-opacity';
const cvButtonClassName =
    'bg-gray-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200';

export function Header({ darkMode, onToggleDarkMode, contactEmail, cvUrl }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = useMemo(
        () => [
            { href: '#experience', label: 'Experiencia' },
            { href: '#about', label: 'Sobre mí' },
            { href: '#work', label: 'Proyectos' },
            { href: `mailto:${contactEmail}`, label: 'Contacto' },
        ],
        [contactEmail]
    );

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen((open) => !open);

    return (
        <header className="sticky top-0 z-50 bg-[#f5f3ef]/90 dark:bg-gray-900/90 backdrop-blur">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-mono">&lt;LC/&gt;</div>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className={navLinkClassName}>
                            {item.label}
                        </a>
                    ))}

                    <button
                        onClick={onToggleDarkMode}
                        className={actionButtonClassName}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <a href={cvUrl} download className={cvButtonClassName}>
                        Descargar CV
                    </a>
                </div>

                <button
                    type="button"
                    className="md:hidden p-2 hover:opacity-70 transition-opacity"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span className="block h-0.5 w-6 bg-gray-900 dark:bg-gray-100 mb-1.5" />
                    <span className="block h-0.5 w-6 bg-gray-900 dark:bg-gray-100 mb-1.5" />
                    <span className="block h-0.5 w-6 bg-gray-900 dark:bg-gray-100" />
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200/60 dark:border-gray-700/60">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={navLinkClassName}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 pt-2">
                            <button
                                onClick={onToggleDarkMode}
                                className={actionButtonClassName}
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                            </button>

                            <a href={cvUrl} download className={cvButtonClassName}>
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

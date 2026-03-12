import { useMemo, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
    darkMode: boolean;
    onToggleDarkMode: () => void;
    contactEmail: string;
    cvUrl: string;
}

const navLinkClassName = "text-sm hover:opacity-70 transition-opacity";
const actionButtonClassName = "p-2 hover:opacity-70 transition-opacity";
const cvButtonClassName =
    "bg-gray-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200";
const langButtonClassName =
    "px-3 py-2 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors";

const getLocale = (language: string | undefined) =>
    language?.toLowerCase().startsWith("es") ? "es" : "en";

export function Header({ darkMode, onToggleDarkMode, contactEmail, cvUrl }: HeaderProps) {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentLocale = getLocale(i18n.resolvedLanguage ?? i18n.language);
    const nextLocale = currentLocale === "es" ? "en" : "es";

    const navItems = useMemo(
        () => [
            { href: "#experience", label: t("nav.experience") },
            { href: "#about", label: t("nav.about") },
            { href: "#work", label: t("nav.work") },
            { href: `mailto:${contactEmail}`, label: t("nav.contact") },
        ],
        [contactEmail, t],
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
                        aria-label={t("a11y.toggleTheme")}
                    >
                        {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        onClick={() => i18n.changeLanguage(nextLocale)}
                        className={langButtonClassName}
                        aria-label={t("a11y.languageToggle", {
                            language: t(`language.${nextLocale}`),
                        })}
                    >
                        {nextLocale.toUpperCase()}
                    </button>

                    <a href={cvUrl} download className={cvButtonClassName}>
                        {t("header.downloadCv")}
                    </a>
                </div>

                <button
                    type="button"
                    className="md:hidden p-2 hover:opacity-70 transition-opacity"
                    aria-label={t("a11y.toggleMenu")}
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
                                aria-label={t("a11y.toggleTheme")}
                            >
                                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                            </button>

                            <button
                                onClick={() => i18n.changeLanguage(nextLocale)}
                                className={langButtonClassName}
                                aria-label={t("a11y.languageToggle", {
                                    language: t(`language.${nextLocale}`),
                                })}
                            >
                                {nextLocale.toUpperCase()}
                            </button>

                            <a href={cvUrl} download className={cvButtonClassName}>
                                {t("header.downloadCv")}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getPortfolio } from "../application/use-cases/getPortfolio";
import { PortfolioRepositoryImpl } from "../infrastructure/repositories/PortfolioRepositoryImpl";
import { About } from "../presentation/components/About";
import { Experience } from "../presentation/components/Experience";
import { Footer } from "../presentation/components/Footer";
import { Header } from "../presentation/components/Header";
import { Hero } from "../presentation/components/Hero";
import { Project } from "../presentation/components/Project";
import { Skills } from "../presentation/components/Skills";

function App() {
    const { t, i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
    const portfolio = useMemo(
        () => getPortfolio(new PortfolioRepositoryImpl(t)),
        [t, i18n.resolvedLanguage],
    );

    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "dark bg-gray-900 text-white"
                    : "bg-[#f5f3ef] text-gray-900"
            } transition-colors duration-300`}
        >
            <Header
                darkMode={darkMode}
                onToggleDarkMode={() => setDarkMode(!darkMode)}
                contactEmail={portfolio.profile.contactEmail}
                cvUrl={portfolio.profile.cvUrl}
            />
            <Hero profile={portfolio.profile} />
            <About about={portfolio.about} />
            <Skills skills={portfolio.skills} />
            <Experience experiences={portfolio.experiences} />
            <Project projects={portfolio.projects} />
            <Footer />
        </div>
    );
}

export default App;

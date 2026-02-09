import { MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export function Hero() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        Hola, soy Lázaro <span className="inline-block animate-wave">👋</span>
                    </h1>

                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-8">
                        Soy un desarrollador backend especializado en Spring, enfocado en construir APIs robustas,
                        escalables y de alto rendimiento que impulsan experiencias digitales excepcionales. Aunque llevo
                        desarrollando aplicaciones backend de forma profesional por más de 2 años, mi pasión por la
                        programación comenzó como autodidacta y todavía abordo cada desafío técnico con la misma
                        curiosidad y entusiasmo que el primer día.
                    </p>

                    <div className="flex items-center gap-2 text-gray-900 dark:text-gray-300 mb-8">
                        <MapPin size={18} />
                        <span className="text-sm">Habana, Cuba</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/lazxdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:opacity-70 transition-opacity"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://x.com/lazxdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:opacity-70 transition-opacity"
                            aria-label="Twitter"
                        >
                            <Twitter size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/l%C3%A1zaro-campos-858864298/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:opacity-70 transition-opacity"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                            src="/lazaro_hero.png"
                            alt="Lázaro"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

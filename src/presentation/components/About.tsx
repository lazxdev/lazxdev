import { useTranslation } from "react-i18next";
import type { About as AboutData } from "../../domain/entities/About";

interface AboutProps {
    about: AboutData;
}

export function About({ about }: AboutProps) {
    const { t } = useTranslation();

    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="about">
            <div className="flex justify-center mb-12">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    {t("about.badge")}
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex justify-center md:justify-start">
                    <div className="w-72 h-80 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                            src={about.image}
                            alt={t("about.imageAlt")}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold mb-8">{about.title}</h2>

                    <div className="space-y-4 text-gray-900 dark:text-gray-300 leading-relaxed">
                        {about.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

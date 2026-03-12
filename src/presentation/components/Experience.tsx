import { useTranslation } from "react-i18next";
import type { Experience as ExperienceData } from "../../domain/entities/Experience";

interface ExperienceProps {
    experiences: ExperienceData[];
}

export function Experience({ experiences }: ExperienceProps) {
    const { t } = useTranslation();

    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="experience">
            <div className="flex justify-center mb-6">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    {t("experience.badge")}
                </span>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">{t("experience.title")}</h2>
            </div>

            <div className="space-y-6">
                {experiences.map((experience) => (
                    <article
                        key={`${experience.company}-${experience.role}`}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm px-6 py-6"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {experience.company}
                            </div>

                            <div className="flex-1 md:px-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                    {experience.role}
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                    {experience.bullets.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-sm text-gray-700 dark:text-gray-300 md:text-right md:min-w-[140px]">
                                {experience.dates}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

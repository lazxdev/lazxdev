import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "JWT Toolkit ",
        description:
            "Aplicación web ligera y de código abierto para decodificar, codificar y explorar JSON Web Tokens (JWT) desde tu navegador.",
        tags: [
            "React",
            "Typescript",
            "JWT",
            "HTML",
            "CSS",
            "Web Crypto API",
            "Git",
        ],
        image: "/jwt_toolkit_project.png",
        href: "https://jwtoolkit.vercel.app/",
        repo: "https://github.com/lazxdev/Jwt-Toolkit",
    },
];

export function Project() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="work">
            <div className="flex justify-center mb-6">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    Proyectos
                </span>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">
                    Some of the noteworthy projects I have built:
                </h2>
            </div>

            <div className="space-y-10">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden"
                    >
                        <div className="grid gap-0 md:grid-cols-2">
                            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-6 md:p-10 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="w-full max-w-[560px] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-8 md:p-10 flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center gap-3">
                                    <a
                                        href={project.href}
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.title}`}
                                    >
                                        <ArrowUpRight size={18} />
                                    </a>
                                    <a
                                        href={project.repo}
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.title} repository`}
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

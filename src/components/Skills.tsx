const skills = [
    { name: "Java", icon: "java"},
    { name: "Typescript", icon: "ts" },
    { name: "Javascript", icon: "js" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Spring", icon: "spring" },
    { name: "Nest.js", icon: "nestjs" },
    { name: "Express", icon: "express" },
    { name: "Node.js", icon: "nodejs" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Mysql", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "Hibernate", icon: "hibernate" },
    { name: "Prisma", icon: "prisma" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "Gitlab", icon: "gitlab" },
    { name: "GitHub", icon: "github" },
    { name: "Maven", icon: "maven" },
    { name: "Gradle", icon: "gradle" },
    { name: "Postman", icon: "postman" },
    { name: "Linux", icon: "linux" },
];

export function Skills() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="skills">
            <div className="flex justify-center mb-6">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    Habilidades
                </span>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">
                    Las habilidades, herramientas y tecnologias en las que destaco:
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.icon}
                        className="flex flex-col items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="w-8 h-8"
                                loading="lazy"
                            />
                        </div>
                        <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

const experiences = [
    {
        company: "Xetid",
        role: "Junior Backend Developer",
        dates: "Oct 2023 - Presente",
        bullets: [
            "Desarrollo y mantenimiento de APIs REST para aplicaciones empresariales utilizando Java y Spring Boot.",
            "Implementación de seguridad y control de acceso mediante Spring Security, autenticación basada en JWT e\n" +
            "integración con WSO2 Identity Server para la gestión de identidades.",
            "Diseño y gestión de la capa de persistencia utilizando JPA/Hibernate, trabajando con bases de datos\n" +
            "PostgreSQL y MySQL.",
            "Construcción de controladores y servicios backend usando Spring MVC y Spring WebFlux, aplicando\n" +
            "programación reactiva en servicios específicos.",
            "Contenerización de aplicaciones mediante Docker para entornos de desarrollo y despliegue.",
            "Uso de Git y GitLab para control de versiones, gestión de ramas, revisión de código y flujos de trabajo\n" +
            "colaborativos.",
            "Colaboración activa en equipos multidisciplinarios bajo metodologías Ágiles (SCRUM), participando en el\n" +
            "análisis de requerimientos técnicos y funcionales.",
        ],
    },
];

export function Experience() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="experience">
            <div className="flex justify-center mb-6">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    Experiencia laboral
                </span>
            </div>

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">
                    Aquí hay un resumen rápido de mis experiencias más recientes:
                </h2>
            </div>

            <div className="space-y-6">
                {experiences.map((experience) => (
                    <article
                        key={`${experience.company}-${experience.role}`}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm px-6 py-6"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div className="text-lg font-semibold text-emerald-600">
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

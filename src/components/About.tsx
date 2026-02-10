export function About() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="about">
            <div className="flex justify-center mb-12">
                <span className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full">
                    Sobre mí
                </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex justify-center md:justify-start">
                    <div className="w-72 h-80 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                            src="/lazaro_about.png"
                            alt="Sobre mí"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold mb-8">
                        Aquí un breve resumen sobre mí:
                    </h2>

                    <div className="space-y-4 text-gray-900 dark:text-gray-300 leading-relaxed">
                        <p>
                            Soy desarrollador backend con más de dos años de experiencia profesional en el
                            desarrollo de aplicaciones empresariales, especializado en Java y el ecosistema Spring. Me motiva
                            construir la lógica de negocio y la arquitectura que sostiene productos digitales escalables, seguros
                            y mantenibles, cuidando especialmente el rendimiento de las APIs y la calidad del código.
                        </p>

                        <p>
                            Inicié mi camino en el desarrollo backend de forma autodidacta en 2021 y, desde mi incorporación al entorno
                            profesional en 2023, he trabajado en el diseño, desarrollo y mantenimiento de APIs REST utilizando Spring Boot,
                            Spring MVC y Spring WebFlux. Tengo experiencia implementando mecanismos de seguridad y autenticación con Spring
                            Security, JWT e integración con WSO2 Identity Server, así como en el diseño de la capa de persistencia con JPA/Hibernate
                            y bases de datos relacionales como PostgreSQL y MySQL.
                        </p>

                        <p>
                            He participado en proyectos desarrollados bajo metodologías ágiles (SCRUM), colaborando con equipos multidisciplinarios,
                            utilizando control de versiones con Git y GitLab, y contenedores Docker para entornos de desarrollo y despliegue. Además,
                            cuento con experiencia complementaria en el ecosistema Node.js, trabajando con NestJS y Express.
                        </p>

                        <p>
                            Disfruto especialmente transformar requerimientos funcionales y de negocio en soluciones técnicas claras y bien estructuradas,
                            abarcando todo el ciclo del desarrollo backend: desde el modelado de datos y la arquitectura hasta la implementación de APIs seguras,
                            documentadas y listas para producción.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

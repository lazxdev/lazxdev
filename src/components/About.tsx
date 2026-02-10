export function About() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" id="about">
            <div className="flex justify-center mb-12">
                <a href="#about" className="text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full hover:opacity-70 transition-opacity">
                    Sobre mí
                </a>
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
                        ¿Curioso sobre mí? Aquí lo tienes:
                    </h2>

                    <div className="space-y-4 text-gray-900 dark:text-gray-300 leading-relaxed">
                        <p>
                            Soy un desarrollador apasionado, de formación autodidacta, que se especializa en desarrollo backend con Spring. Me entusiasma dar vida a la lógica empresarial y arquitectura de los productos digitales. La escalabilidad, el rendimiento de las APIs y escribir código limpio, mantenible y eficiente son temas que me interesan profundamente.
                        </p>

                        <p>
                            Comencé mi camino como desarrollador backend en 2021 de forma autodidacta, y desde mi graduación en 2023 he continuado creciendo y evolucionando profesionalmente, enfrentándome a desafíos técnicos complejos y profundizando en las mejores prácticas del desarrollo con Java y Spring. He tenido la oportunidad de trabajar con tecnologías diversas como Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, y aprendiendo constantemente sobre arquitecturas de microservicios y sistemas distribuidos.
                        </p>

                        <p>
                            Disfruto especialmente del proceso de transformar requisitos empresariales en soluciones técnicas, trabajando en el ciclo completo del desarrollo backend desde el diseño de la base de datos hasta la implementación de APIs seguras y documentadas.
                        </p>

                        <p>
                            Cuando no estoy inmerso en código, puedes encontrarme explorando nuevas tecnologías en comunidades de desarrolladores, contribuyendo a proyectos open source o profundizando en arquitectura de software. Puedes seguir mi evolución profesional en GitHub, donde comparto proyectos de aprendizaje, o en LinkedIn donde conectó con la comunidad técnica.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

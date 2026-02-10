import type { Experience } from "../../domain/entities/Experience";

export const experienceData: Experience[] = [
    {
        company: "Xetid",
        role: "Junior Backend Developer",
        dates: "Oct 2023 - Presente",
        bullets: [
            "Desarrollo y mantenimiento de APIs REST para aplicaciones empresariales utilizando Java y Spring Boot.",
            "Implementación de seguridad y control de acceso mediante Spring Security, autenticación basada en JWT e integración con WSO2 Identity Server para la gestión de identidades.",
            "Diseño y gestión de la capa de persistencia utilizando JPA/Hibernate, trabajando con bases de datos PostgreSQL y MySQL.",
            "Construcción de controladores y servicios backend usando Spring MVC y Spring WebFlux, aplicando programación reactiva en servicios específicos.",
            "Contenerización de aplicaciones mediante Docker para entornos de desarrollo y despliegue.",
            "Uso de Git y GitLab para control de versiones, gestión de ramas, revisión de código y flujos de trabajo colaborativos.",
            "Colaboración activa en equipos multidisciplinarios bajo metodologías Ágiles (SCRUM), participando en el análisis de requerimientos técnicos y funcionales.",
        ],
    },
];

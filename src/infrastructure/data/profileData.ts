import type { Profile } from "../../domain/entities/Profile";

export const profileData: Profile = {
    headline: "Hola, soy",
    name: "Lázaro",
    summary:
        "Soy un desarrollador backend con más de 2 años de experiencia profesional en el desarrollo de aplicaciones empresariales utilizando Java y Spring Boot, así como tecnologías Node.js con NestJS y Express. Especializado en el diseño y desarrollo de APIs REST, implementación de mecanismos de seguridad y autenticación, trabajo con arquitecturas escalables y mantenibles. Experiencia en entornos colaborativos bajo metodologías ágiles, aplicando buenas prácticas de desarrollo, control de versiones y mejora continua del software.",
    location: "Habana, Cuba",
    heroImage: "/lazaro_hero.png",
    socials: [
        {
            provider: "github",
            url: "https://github.com/lazxdev",
            label: "GitHub",
        },
        {
            provider: "twitter",
            url: "https://x.com/lazxdev",
            label: "Twitter",
        },
        {
            provider: "linkedin",
            url: "https://www.linkedin.com/in/l%C3%A1zaro-campos-858864298/",
            label: "LinkedIn",
        },
    ],
    contactEmail: "lazaromanuel65@gmail.com",
    cvUrl: "/cv.pdf",
};

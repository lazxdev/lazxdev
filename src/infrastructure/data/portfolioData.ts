import type { Portfolio } from "../../domain/entities/Portfolio";
import { aboutData } from "./aboutData";
import { experienceData } from "./experienceData";
import { profileData } from "./profileData";
import { projectsData } from "./projectsData";
import { skillsData } from "./skillsData";

export const portfolioData: Portfolio = {
    profile: profileData,
    about: aboutData,
    skills: skillsData,
    experiences: experienceData,
    projects: projectsData,
};

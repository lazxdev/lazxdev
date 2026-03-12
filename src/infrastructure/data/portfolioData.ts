import type { TFunction } from "i18next";
import type { Portfolio } from "../../domain/entities/Portfolio";
import { getAboutData } from "./aboutData";
import { getExperienceData } from "./experienceData";
import { getProfileData } from "./profileData";
import { getProjectsData } from "./projectsData";
import { getSkillsData } from "./skillsData";

export const getPortfolioData = (t: TFunction): Portfolio => {
    return {
        profile: getProfileData(t),
        about: getAboutData(t),
        skills: getSkillsData(t),
        experiences: getExperienceData(t),
        projects: getProjectsData(t),
    };
};

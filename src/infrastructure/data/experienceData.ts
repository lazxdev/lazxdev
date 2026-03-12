import type { TFunction } from "i18next";
import type { Experience } from "../../domain/entities/Experience";

export const getExperienceData = (t: TFunction): Experience[] => {
    return t("experience.items", { returnObjects: true }) as Experience[];
};

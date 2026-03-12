import type { TFunction } from "i18next";
import type { Skill } from "../../domain/entities/Skill";

export const getSkillsData = (t: TFunction): Skill[] => {
    return t("skills.items", { returnObjects: true }) as Skill[];
};

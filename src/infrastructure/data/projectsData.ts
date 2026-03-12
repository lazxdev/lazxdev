import type { TFunction } from "i18next";
import type { Project } from "../../domain/entities/Project";

export const getProjectsData = (t: TFunction): Project[] => {
    return t("projects.items", { returnObjects: true }) as Project[];
};

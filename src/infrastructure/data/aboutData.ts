import type { TFunction } from "i18next";
import type { About } from "../../domain/entities/About";

export const getAboutData = (t: TFunction): About => {
    return {
        title: t("about.title"),
        image: t("about.image"),
        paragraphs: t("about.paragraphs", { returnObjects: true }) as About["paragraphs"],
    };
};

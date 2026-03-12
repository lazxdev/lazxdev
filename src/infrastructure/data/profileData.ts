import type { TFunction } from "i18next";
import type { Profile } from "../../domain/entities/Profile";

export const getProfileData = (t: TFunction): Profile => {
    return {
        headline: t("profile.headline"),
        name: t("profile.name"),
        summary: t("profile.summary"),
        location: t("profile.location"),
        heroImage: t("profile.heroImage"),
        socials: t("profile.socials", { returnObjects: true }) as Profile["socials"],
        contactEmail: t("profile.contactEmail"),
        cvUrl: t("profile.cvUrl"),
    };
};

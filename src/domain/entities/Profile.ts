import type { SocialLink } from "./SocialLink";

export interface Profile {
    name: string;
    headline: string;
    summary: string;
    location: string;
    heroImage: string;
    socials: SocialLink[];
    contactEmail: string;
    cvUrl: string;
}

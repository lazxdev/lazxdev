export type SocialProvider = "github" | "twitter" | "linkedin";

export interface SocialLink {
    provider: SocialProvider;
    url: string;
    label: string;
}

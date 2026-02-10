import type { About } from "./About";
import type { Experience } from "./Experience";
import type { Profile } from "./Profile";
import type { Project } from "./Project";
import type { Skill } from "./Skill";

export interface Portfolio {
    profile: Profile;
    about: About;
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
}

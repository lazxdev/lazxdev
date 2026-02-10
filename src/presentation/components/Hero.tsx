import { MapPin, Github, Twitter, Linkedin } from "lucide-react";
import type { Profile } from "../../domain/entities/Profile";

const socialIcons = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
};

interface HeroProps {
    profile: Profile;
}

export function Hero({ profile }: HeroProps) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        {profile.headline} {profile.name}{" "}
                        <span className="inline-block animate-wave">👋</span>
                    </h1>

                    <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-8">
                        {profile.summary}
                    </p>

                    <div className="flex items-center gap-2 text-gray-900 dark:text-gray-300 mb-8">
                        <MapPin size={18} />
                        <span className="text-sm">{profile.location}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {profile.socials.map((social) => {
                            const Icon = socialIcons[social.provider];
                            return (
                                <a
                                    key={social.provider}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:opacity-70 transition-opacity"
                                    aria-label={social.label}
                                >
                                    <Icon size={22} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <img
                            src={profile.heroImage}
                            alt={profile.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

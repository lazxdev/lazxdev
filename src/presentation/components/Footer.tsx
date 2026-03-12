import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="max-w-6xl mx-auto px-6 py-8">
            <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                &copy; {year} | {t("footer.rights")}
            </p>
        </footer>
    );
}

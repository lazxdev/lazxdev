export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="max-w-6xl mx-auto px-6 py-8">
            <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                &copy; {year} | Todos los derechos reservados
            </p>
        </footer>
    );
}

import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-primary-light text-black px-4 py-3 flex flex-wrap items-center justify-evenly">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="src/assets/icon.jpg"
                    alt="ShopRadar Logo"
                    className="h-8 w-8"
                />
                <h2
                    className="text-transparent bg-clip-text font-bold text-xl sm:text-2xl"
                    style={{ backgroundImage: "var(--color-gradient-light)" }}
                >
                    ShopRadar
                </h2>
            </div>

            {/* Botón hamburguesa para móviles */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden flex items-center px-3 py-2 border rounded text-black border-black"
                aria-label="Toggle menu"
            >
                <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        // Icono X para cerrar
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    ) : (
                        // Icono hamburguesa (3 líneas)
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    )}
                </svg>
            </button>

            {/* Menú de navegación */}
            <nav
                className={`
    overflow-hidden
    transition-none   /* Sin transición para apertura/cierre inmediato */
    sm:flex sm:space-x-4 mt-2 sm:mt-0 w-full sm:w-auto
    ${isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}
    sm:opacity-100 sm:max-h-full
    `}
            >
                <a
                    href="/"
                    className="relative group text-black text-sm sm:text-base block px-2 py-2 sm:py-0 sm:inline-block"
                    onClick={() => setIsOpen(false)}
                >
                    Inicio
                    <span
                        className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                    ></span>
                </a>
                <a
                    href="/ofertas"
                    className="relative group text-black text-sm sm:text-base block px-2 py-2 sm:py-0 sm:inline-block"
                    onClick={() => setIsOpen(false)}
                >
                    Ofertas
                    <span
                        className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                    ></span>
                </a>
                <a
                    href="/supermercados"
                    className="relative group text-black text-sm sm:text-base block px-2 py-2 sm:py-0 sm:inline-block"
                    onClick={() => setIsOpen(false)}
                >
                    Supermercados
                    <span
                        className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                    ></span>
                </a>
                <a
                    href="/contacto"
                    className="relative group text-black text-sm sm:text-base block px-2 py-2 sm:py-0 sm:inline-block"
                    onClick={() => setIsOpen(false)}
                >
                    Contacto
                    <span
                        className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                    ></span>
                </a>
            </nav>
        </header>
    );
}

export default Header;

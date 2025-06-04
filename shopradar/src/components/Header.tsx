import { useState } from "react";
import HamburguesaAbierta from "./icons/HamburguesaAbierta";
import HamburguesaCerrada from "./icons/HamburguesaCerrada";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            {/* Nav Desktop */}
            <nav className="sticky top-0 z-50 bg-primary-light text-black px-4 py-3 flex flex-wrap items-center justify-evenly hidden sm:flex">
                <div className="flex items-center space-x-2">
                    <img
                        src="src/assets/icon.jpg"
                        alt="ShopRadar Logo"
                        className="size-8"
                    />
                    <h2
                        className="text-transparent bg-clip-text font-bold text-xl sm:text-2xl"
                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                    >
                        ShopRadar
                    </h2>
                </div>

                <ul className="flex space-x-4">
                    {["Inicio", "Ofertas", "Supermercados", "Contacto"].map((item) => {
                        const path = item === "Inicio" ? "/" : `/${item.toLowerCase()}`;

                        return (
                            <a
                                key={item}
                                href={path}
                                className="relative group text-black text-sm sm:text-base block px-2 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                                    style={{ backgroundImage: "var(--color-gradient-light)" }}
                                ></span>
                            </a>
                        );
                    })}

                </ul>
            </nav>

            {/* Nav Mobile */}
            <nav className="sm:hidden bg-primary-light text-black px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img
                            src="src/assets/icon.jpg"
                            alt="ShopRadar Logo"
                            className="h-8 w-8"
                        />
                        <h2
                            className="text-transparent bg-clip-text font-bold text-xl"
                            style={{ backgroundImage: "var(--color-gradient-light)" }}
                        >
                            ShopRadar
                        </h2>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >

                        {isOpen ? (
                            <HamburguesaCerrada/>
                        ) : (
                            <HamburguesaAbierta/>
                        )}
                    </button>
                </div>

                {/* Menú colapsable*/}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 mt-4" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col space-y-2">
                        {["Inicio", "Ofertas", "Supermercados", "Contacto"].map((item) => {
                            const path = item === "Inicio" ? "/" : `/${item.toLowerCase()}`;

                            return (
                                <a
                                    key={item}
                                    href={path}
                                    className="relative group text-black text-sm sm:text-base block px-2 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                    <span
                                        className="absolute left-0 bottom-0 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                                        style={{ backgroundImage: "var(--color-gradient-light)" }}
                                    ></span>
                                </a>
                            );
                        })}

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

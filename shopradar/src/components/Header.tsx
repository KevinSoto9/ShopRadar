function Header() {
    return (
        <header className="bg-background-primary-dark text-white p-4 flex justify-around items-center">
            <div className="flex items-center justify-center">
                <img
                    src="src/assets/icon.jpg"
                    alt="ShopRadar Logo"
                    className="h-8 w-8 inline-block mr-2"
                />
                <h2
                    className="text-transparent bg-clip-text font-bold text-2xl"
                    style={{ backgroundImage: "var(--color-gradient-light)" }}
                >
                    Shop Radar
                </h2>

                <span className="text-xl font-bold">ShopRadar</span>
            </div>
            <div>
                <nav className="flex space-x-4">
                    <a  
                        href="/" 
                        className="relative group text-gray-900">
                        Inicio
                        <span
                            className="absolute left-0 -bottom-1 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                                backgroundImage: "var(--color-gradient-light)",
                            }}
                        ></span>
                    </a>
                    <a
                        href="/ofertas"
                        className="relative group text-gray-900"
                    >
                        Ofertas
                        <span
                            className="absolute left-0 -bottom-1 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                                backgroundImage: "var(--color-gradient-light)",
                            }}
                        ></span>
                    </a>
                    <a
                        href="/supermercados"
                        className="relative group text-gray-900"
                    >
                        Supermercados
                        <span
                            className="absolute left-0 -bottom-1 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                                backgroundImage: "var(--color-gradient-light)",
                            }}
                        ></span>
                    </a>
                    <a
                        href="/contacto"
                        className="relative group text-gray-900"
                    >
                        Contacto
                        <span
                            className="absolute left-0 -bottom-1 h-[2px] w-full rounded opacity-0 group-hover:opacity-100 transition-all"
                            style={{
                                backgroundImage: "var(--color-gradient-light)",
                            }}
                        ></span>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;

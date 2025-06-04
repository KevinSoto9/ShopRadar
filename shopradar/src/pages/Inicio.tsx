import ContactoIcon from "../components/icons/Contacto";
import DescuentoIcon from "../components/icons/DescuentoIcon";
import SupermercadoIcon from "../components/icons/SupermercadoIcon";

function Inicio() {
    return (
        <>
            <section
                style={{ backgroundImage: "var(--color-gradient-light)" }}
                className="w-screen px-4 pb-30 pt-20 flex flex-col items-center justify-center relative "
            >
                <h1 className="text-4xl sm:text-6xl text-gray-200 font-bold text-center mb-5 text-balance">
                    Encuentra los{" "}
                    <span className="font-extrabold text-white">mejores productos</span>
                </h1>

                <p className="text-base sm:text-xl text-center text-white text-balance max-w-screen-md">
                    Compara precios en tiempo real de todos los productos de los
                    supermercados más populares en España con una sola búsqueda
                </p>

                <div className="mt-10">
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
                            <DescuentoIcon />
                            <a href="/ofertas">Ofertas</a>
                        </li>
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
                            <SupermercadoIcon />
                            <a href="/supermercados">Supermercados</a>
                        </li>
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/30 transition-colors">
                            <ContactoIcon />
                            <a href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section>

            </section>
        </>
    );
}

export default Inicio;

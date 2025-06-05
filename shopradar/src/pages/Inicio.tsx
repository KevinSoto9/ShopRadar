import ContactoIcon from "../components/icons/Contacto";
import DescuentoIcon from "../components/icons/DescuentoIcon";
import SupermercadoIcon from "../components/icons/SupermercadoIcon";
import Buscador from "../components/Buscador";
import Leche from "../components/icons/Leche";
import Frutas from "../components/icons/Frutas";
import Pan from "../components/icons/Pan";
import Carne from "../components/icons/Carne";

function Inicio() {
    return (
        <>
            <section
                style={{ backgroundImage: "var(--color-gradient-light)" }}
                className="w-full px-4 pb-30 pt-20 flex flex-col items-center justify-center relative "
            >
                <h1 className="text-4xl sm:text-6xl text-white font-Zodiak text-center mb-5 text-balance">
                    Encuentra los{" "}
                    <span className="font-extrabold">mejores productos</span>
                </h1>

                <p className="text-base sm:text-xl text-center font-Switzer text-white text-balance max-w-screen-md">
                    Compara precios en tiempo real de todos los productos de los
                    supermercados más populares en España con una sola búsqueda
                </p>

                <div className="mt-10 font-Switzer">
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                            <DescuentoIcon />
                            <a href="/ofertas">Ofertas</a>
                        </li>
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                            <SupermercadoIcon />
                            <a href="/supermercados">Supermercados</a>
                        </li>
                        <li className="flex flex-row gap-x-2 justify-center items-center bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                            <ContactoIcon />
                            <a href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="max-w-4xl mx-auto px-4 mt-10 font-Switzer">
                    <Buscador />
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 flex flex-col justify-center items-center text-center mb-26">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 font-Zodiak">
                    ¿Qué producto buscas hoy?
                </h2>
                <p className="text-gray-600 mb-4 text-xl font-Switzer">
                    Encuentra los mejores precios en los supermercados más populares
                    de España.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10 font-Switzer w-full">
                    <span className="flex flex-col items-center justify-center gap-2 bg-blue-500 px-18 py-8 rounded-xl">
                        <Leche/>
                        <p>
                            Lácteos
                        </p>
                    </span>
                    <span className="flex flex-col items-center justify-center gap-2 bg-green-500 px-18 py-8 rounded-xl">
                        <Frutas/>
                        <p>
                            Frutas
                        </p>
                    </span >
                    <span className="flex flex-col items-center justify-center gap-2 bg-orange-400 px-18 py-8 rounded-xl">
                        <Pan/>
                        <p>
                            Panadería
                        </p>
                    </span>
                    <span className="flex flex-col items-center justify-center gap-2 bg-red-500 px-18 py-8 rounded-xl">
                        <Carne/>
                        <p>
                            Carnes
                        </p>
                    </span>
                </div>

                <div className="flex md:flex-row flex-col md:gap-30 gap-10 items-center justify-evenly shadow-lg backdrop-blur-md rounded-2xl p-6 mt-10 w-full font-Switzer">
                    <span className="text-blue-500 text-3xl flex flex-col items-center justify-center gap-2 font-bold">
                        50 +
                        <p className="text-gray-700 text-base font-normal">
                            Supermercados 
                        </p>
                    </span>
                    <span className="text-green-500 text-3xl flex flex-col items-center justify-center gap-2 font-bold">
                        10K +
                        <p className="text-gray-700 text-base font-normal">
                            Productos
                        </p>
                    </span>
                    <span className="text-orange-400 text-3xl flex flex-col items-center justify-center gap-2 font-bold">
                        30 %
                        <p className="text-gray-700 text-base font-normal">
                            Ahorro Promedio
                        </p>
                    </span>
                </div>
            </section>

        </>
    );
}

export default Inicio;

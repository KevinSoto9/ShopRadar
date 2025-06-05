import { useState, useEffect } from "react";
import ContactoIcon from "../components/icons/Contacto";
import DescuentoIcon from "../components/icons/DescuentoIcon";
import SupermercadoIcon from "../components/icons/SupermercadoIcon";
import Buscador from "../components/Buscador";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import ContenidoInicio from "../components/ContenidoInicio";
import Loader from "../components/Loader";
import type { ProductWithSupermarket } from "../services/searchProducts";

function Inicio() {
    const [resultados, setResultados] = useState<ProductWithSupermarket[]>([]);
    const [busquedaRealizada, setBusquedaRealizada] = useState(false);
    const [mostrarLoader, setMostrarLoader] = useState(false);

    const handleBusqueda = (nuevosResultados: ProductWithSupermarket[], realizada: boolean) => {
        setMostrarLoader(true);
        setBusquedaRealizada(realizada);
        setResultados(nuevosResultados);
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        if (mostrarLoader) {
            timeoutId = setTimeout(() => {
                setMostrarLoader(false);
            }, 1500);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [mostrarLoader]);

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
                    <Buscador onBusqueda={handleBusqueda} />
                </div>
            </section>

            {busquedaRealizada ? (
                <section className="max-w-7xl mx-auto px-4 py-8">
                    {mostrarLoader ? (
                        <Loader />
                    ) : (
                        <ResultadosBusqueda 
                            resultados={resultados} 
                            busquedaRealizada={busquedaRealizada} 
                        />
                    )}
                </section>
            ) : (
                <ContenidoInicio />
            )}
        </>
    );
}

export default Inicio;

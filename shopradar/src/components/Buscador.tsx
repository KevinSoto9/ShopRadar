import { useState } from "react";
import Lupa from "./icons/Lupa";
import ElementoBusqueda from "./ElementoBusqueda";
import { searchProducts } from "../services/searchProducts";
import type { ProductWithSupermarket } from "../services/searchProducts";

interface BuscadorProps {
    onBusqueda: (resultados: ProductWithSupermarket[], busquedaRealizada: boolean) => void;
}

function Buscador({ onBusqueda }: BuscadorProps) {
    const [busqueda, setBusqueda] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBusqueda(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const resultadosBusqueda = searchProducts(busqueda);
        onBusqueda(resultadosBusqueda, true);
    };

    const handleBusquedaRapida = (termino: string): void => {
        setBusqueda(termino);
        const resultadosBusqueda = searchProducts(termino);
        onBusqueda(resultadosBusqueda, true);
    };

    const isInputEmpty = busqueda.trim() === "";

    return (
        <div className="relative -top-20 bg-white shadow-2xl rounded-2xl p-7 max-w-4xl mx-auto mb-4 z-50">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center mt-2">
                <div className="relative flex-1 w-full">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Lupa />
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={busqueda}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/50"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isInputEmpty}
                    style={{ backgroundImage: "var(--color-gradient-light)" }}
                    className={`flex items-center justify-center gap-x-3 font-bold text-white sm:w-1/4 w-full px-px py-4 rounded-xl transition-all duration-300 ease-in-out transform ${
                        isInputEmpty
                            ? "opacity-60 cursor-not-allowed"
                            : "opacity-100 hover:scale-105 hover:cursor-pointer"
                    }`}
                >
                    <Lupa /> Buscar
                </button>
            </form>
            <div className="flex flex-wrap mt-6 text-gray-500 text-sm gap-4 items-center">
                <span className="font-bold">Búsquedas populares:</span>
                <ElementoBusqueda nombre="Leche" onClick={() => handleBusquedaRapida("Leche")} />
                <ElementoBusqueda nombre="Pan" onClick={() => handleBusquedaRapida("Pan")} />
                <ElementoBusqueda nombre="Carne" onClick={() => handleBusquedaRapida("Carne")} />
                <ElementoBusqueda nombre="Frutas" onClick={() => handleBusquedaRapida("Frutas")} />
                <ElementoBusqueda nombre="Verduras" onClick={() => handleBusquedaRapida("Verduras")} />
            </div>
        </div>
    );
}

export default Buscador;

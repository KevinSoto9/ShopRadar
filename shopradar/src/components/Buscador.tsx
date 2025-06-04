import { useState } from "react";
import Lupa from "./icons/Lupa";
import ElementoBusqueda from "./ElementoBusqueda";

function Buscador() {
    const [busqueda, setBusqueda] = useState("");


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBusqueda(e.target.value);
    };

    const isInputEmpty = busqueda.trim() === "";

    return (
        <div className="relative -top-20 bg-white shadow-2xl rounded-xl p-7 max-w-4xl mx-auto mb-4 z-50">
            <form className="flex flex-col md:flex-row gap-4 items-center mt-2">
                <div className="relative flex-1">
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
                    className={`flex items-center justify-center gap-x-3 font-bold text-white px-20 xs:px-10 py-4 rounded-xl transition-all duration-300 ease-in-out transform ${isInputEmpty
                            ? "opacity-60 cursor-not-allowed"
                            : "opacity-100 hover:scale-105"
                        }`}
                >
                    <Lupa /> Buscar
                </button>
            </form>
            <div className="flex flex-wrap mt-8 text-gray-500 text-sm mb-2 gap-4 items-center">
                <span className="font-bold">Búsquedas populares:</span>
                <ElementoBusqueda nombre="Leche" />
                <ElementoBusqueda nombre="Pan" />
                <ElementoBusqueda nombre="Carne" />
                <ElementoBusqueda nombre="Frutas" />
                <ElementoBusqueda nombre="Verduras" />
            </div>
        </div>
    );
}

export default Buscador;

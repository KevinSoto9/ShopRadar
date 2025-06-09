import Leche from "./icons/Leche";
import Frutas from "./icons/Frutas";
import Pan from "./icons/Pan";
import Carne from "./icons/Carne";

function ContenidoInicio() {
  return (
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
                        4
                        <p className="text-gray-700 text-base font-normal">
                            Supermercados 
                        </p>
                    </span>
                    <span className="text-green-500 text-3xl flex flex-col items-center justify-center gap-2 font-bold">
                        155
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
  );
}

export default ContenidoInicio;
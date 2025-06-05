import Lupa from "./icons/Lupa";

export default function Loader() {
    return (
        <div className="flex justify-center items-center font-Switzer mb-20 text-balance text-center">
            <div className="flex flex-col items-center justify-center">
                <span 
                style={{ backgroundImage: "var(--color-gradient-light)" }}
                className="text-white text-xl backdrop-blur-md rounded-full p-4"><Lupa />
                </span>
                <div className="w-16 h-16 border-4 border-blue-500 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>

                <h3 className="text-3xl font-semibold  mt-8">
                    Buscando los mejores precios...
                </h3>

                <p className="text-lg text-gray-700 mt-2">
                    Estamos comparando precios en tiempo real
                </p>

                <p className=" text-md text-gray-500 mt-2">
                    Esto puede tardar unos segundos
                </p>

            </div>
        </div>
    );
} 
interface ElementoBusquedaProps {
    nombre: string;
    onClick?: () => void;
}

function ElementoBusqueda({ nombre, onClick }: ElementoBusquedaProps) {
    return (
        <button
            onClick={onClick}
            className="hover:text-black transition-colors duration-300 bg-gray-300/30 font-medium backdrop-blur-md px-4 py-2 rounded-full hover:bg-orange-400/20 hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer"
        >
            {nombre}
        </button>
    );
}

export default ElementoBusqueda;

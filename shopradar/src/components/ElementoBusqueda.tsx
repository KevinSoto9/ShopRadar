type ElementoBusquedaProps = {
    nombre: string;
};

function ElementoBusqueda({ nombre }: ElementoBusquedaProps) {
    return (
        <span className="bg-gray-300/30 font-medium backdrop-blur-md px-4 py-2 rounded-full hover:bg-orange-400/20 hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer">
            {nombre}
        </span>
    );
}

export default ElementoBusqueda;

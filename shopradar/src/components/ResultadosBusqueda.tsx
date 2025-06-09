import type { ProductWithSupermarket } from '../services/searchProducts';

interface ResultadosBusquedaProps {
    resultados: ProductWithSupermarket[];
    busquedaRealizada: boolean;
}

interface ProductoConOferta extends ProductWithSupermarket {
    originalPrice?: number;
    discount?: number;
}

export default function ResultadosBusqueda({ resultados, busquedaRealizada }: ResultadosBusquedaProps) {
    if (!busquedaRealizada) {
        return null;
    }

    if (resultados.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No se encontraron productos que coincidan con la búsqueda.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-30 text-balance">
            {resultados.map((producto) => {
                const productoConOferta = producto as ProductoConOferta;
                return (
                    <div key={producto.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48">
                            <img 
                                src={producto.image} 
                                alt={producto.name}
                                className="w-full h-full object-cover"
                            />
                            <span className='text-sm font-bold text-black absolute top-2 left-2 bg-white/40 backdrop-blur-md px-2 py-1 rounded-full'>{producto.supermarket}</span>
                            {productoConOferta.discount && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                                    -{productoConOferta.discount}%
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{producto.name}</h3>
                                <div className="text-right">
                                    {productoConOferta.originalPrice ? (
                                        <>
                                            <span className="text-sm line-through text-gray-500 mr-2">
                                                {productoConOferta.originalPrice}€
                                            </span>
                                            <span className="text-xl font-bold text-green-600">
                                                {producto.price}€
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-xl font-bold text-gray-800">
                                            {producto.price}€
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{producto.brand}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{producto.category}</span>
                                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.832l.215 1.022A3.75 3.75 0 006.012 9.75H19.95a3.75 3.75 0 003.632-4.39L21.8 3.373a4.5 4.5 0 00-2.322-1.424M12 19.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM12 19.5H8.25h-2.25m0 0H3.632c-.386 0-.752.183-.984.406l-.067.067A1.725 1.725 0 002.25 10.5V19.5m10.5-11.25h2.25m-2.25 0h-1.5m-2.25 0h-2.25" />
                                    </svg>
                                    Ver oferta
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
} 
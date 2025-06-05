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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-balance">
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
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
} 
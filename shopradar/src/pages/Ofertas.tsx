import { useState, useEffect } from 'react';
import ResultadosBusqueda from '../components/ResultadosBusqueda';
import { getFilteredOffers } from '../services/searchProducts';
import type { ProductWithSupermarket } from '../services/searchProducts';

function Ofertas() {
    const [filteredProducts, setFilteredProducts] = useState<ProductWithSupermarket[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [minDiscount, setMinDiscount] = useState<number>(0);

    const productsPerPage = 9;

    const discountOptions = [
        { label: "Todas las Ofertas", value: 0 },
        { label: "10% OFF o más", value: 10 },
        { label: "20% OFF o más", value: 20 },
        { label: "30% OFF o más", value: 30 },
    ];

    useEffect(() => {
        fetchOffers(minDiscount, currentPage);
    }, [minDiscount, currentPage]);

    const fetchOffers = (discount: number, page: number) => {
        const { products, totalPages } = getFilteredOffers(discount, page, productsPerPage);
        setFilteredProducts(products);
        setTotalPages(totalPages);
    };

    const handleFilterChange = (discount: number) => {
        setMinDiscount(discount);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <section
                style={{ backgroundImage: "var(--color-gradient-light)" }}
                className="w-full px-4 pb-20 pt-20 flex flex-col items-center justify-center relative "
            >
                <h1 className="text-4xl sm:text-6xl text-white font-Zodiak font-extrabold text-center mb-5 text-balance">
                    Ofertas
                </h1>

                <p className="text-base sm:text-xl text-center font-Switzer text-white text-balance max-w-screen-md">
                    Encuentra las mejores ofertas de productos en los supermercados más populares de España.
                </p>
            </section>

            <div className="offers-page container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    Ofertas de Productos
                </h1>

                <div className="filter-buttons sm:flex-row flex flex-col flex-wrap items-center justify-center gap-4 mb-8">
                    {discountOptions.map(({ label, value }) => {
                        const isActive = minDiscount === value;
                        return (
                            <button
                                key={value}
                                className={`px-10 py-2 rounded-full font-semibold transition-colors duration-300 ${isActive
                                        ? "text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                                    }`}
                                style={isActive ? { backgroundImage: "var(--color-gradient-light)" } : {}}
                                onClick={() => handleFilterChange(value)}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>


            <ResultadosBusqueda resultados={filteredProducts} busquedaRealizada={true} />

            {totalPages > 1 && (
                <div className="pagination flex justify-center space-x-2 mt-8">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Ofertas;
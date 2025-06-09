import SupermarketCard from '../components/SupermarketCard';
import productsData from '../../products.json';

function Supermercados() {
    const supermarkets = productsData.supermarkets;
    const totalSupermarkets = supermarkets.length;
    const totalProducts = 155;
    const activeOffers = 32;
    const lastUpdate = '24 horas'; 

    return (
        <div className="min-h-screen bg-gray-100">
            <div style={{ backgroundImage: "var(--color-gradient-light)" }}
            className=" py-20 text-white text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-6xl text-white font-Zodiak font-extrabold text-center mb-5 text-balance">
                    Supermercados
                </h1>

                <p className="text-base sm:text-xl text-center font-Switzer text-white text-balance max-w-screen-md">
                Conocé todos los supermercados que monitoreamos
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-3xl font-bold text-blue-600">{totalSupermarkets}</p>
                        <p className="text-gray-600">Supermercados</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-3xl font-bold text-green-600">{totalProducts}</p>
                        <p className="text-gray-600">Productos</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-3xl font-bold text-orange-500">{activeOffers}</p>
                        <p className="text-gray-600">Ofertas activas</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <p className="text-3xl font-bold text-gray-800">{lastUpdate}</p>
                        <p className="text-gray-600">Actualización promedio</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {supermarkets.map((supermarket: any) => (
                        <SupermarketCard
                            key={supermarket.name}
                            name={supermarket.name}
                            description="" // Placeholder for description, as it's not in products.json
                            offersCount={supermarket.products.filter((product: any) => product.discount).length}
                            productsCount={supermarket.products.length} // Assuming all products are available
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Supermercados;
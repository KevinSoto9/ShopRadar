import React from 'react';

interface SupermarketCardProps {
    name: string;
    description: string;
    offersCount: number;
    productsCount: number;
}

const SupermarketCard: React.FC<SupermarketCardProps> = ({ name, description, offersCount, productsCount }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-around w-full mb-4">
                <div>
                    <p className="text-lg font-semibold text-orange-500">{offersCount}</p>
                    <p className="text-sm text-gray-500">Ofertas activas</p>
                </div>
                <div>
                    <p className="text-lg font-semibold text-blue-500">{productsCount}</p>
                    <p className="text-sm text-gray-500">Productos disponibles</p>
                </div>
            </div>
        </div>
    );
};

export default SupermarketCard; 
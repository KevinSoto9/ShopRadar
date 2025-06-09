// Interfaces para tipar los datos
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    brand: string;
    discount?: number;
}

interface Supermarket {
    name: string;
    products: Product[];
}

interface ProductWithSupermarket extends Product {
    supermarket: string;
}

interface ProductsData {
    supermarkets: Supermarket[];
}

import productsData from '../../products.json';

function getAllProducts(query: string = ""): ProductWithSupermarket[] {
    const searchQuery: string = query.toLowerCase();
    
    const allProducts: ProductWithSupermarket[] = [];

    productsData.supermarkets.forEach((supermarket: Supermarket) => {

        const matchingProducts: Product[] = supermarket.products.filter((product: Product) => {
            return (
                product.name.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery) ||
                product.brand.toLowerCase().includes(searchQuery)
            );
        });
        
        matchingProducts.forEach((product: Product) => {
            allProducts.push({
                ...product,
                supermarket: supermarket.name
            });
        });
    });
    
    allProducts.sort((a: ProductWithSupermarket, b: ProductWithSupermarket) => a.price - b.price);
    
    return allProducts;
}

interface PaginatedOffers {
    products: ProductWithSupermarket[];
    totalPages: number;
}

function getFilteredOffers(minDiscount: number, page: number, limit: number = 9): PaginatedOffers {
    const allOffers: ProductWithSupermarket[] = [];

    productsData.supermarkets.forEach((supermarket: Supermarket) => {
        supermarket.products.forEach((product: Product) => {
            if (product.discount && product.discount >= minDiscount) {
                allOffers.push({
                    ...product,
                    supermarket: supermarket.name
                });
            }
        });
    });

    allOffers.sort((a: ProductWithSupermarket, b: ProductWithSupermarket) => {
        if (a.discount && b.discount) {
            return b.discount - a.discount;
        }
        return 0;
    });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = allOffers.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allOffers.length / limit);

    return {
        products: paginatedProducts,
        totalPages: totalPages
    };
}

export {
    getAllProducts,
    getFilteredOffers,
};

export type {
    Product,
    Supermarket,
    ProductWithSupermarket,
    ProductsData
}; 
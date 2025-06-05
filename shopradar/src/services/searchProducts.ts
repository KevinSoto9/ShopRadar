// Interfaces para tipar los datos
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    brand: string;
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

function searchProducts(query: string): ProductWithSupermarket[] {
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

export {
    searchProducts,
};

export type {
    Product,
    Supermarket,
    ProductWithSupermarket,
    ProductsData
}; 
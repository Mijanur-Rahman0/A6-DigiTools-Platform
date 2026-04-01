import React, { use } from 'react';
import Product from './Product';

const Products = ({productsPromise, carts, setCarts}) => {
    const productsPromiseRes = use(productsPromise);
    const productData = productsPromiseRes.data;
    console.log(productData);

    return (
        <div className='max-w-300 mx-auto text-black mb-15'>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {
                    productData.map(product => <Product key={product.id} product={product} carts={carts} setCarts={setCarts}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
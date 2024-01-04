import Footer from '@/common/components/layouts/Footer'
import HomeCategory from '@/modules/home/components/HomeCategory'
import Product from '@/modules/home/products'
import ProductHeader from '@/modules/home/products/components/ProductHeader'
import React from 'react'

const ProductsPage = () => {
    return (
        <>
            <div className="h-screen mx-auto">
                <ProductHeader />
                <HomeCategory />
                <Product />
                </div>
            <Footer />
            
        </>
    )
}

export default ProductsPage
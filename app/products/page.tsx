import Footer from '@/common/components/layouts/Footer'
import HomeCategory from '@/modules/home/components/HomeCategory'
import Product from '@/modules/products'
import ProductHeader from '@/modules/products/components/ProductHeader'
import React from 'react'

const ProductsPage = () => {
    return (
        <>
            <ProductHeader />
            <HomeCategory />
            <Product />
            <Footer />
        </>
    )
}

export default ProductsPage
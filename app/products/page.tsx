import Footer from '@/common/components/layouts/Footer'
import Product from '@/modules/products'
import ProductHeader from '@/modules/products/components/ProductHeader'
import React from 'react'

const ProductsPage = () => {
    return (
        <>
            <ProductHeader />
            <Product />
            <Footer />
        </>
    )
}

export default ProductsPage
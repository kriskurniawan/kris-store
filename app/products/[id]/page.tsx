import Footer from '@/common/components/layouts/Footer'
import ProductDetail from '@/modules/home/products/components/ProductDetail'
import ProductDetailHeader from '@/modules/home/products/components/ProductDetailHeader'
import ProductRelated from '@/modules/home/products/components/ProductRelated'
import React from 'react'

const ProductDetailPage = () => {
    return (
        <>
            <ProductDetailHeader />
            <ProductDetail />
            <ProductRelated />
            <Footer />
        </>
    )
}

export default ProductDetailPage
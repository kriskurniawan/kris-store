import Footer from '@/common/components/layouts/FooterMobile'
import ProductDetail from '@/modules/products/components/ProductDetail'
import ProductDetailHeader from '@/modules/products/components/ProductDetailHeader'
import ProductRelated from '@/modules/products/components/ProductRelated'
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
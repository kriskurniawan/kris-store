import React from 'react'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import ProductRelated from './ProductRelated'

const Product = () => {
  return (
    <>
      <ProductFilter />
      <ProductList />
      <ProductRelated />
    </>
  )
}

export default Product
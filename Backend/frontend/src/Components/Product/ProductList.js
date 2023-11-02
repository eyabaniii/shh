import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_product } from '../../JS/Action/ActionProduct'
import ProductCard from './ProductCard'
const ProductList = () => {
    const products=useSelector(state=>(state.ProductReducer.product))
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(get_product())
    }, [dispatch])
    console.log(products)
return (
    <div>
               
              {products?.map(product =><ProductCard product={product} key={product._id} />)}


    </div>
)
}

export default ProductList
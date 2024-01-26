
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { getProducts } from '../../redux/actions'
import './ProductCard.css'; 

function ProductList() {
    const dispatch=useDispatch()
    useEffect(()=>dispatch(getProducts(),[]))

    const AllProducts=useSelector((state)=>state.prod.Products.product)
  return (
    
    <div className='caard'>
      { AllProducts && AllProducts.map((el)=>(
            <ProductCard el={el}/>
        ))}
    </div>
  )
}

export default ProductList

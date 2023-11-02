import React from 'react'
import { useSelector } from 'react-redux'

const Detail = () => {
    const product=useSelector(state=>(state.ProductReducer.product))

  return (
    <div>
<p>{product.Title}</p>
<p>{product.Descrption}</p>

    </div>
  )
}

export default Detail
import React from 'react'
import { ProductList } from '../components/ProductList'

export const Review = () => {
  return (
    <div className='review'>
        <div className="page-head">
                All Paper Available For Review.
            </div>
            <div className="page-content">
                <ProductList/>
                <ProductList/>
                <ProductList/>
            </div>
    </div>
 )
}

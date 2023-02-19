import React from 'react'
import { ProductListR } from '../components/ProductListR'

export const Review = () => {
  return (
    <div className='review'>
        <div className="page-head">
                All Paper Available For Review.
            </div>
            <div className="page-content">
                <ProductListR/>
                <ProductListR/>
                <ProductListR/>
            </div>
    </div>
 )
}

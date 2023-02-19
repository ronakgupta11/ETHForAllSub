import React from 'react'

export const ProductCard = () => {
  return (
    <div>
        <div className='product-left'>
        <img className='product-img'></img>
        <button></button>
        </div>
        <div className='product-right'>
        <div className='upper'>
            <p className='owner-add'></p>
            <div className='price'></div>
            <p className='reviews'></p>
        </div>
        <div className='middle'>
            <h3 className='product-name'>

            </h3>
            <p className='product-desc'>

            </p>
        </div>
        <div className='lower'>
            <input type={"text"} placeholder="query"></input>
            <button>
                <div className = "product-btn-inner">

                </div>
            </button>
        </div>
        </div>
        </div>
  )
}

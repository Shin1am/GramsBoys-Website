import React from 'react'
import Navbar from '../util/Navbar'

function ShoppingCart() {
  return (
    <>
    <Navbar />
    <div className='shopping-cart-container'>
        <h1>Your Cart</h1>
        <div className='item-list-container'>
            <div className='item-list'>
                <h2>Item list</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShoppingCart
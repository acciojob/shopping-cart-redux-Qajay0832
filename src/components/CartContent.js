import React, { useState, useEffect } from 'react'
import '../styles/CartContent.css'





const CartContent = ({ item, AddWishlist, removeItem, addMoney, decreaseMoney,restoreTotal }) => {
    const [pieces, setPieces] = useState(1);
    
    const handleDec = () => {
        if (pieces > 1) {
            restoreTotal();
            setPieces(pieces - 1);
            decreaseMoney(item.amount)
        }
    }
    const handleInc = () => {
        restoreTotal();
        setPieces(pieces + 1);
        addMoney(item.amount);
    }
    const handleRemove=()=>{
        restoreTotal();
        removeItem(item.id, pieces)
    }
    const handleAddToWishlist=()=>{
        restoreTotal();
        AddWishlist(item.id, pieces)
    }
    return (
        <div className='itemContainer'>
            <div className='item'>
                <img className='cartImg' src={item.image} />
                <div className='section-2'>
                    <div className='itemDetails'>
                        <p className='itemTitle'>{item.name}</p>
                        <p className='itemAbout'>{item.about}</p>
                        <p className='colorContainer'>Colors : {item.color.map(e => <div className='colorShade' style={{ backgroundColor: e }}></div>)}</p>
                        <p>Sizes : {item.size.map(e => `${e} `)}</p>
                    </div>

                    <div className='itemBtnContainer'>
                        <button className='btn btn-primary itemBtn' onClick={handleRemove}>Remove Item</button>
                        <button className='btn btn-primary itemBtn' onClick={handleAddToWishlist }>Move to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='countSec'>
                    <button className='btn btn-primary itemCountBtn' onClick={handleDec}>-</button>
                    <p className='itemCount'>{pieces}</p>
                    <button className='btn btn-primary itemCountBtn' onClick={handleInc}>+</button>
                </div>
                <div>Rs : {item.amount} INR</div>
            </div>
        </div>
    )
}

export default CartContent
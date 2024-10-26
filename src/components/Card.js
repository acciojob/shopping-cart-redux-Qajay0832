import React from "react"
import '../styles/Card.css'


const Card = ({ card, handleAddToCart, cardType,removeFromWishlist }) => {

    return <div className="cardContainer custom-card card">
        <img className="cardImg card-img-top" src={card.image} />

        <div className="cardDetails card-body">
            <p className="title card-title">{card.name}</p>
            <p className="about card-text">{card.about.slice(0, 20)}</p>
            <p className="amount text-muted mt-2">Rs : {card.amount}</p>
            {cardType && cardType == 'wishlist' ? <button className="addCartBtn btn btn-primary" onClick={() => removeFromWishlist(card.id)
        }>Remove</button> : <button className="addCartBtn btn btn-primary" onClick={() => handleAddToCart(card.id)}>Add To Cart</button>}
        </div>
        
    </div>
}

export default Card
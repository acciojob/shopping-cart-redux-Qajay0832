import React from "react"
import '../styles/Card.css'


const Card = ({ card, handleAddToCart, cardType,removeFromWishlist }) => {
    console.log(cardType);

    return <div className="cardContainer">
        <img className="cardImg" src={card.image} />

        <div className="cardDetails">
            <p className="title">{card.name}</p>
            <p className="about">{card.about.slice(0, 20)}</p>
            <p className="amount">Rs : {card.amount}</p>
        </div>
        {cardType && cardType == 'wishlist' ? <button className="addCartBtn" onClick={() => removeFromWishlist(card.id)
        }>Remove</button> : <button className="addCartBtn" onClick={() => handleAddToCart(card.id)}>Add To Cart</button>}
    </div>
}

export default Card
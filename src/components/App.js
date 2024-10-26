
import React, { useEffect } from "react";
import './../styles/App.css';
import Card from "./Card.js";
import CartContent from "./cartContent.js";
import Checkout from "./Checkout.js";
import { useShop } from "../redux/useReducer.js";

const clothes = [{
  id: 1,
  name: 'Navy T-Shirt',
  about: 'Navy T-Shirt',
  amount: 400,
  color: ['red', 'blue'],
  size: ['M', 'L', 'XL'],
  image: 'https://imagescdn.thecollective.in/img/app/product/6/638767-6350344.jpg?w=500&auto=format'
},
{
  id: 2,
  name: 'Unisex Plain Hoodie - Red',
  about: 'Unisex Plain Hoodie - Red',
  amount: 1099,
  color: ['red', 'blue'],
  size: ['M', 'L', 'XL'],
  image: 'https://theshophaul.com/cdn/shop/files/7_b5ef6593-95e5-409e-b9b0-59b2d07e2b6e.jpg?v=1727705838&width=713'
},
{
  id: 3,
  name: 'Mens Button Down Denim Shirt',
  about: 'Oymyakon Mens Button Down Denim Shirt Long Sleeve Lapel Jean Shirt Casual Slim Fit Washed Denim Shirts with Chest Pockets',
  amount: 7645,
  color: ['red', 'blue'],
  size: ['M', 'L', 'XL'],
  image: 'https://m.media-amazon.com/images/I/61Fta9EITxL._AC_UY1100_.jpg'
},
{
  id: 4,
  name: 'White T- Shirt',
  about: 'Cotton T-shirt',
  amount: 799,
  color: ['red', 'blue'],
  size: ['M', 'L', 'XL'],
  image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2Faa%2F23aaa6586670a9542206a4b9f815580d37c8481e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
}]



const App = () => {

  const { shop, setCart, fillShop, fillProducts, removeProducts, addWishlist, removeCart, addProducts, removeWishlist, addAmt, decreaseAmt, diwaliCoupon, dhanterasCoupon, updateCoupon } = useShop();
  const handleAddToCart = (id) => {
    setCart(id);
    removeProducts(id);
    const product = shop.productsList.find(e => e.id === id)
    addAmt(product.amount)
    // if(shop.activeCoupon!=='none'){
    //   shop.activeCoupon
    // }
  }
  const setOldCoupon = (code) => {
    updateCoupon(code);
  }
  const AddItemToWishlist = (id, pieces) => {
    removeCart(id);
    addWishlist(id)
    const product = shop.productsList.find(e => e.id === id)
    decreaseAmt(product.amount * pieces)
  }
  const removeItemFromCart = (id, pieces) => {
    removeCart(id);
    addProducts(id);
    const product = shop.productsList.find(e => e.id === id)
    decreaseAmt(product.amount * pieces)
  }
  const removeFromWishlist = (id) => {
    addProducts(id);
    removeWishlist(id)
  }
  const addMoney = (rupee) => {
    addAmt(rupee)
  }
  const decreaseMoney = (rupee) => {
    decreaseAmt(rupee)
  }
  const diwaliOffer = (selected) => {
    diwaliCoupon(selected)
  }
  const dhanterasOffer = (selected) => {
    dhanterasCoupon(selected)
  }
  const restoreTotal = () => {
    
    if (shop.activeCoupon !== 'none') {
      shop.activeCoupon == 'diwali' ? diwaliCoupon(false) : dhanterasCoupon(false);
      updateCoupon('none');
    }
  }
  useEffect(() => {
    fillShop(clothes);
  }, [])
  useEffect(() => {
    let arr = [];
    shop.productsList.map((e) => arr.push(e.id));
    fillProducts(arr)
  }, [shop.productsList]);


  useEffect(() => {


  }, [shop.products])


  return (
    <div>
      {/* Do not remove the main div */}
      <div className="containers">
        <h2 className="heading">All Products</h2>
        <div className="cards">
          {shop.products.map(id => {
            const product = shop.productsList.find(e => e.id === id);
            return product ? <Card card={product} key={id} handleAddToCart={handleAddToCart} /> : null;
          })}
        </div>
      </div>
      <div className="containers">
        <h2>Wishlist</h2>
        <div className="cards">
          {shop.wishlist.map(id => {
            const product = shop.productsList.find(e => e.id === id);
            return product ? <Card card={product} key={id} removeFromWishlist={removeFromWishlist} cardType='wishlist' /> : null;
          })}
          {/* {clothes.map((e, i) => <Card card={e} key={i} cardType='wishlist' />)} */}
        </div>
      </div>
      <div className="containers cartContainer">

        <div className="container cartItems">
          <h2>Cart items-{shop.cart.length}</h2>
          <hr />
          <div>
            {shop.cart.map((id, i) => {
              const product = shop.productsList.find(e => e.id === id);
              return product ? <><CartContent restoreTotal={restoreTotal} item={product} key={i} addMoney={addMoney} decreaseMoney={decreaseMoney} AddWishlist={AddItemToWishlist} removeItem={removeItemFromCart}
                addMoney={addMoney} decreaseMoney={decreaseMoney} /><hr /></> : null
            })}
          </div>
        </div>
        <div className="checkout">
          <Checkout total={shop.amount} diwaliOffer={diwaliOffer} dhanterasOffer={dhanterasOffer} setOldCoupon={setOldCoupon} oldCoupon={shop.activeCoupon} />
        </div>

      </div>

    </div>
  )
}

export default App

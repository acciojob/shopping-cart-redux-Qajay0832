import React, { useState,useEffect } from 'react'
import '../styles/Checkout.css'

const Checkout = ({ total, diwaliOffer, dhanterasOffer,oldCoupon,setOldCoupon }) => {
    const [selectedCoupon, setSelectedCoupon] = useState('none');
    const handleCoupon = (e) => {
        setSelectedCoupon(e.target.value);
        const currentCoupon=e.target.value;
        if (currentCoupon !== 'none') {
            if(currentCoupon=='diwali'){
                if(oldCoupon=='dhanteras'){
                    dhanterasOffer(false)
                }
                diwaliOffer(true);
                setOldCoupon('diwali')
            }
            else{
                if(oldCoupon=='diwali'){
                    diwaliOffer(false)
                }
                dhanterasOffer(true)
                setOldCoupon('dhanteras')
            }
            
        } else {
            if(oldCoupon !=='none'){
                oldCoupon=='diwali'?diwaliOffer(false):dhanterasOffer(false);
                setOldCoupon('none');
            }
        }

    }
    useEffect(() => {
        oldCoupon=='none'?setSelectedCoupon('none'):oldCoupon=='diwali'?setSelectedCoupon('diwali'):setSelectedCoupon('dhanteras');
    }
    , [oldCoupon])
    
    return (
        <div>
            <div className='checkoutContainer'>
                <p className='checkoutHeading'>The Total Amount Of</p>
                <hr />
                <div className='checkoutSec-2'>
                    <div className='checkoutItem'>
                        <p className='checkoutLabel'>Temporary Amount :</p>
                        <p>Rs :{total} INR</p>
                    </div>
                    <div className='checkoutItem'>
                        <p className='checkoutLabel'>Shipping :</p>
                        <p>Free</p>
                    </div>
                </div>
                <hr />
                <div className='checkoutSec-3'>
                    <div className='checkoutItem'>
                        <p className='checkoutLabel'>Total Amount Of <br /> (including VAT)</p>
                        <p>Rs : {total} INR</p>
                    </div>
                </div>

                <div className='checkoutSec-4'>
                    <button className='checkoutBtn'>Go To Checkout</button>
                </div>
            </div>
            <select className='discountSec' value={selectedCoupon} onChange={handleCoupon}>
                <option value='none'>Add a discount mode </option>
                <option value='diwali'>Diwali Sale 50% off </option>
                <option value='dhanteras'>Dhanteras sale 20% off </option>
            </select>
        </div>

    )
}

export default Checkout
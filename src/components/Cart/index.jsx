import React from "react";
import {useSelector} from "react-redux";

const Cart = (props) => {
    const {cakeQuantity, iceCreamQuantity, totalPrice, isCartEmpty} = useSelector(state => {
        let cake = state.cake.qty * 5
        let iceCream = state.iceCream.qty * 3
        let total = cake + iceCream
        return {
            cakeQuantity: cake,
            iceCreamQuantity: iceCream,
            totalPrice: total,
            isCartEmpty: total === 0
        }
    })
    return (
        <div className="cake">
            {!isCartEmpty ? <div>
                <span className="title">Cart Item </span>

                <div className="title cart-price">
                    <span>Cake </span>
                    <span className="font-weight-400">${cakeQuantity}</span>
                </div>
                <div className="title cart-price">
                    <span>Ice Cream </span>
                    <span className="font-weight-400">${iceCreamQuantity}</span>
                </div>
                <div className="title cart-price">
                    <span>Total </span>
                    <span className="font-weight-400">${totalPrice}</span>
                </div>
            </div> : <span className="title">cart is empty </span>}

            <button className={`btn-action ${!isCartEmpty ? 'cart-full' : 'cart-empty'} `}>Checkout</button>
        </div>
    )
}
/*
const mapStateToProps = state => {
    return {
        cakeQuantity: state.cake.qty,
        iceCreamQuantity: state.iceCream.qty,
    }
}*/
export default Cart;

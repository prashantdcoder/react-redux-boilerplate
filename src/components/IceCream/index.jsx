import React from "react";
import {addIceCream, removeIceCream} from "../../redux/action";
import {connect} from "react-redux";

const IceCream = (props) => {
    return (
        <div className="cake">
            <span className="title">Strawberry - $3</span>
            <span className="title quantity"> Quantity : {props.qty}</span>
            <button type='button' className="btn-action add" onClick={props.addIceCream}>Add</button>
            <button type='button' className="btn-action remove" onClick={props.removeIceCream}>Remove</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        qty: state.iceCream.qty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIceCream: () => dispatch(addIceCream()),
        removeIceCream: () => dispatch(removeIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCream);

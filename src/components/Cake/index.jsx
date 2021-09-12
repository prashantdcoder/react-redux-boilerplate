import React from "react";
import {addCake, removeCake} from "../../redux/action";
import {connect} from "react-redux";

const Cake = (props) => {

    return (
        <div className="cake">
            <span className="title">Red Velvet - $5</span>
            <span className="title quantity"> Quantity : {props.qty}</span>
            <button type='button' className="btn-action add" onClick={props.addCake}>Add
            </button>
            <button type='button' className="btn-action remove" onClick={props.removeCake}>Remove</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        qty: state.cake.qty
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCake: () => dispatch(addCake()),
        removeCake: () => dispatch(removeCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cake);

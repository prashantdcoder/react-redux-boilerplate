import React from 'react';
import './App.css';
import Cake from "./components/Cake";
import IceCream from "./components/IceCream";
import Cart from "./components/Cart";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Cake/>
                <IceCream/>
                <Cart/>
            </div>
        </Provider>
    );
}

export default App;

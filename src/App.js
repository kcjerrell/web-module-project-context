import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import ProductContext from "./contexts/ProductContext";
import CartContext from './contexts/CartContext';
import { useLocalStorage } from './useLocalStorage';


function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);
	const [cart, setCart] = useLocalStorage('contextCart', []);
	const [transactIds, setTransactIds] = useState(0);

	const addItem = item => {
		// each item in the cart needs a unique id, so they can be deleted independently
		const transId = transactIds + 1;
		setTransactIds(transId);

		// add the given item to the cart
		setCart([...cart, {...item, transactId: transId}]);
	};

	const removeItem = transactId => {
		setCart(cart.filter(item => item.transactId !== transactId));
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem}}>


				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>

			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

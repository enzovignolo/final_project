import './App.css';

import FilterProduct from './Components/Products/FilterProducts';
import Cart from './Components/Cart/Cart';
import EditProduct from './Components/Products/EditProduct';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AddProduct from './Components/Products/AddProduct';
import { useState } from 'react';
import AppContext from './AppContext';
import LoginForm from './Components/Login/Login';
import SignUpForm from './Components/Signup/signup';
import dotenv from 'dotenv';
import { useHistory } from 'react-router';
import Logout from './Components/Logout/logout';
import PurchaseButton from './Components/Cart/Purchase';
function App() {
	dotenv.config();

	const [role, setRole] = useState(false);
	const [cart, setCart] = useState(false);
	const [token, setToken] = useState(false);
	const userSettings = {
		role,
		setRole,
		cart,
		setCart,
		token,
		setToken,
	};
	const onUserSelect = (e) => {
		e.preventDefault();
		setRole(e.target.Role.value);

		return false;
	};

	const history = useHistory();

	return (
		<AppContext.Provider value={userSettings}>
			<div className="App">
				<BrowserRouter>
					<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
						<div className="container-fluid">
							<ul className="navbar-nav me-auto">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										E-Products
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/cart" className="nav-link">
										Cart
									</Link>
								</li>
								{!userSettings.token ? (
									<li className="nav-item">
										<Link to="/login" className="nav-link">
											Login
										</Link>
									</li>
								) : (
									''
								)}
								{!userSettings.token ? (
									<li className="nav-item">
										<Link to="/signup" className="nav-link">
											Sign Up
										</Link>
									</li>
								) : (
									''
								)}
								{userSettings.token ? (
									<li className="nav-item">
										<Link to="/logout" className="nav-link">
											Logout
										</Link>
									</li>
								) : (
									''
								)}
								{userSettings.role === 'admin' ? (
									<li className="nav-item">
										<Link to="/add-product" className="nav-link">
											Add product
										</Link>
									</li>
								) : (
									''
								)}
							</ul>
						</div>
						{/*  <form className="d-flex m-2" onSubmit={onUserSelect}>
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Select user"
                id="Role"
              />
              <button
                className="btn btn-secondary my-2 my-sm-0 pr-4"
                type="submit"
              >
                Select
              </button>
            </form> */}
					</nav>

					<Switch>
						<Route path="/add-product">
							<AddProduct />;
						</Route>
						<Route path="/cart">
							<Cart />
							<PurchaseButton />
						</Route>
						<Route path="/edit-product/:id">
							<EditProduct />;
						</Route>

						<Route path="/login">
							<LoginForm />
						</Route>

						<Route path="/signup">
							<SignUpForm />
						</Route>
						<Route path="/logout">
							<Logout />
						</Route>

						<Route path="/">
							<FilterProduct />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</AppContext.Provider>
	);
}

export default App;

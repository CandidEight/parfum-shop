import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Cart from './components/Cart'
import './App.css'

function App() {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const saved = localStorage.getItem('cart')
		if (saved) {
			setCartItems(JSON.parse(saved))
		}
		setIsLoaded(true)
	}, [])

	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem('cart', JSON.stringify(cartItems))
		}
	}, [cartItems, isLoaded])

	const addToCart = (product) => {
		setCartItems([...cartItems, product])
	}

	const removeFromCart = (indexToRemove) => {
		setCartItems(cartItems.filter((_, index) => index !== indexToRemove))
	}

	return (
		<div className="app-wrapper">
			<Header 
				onCartOpen={() => setIsCartOpen(true)} 
				cartCount={cartItems.length} 
			/>
			<main className="app-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog onAddToCart={addToCart} />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</main>
			<Footer />
			<ScrollToTop />
			<div className={`cart-overlay ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(false)}></div>
			<Cart 
				isOpen={isCartOpen} 
				onClose={() => setIsCartOpen(false)} 
				items={cartItems}
				onRemove={removeFromCart}
			/>
		</div>
	)
}

export default App
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header({ onCartOpen, cartCount }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="header">
			<div className="container header-inner">
				{/* Логотип — ссылка на главную */}
				<Link to="/" className="logo">PARFUM</Link>

				{/* Бургер для телефона */}
				<button 
					className={`burger ${isMenuOpen ? 'open' : ''}`} 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{/* Навигация */}
				<nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
					<Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Главная</Link>
					<Link to="/catalog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
					<Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>О нас</Link>
					<Link to="/contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
				</nav>

				{/* Корзина */}
				<button className="cart-btn" onClick={onCartOpen}>
					🛒
					{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
				</button>
			</div>
		</header>
	)
}

export default Header
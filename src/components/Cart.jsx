import { useState } from 'react'
import CheckoutModal from './CheckoutModal'
import './Cart.css'

function Cart({ isOpen, onClose, items, onRemove }) {
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
	const total = items.reduce((sum, item) => sum + item.price, 0)

	return (
		<>
			<div className={`cart ${isOpen ? 'open' : ''}`}>
				<button className="cart-close" onClick={onClose}>✕</button>
				<h2>Корзина</h2>
				{items.length === 0 ? (
					<div className="cart-empty-state">
						<span className="cart-empty-icon">🛒</span>
						<p className="cart-empty-title">Ваша корзина пуста</p>
						<p className="cart-empty-desc">Но мы знаем, как это исправить.</p>
						<button className="btn btn-sm" onClick={onClose}>
							Выбрать аромат
						</button>
					</div>
				) : (
					<>
						<div className="cart-items">
							{items.map((item, index) => (
								<div key={index} className="cart-item">
									<span>{item.name}</span>
									<div className="cart-item-right">
										<span>{item.price} ₽</span>
										<button 
											className="cart-remove" 
											onClick={() => onRemove(index)}
										>
											✕
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="cart-total">
							<strong>Итого: {total} ₽</strong>
						</div>
						<button 
							className="btn btn-cart" 
							onClick={() => setIsCheckoutOpen(true)}
						>
							Оформить заказ
						</button>
					</>
				)}
			</div>

			<CheckoutModal 
				isOpen={isCheckoutOpen}
				onClose={() => setIsCheckoutOpen(false)}
				items={items}
				total={total}
			/>
		</>
	)
}

export default Cart
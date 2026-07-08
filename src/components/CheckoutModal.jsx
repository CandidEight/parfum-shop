import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import './CheckoutModal.css'

function CheckoutModal({ isOpen, onClose, items, total }) {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		address: ''
	})
	const [isConfirmed, setIsConfirmed] = useState(false)
	const [orderId, setOrderId] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		
		// Генерируем номер заказа
		const id = 'PARFUM-' + Date.now().toString().slice(-6)
		setOrderId(id)

		const order = {
			id: id,
			items: items,
			total: total,
			...formData,
			date: new Date().toLocaleString()
		}

		console.log('Заказ оформлен:', order)
		
		// Показываем конфиркету
		setIsConfirmed(true)
	}

	if (!isOpen) return null

	return (
		<>
			<div className="checkout-overlay" onClick={onClose}>
				<div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
					<button className="checkout-close" onClick={onClose}>✕</button>
					<h2>Оформление заказа</h2>
					
					<div className="checkout-summary">
						<span>Товаров: {items.length}</span>
						<span>Итого: {total} ₽</span>
					</div>

					<form onSubmit={handleSubmit} className="checkout-form">
						<div className="form-group">
							<label>Ваше имя</label>
							<input 
								type="text" 
								required 
								value={formData.name}
								onChange={(e) => setFormData({...formData, name: e.target.value})}
								placeholder="Иван Иванов"
							/>
						</div>

						<div className="form-group">
							<label>Телефон</label>
							<input 
								type="tel" 
								required 
								value={formData.phone}
								onChange={(e) => setFormData({...formData, phone: e.target.value})}
								placeholder="+7 (999) 999-99-99"
							/>
						</div>

						<div className="form-group">
							<label>Адрес доставки</label>
							<input 
								type="text" 
								required 
								value={formData.address}
								onChange={(e) => setFormData({...formData, address: e.target.value})}
								placeholder="Москва, ул. Пушкина, д. 1"
							/>
						</div>

						<button type="submit" className="btn">
							Подтвердить заказ
						</button>
					</form>
				</div>
			</div>

			<ConfirmationModal 
				isOpen={isConfirmed}
				onClose={() => {
					setIsConfirmed(false)
					onClose()
				}}
				order={{
					id: orderId,
					items: items,
					total: total,
					name: formData.name,
					address: formData.address
				}}
			/>
		</>
	)
}

export default CheckoutModal
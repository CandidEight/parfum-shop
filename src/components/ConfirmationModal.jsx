import './ConfirmationModal.css'

function ConfirmationModal({ isOpen, onClose, order }) {
	if (!isOpen) return null

	return (
		<div className="confirmation-overlay" onClick={onClose}>
			<div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
				<button className="confirmation-close" onClick={onClose}>✕</button>
				
				<div className="confirmation-icon">✓</div>
				
				<h2 className="confirmation-title">Заказ оформлен!</h2>
				
				<p className="confirmation-subtitle">
					Спасибо, {order.name}! Мы получили ваш заказ и скоро свяжемся с вами.
				</p>

				<div className="confirmation-details">
					<div className="confirmation-row">
						<span>Номер заказа</span>
						<span className="confirmation-order-id">#{order.id}</span>
					</div>
					<div className="confirmation-row">
						<span>Сумма</span>
						<span className="confirmation-total">{order.total} ₽</span>
					</div>
					<div className="confirmation-row">
						<span>Доставка</span>
						<span>{order.address}</span>
					</div>
				</div>

				<div className="confirmation-items">
					<h4>Товары в заказе</h4>
					{order.items.map((item, index) => (
						<div key={index} className="confirmation-item">
							<span>{item.name}</span>
							<span>{item.price} ₽</span>
						</div>
					))}
				</div>

				<button className="btn" onClick={onClose}>
					Продолжить покупки
				</button>
			</div>
		</div>
	)
}

export default ConfirmationModal
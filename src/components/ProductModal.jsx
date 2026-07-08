import './ProductModal.css'

function ProductModal({ product, onClose, onAddToCart }) {
	if (!product) return null

	return (
		<div className="product-modal-overlay" onClick={onClose}>
			<div className="product-modal" onClick={(e) => e.stopPropagation()}>
				<button className="product-modal-close" onClick={onClose}>✕</button>
				
				<div className="product-modal-grid">
					<div className="product-modal-image">
						<img src={product.image} alt={product.name} />
					</div>
					
					<div className="product-modal-info">
						{product.badge && (
							<span className={`modal-badge ${product.badge === 'Хит' ? 'badge-hit' : 'badge-new'}`}>
								{product.badge}
							</span>
						)}
						<h2 className="product-modal-name">{product.name}</h2>
						<p className="product-modal-brand">{product.brand}</p>
						<p className="product-modal-price">{product.price} ₽ / {product.volume} мл</p>
						<p className="product-modal-notes">{product.notes}</p>
						
						<button 
							className="btn"
							onClick={() => {
								onAddToCart(product)
								onClose()
							}}
						>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductModal
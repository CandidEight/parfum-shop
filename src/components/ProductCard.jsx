import './ProductCard.css'

function ProductCard({ product, onAddToCart, onOpenModal }) {
	return (
		<div className="product-card">
			{product.badge && (
				<span className={`product-badge ${product.badge === 'Хит' ? 'badge-hit' : 'badge-new'}`}>
					{product.badge}
				</span>
			)}
			<div className="product-link" onClick={() => onOpenModal(product)}>
				<img src={product.image} alt={product.name} className="product-image" />
				<h3 className="product-name">{product.name}</h3>
				<p className="product-brand">{product.brand}</p>
				<p className="product-price">{product.price} ₽ / {product.volume} мл</p>
			</div>
			<button className="btn btn-product" onClick={() => onAddToCart(product)}>
				В корзину
			</button>
		</div>
	)
}

export default ProductCard
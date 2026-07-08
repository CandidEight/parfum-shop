import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import ProductModal from '../components/ProductModal'
import { products as allProducts } from '../data/products'
import './Catalog.css'

function Catalog({ onAddToCart }) {
	const [selectedBrand, setSelectedBrand] = useState('')
	const [selectedGender, setSelectedGender] = useState('')
	const [priceRange, setPriceRange] = useState(5000)
	const [selectedProduct, setSelectedProduct] = useState(null)

	const brands = [...new Set(allProducts.map(p => p.brand))]

	const filteredProducts = allProducts.filter(product => {
		const matchBrand = selectedBrand ? product.brand === selectedBrand : true
		const matchGender = selectedGender ? product.gender === selectedGender : true
		const matchPrice = product.price <= priceRange
		return matchBrand && matchGender && matchPrice
	})

	return (
		<>
			<section className="catalog-page">
				<div className="container">
					<h1 className="catalog-title">Каталог</h1>
					
					<Filters 
						brands={brands}
						selectedBrand={selectedBrand}
						setSelectedBrand={setSelectedBrand}
						selectedGender={selectedGender}
						setSelectedGender={setSelectedGender}
						priceRange={priceRange}
						setPriceRange={setPriceRange}
					/>

					{filteredProducts.length === 0 ? (
						<p className="catalog-empty">Товаров не найдено</p>
					) : (
						<div className="catalog-grid">
							{filteredProducts.map(product => (
								<ProductCard 
									key={product.id} 
									product={product} 
									onAddToCart={onAddToCart}
									onOpenModal={setSelectedProduct}
								/>
							))}
						</div>
					)}
				</div>
			</section>

			<ProductModal 
				product={selectedProduct}
				onClose={() => setSelectedProduct(null)}
				onAddToCart={onAddToCart}
			/>
		</>
	)
}

export default Catalog
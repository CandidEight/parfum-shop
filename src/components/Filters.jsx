import './Filters.css'

function Filters({ 
	brands, 
	selectedBrand, 
	setSelectedBrand, 
	selectedGender, 
	setSelectedGender,
	priceRange,
	setPriceRange
}) {
	return (
		<div className="filters">
			<div className="filter-group">
				<h3>Бренд</h3>
				<select 
					value={selectedBrand} 
					onChange={(e) => setSelectedBrand(e.target.value)}
					className="filter-select"
				>
					<option value="">Все бренды</option>
					{brands.map(brand => (
						<option key={brand} value={brand}>{brand}</option>
					))}
				</select>
			</div>

			<div className="filter-group">
				<h3>Пол</h3>
				<div className="filter-buttons">
					<button 
						className={`filter-btn ${selectedGender === '' ? 'active' : ''}`}
						onClick={() => setSelectedGender('')}
					>
						Все
					</button>
					<button 
						className={`filter-btn ${selectedGender === 'male' ? 'active' : ''}`}
						onClick={() => setSelectedGender('male')}
					>
						Мужские
					</button>
					<button 
						className={`filter-btn ${selectedGender === 'female' ? 'active' : ''}`}
						onClick={() => setSelectedGender('female')}
					>
						Женские
					</button>
				</div>
			</div>

			<div className="filter-group">
				<h3>Цена до {priceRange} ₽</h3>
				<input 
					type="range" 
					min="0" 
					max="5000" 
					step="100"
					value={priceRange} 
					onChange={(e) => setPriceRange(Number(e.target.value))}
					className="filter-range"
				/>
			</div>
		</div>
	)
}

export default Filters
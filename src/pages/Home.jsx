import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{ gradient: 'linear-gradient(160deg, #f5ede8 0%, #e8ddd0 100%)', title: 'Ароматы для тебя' },
		{ gradient: 'linear-gradient(160deg, #e8ddd0 0%, #d5c4b5 100%)', title: 'Новая коллекция 2026' },
		{ gradient: 'linear-gradient(160deg, #d5c4b5 0%, #f5ede8 100%)', title: 'Распив от 1 мл' }
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [slides.length])

	return (
		<div>
			<section 
				className="home-hero"
				style={{ 
					background: slides[currentSlide].gradient,
					transition: 'background 1s ease-in-out'
				}}
			>
				<div className="container home-hero-content">
					<h1 className="home-hero-title">
						{slides[currentSlide].title}
					</h1>
					<p className="home-hero-subtitle">Оригинальная парфюмерия. Распив от 1 мл.</p>
					<Link to="/catalog" className="btn">Смотреть каталог</Link>
				</div>
			</section>

			<section className="home-categories">
				<div className="container">
					<h2 className="home-section-title">Категории</h2>
					<div className="home-categories-grid">
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Мужские</span>
						</div>
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Женские</span>
						</div>
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Унисекс</span>
						</div>
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Сеты</span>
						</div>
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Акции</span>
						</div>
						<div className="home-category-card" style={{ background: '#f0ece6', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<span>Автопарфюмы</span>
						</div>
					</div>
				</div>
			</section>

			<section className="home-reviews">
				<div className="container">
					<h2 className="home-section-title">Отзывы</h2>
					<div className="reviews-links">
						<a 
							href="https://yandex.ru/maps/org/to_parfmesto/60855767616/reviews/" 
							target="_blank" 
							rel="noopener noreferrer"
							className="review-link-card"
						>
							<div className="review-link-icon">⭐</div>
							<div className="review-link-content">
								<h3>Яндекс.Карты</h3>
								<p>Читайте отзывы о нас на Яндекс.Картах</p>
								<span className="review-link-arrow">→</span>
							</div>
						</a>

						<a 
							href="https://vk.com/ваш_паблик" 
							target="_blank" 
							rel="noopener noreferrer"
							className="review-link-card"
						>
							<div className="review-link-icon">💬</div>
							<div className="review-link-content">
								<h3>ВКонтакте</h3>
								<p>Смотрите отзывы и обсуждения в нашем сообществе</p>
								<span className="review-link-arrow">→</span>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
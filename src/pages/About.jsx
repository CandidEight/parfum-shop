import './About.css'

function About() {
	return (
		<div className="about-page">
			<div className="container">
				<h1 className="about-title">О нас</h1>
				
				<div className="about-grid">
					<div className="about-text">
						<h2>Кто мы</h2>
						<p>
							Мы — команда парфюмерных экспертов, которые любят своё дело. 
							Наш магазин создан для тех, кто ищет оригинальную парфюмерию 
							и хочет пробовать новое, не переплачивая за флакон.
						</p>
						<p>
							Мы работаем напрямую с дистрибьюторами, поэтому гарантируем 
							подлинность каждого аромата. Распив от 5 мл — это возможность 
							носить любимый запах каждый день или менять его по настроению.
						</p>
					</div>
					
					<div className="about-values">
						<div className="about-value-card">
							<span className="about-value-icon">✓</span>
							<h3>Только оригиналы</h3>
							<p>Мы проверяем каждую партию. Никаких подделок.</p>
						</div>
						<div className="about-value-card">
							<span className="about-value-icon">✓</span>
							<h3>Распив от 5 мл</h3>
							<p>Пробуй ароматы, не покупая большой флакон.</p>
						</div>
						<div className="about-value-card">
							<span className="about-value-icon">✓</span>
							<h3>Быстрая доставка</h3>
							<p>Отправляем заказы в день оформления.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
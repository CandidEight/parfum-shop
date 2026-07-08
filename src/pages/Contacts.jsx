import './Contacts.css'

function Contacts() {
	return (
		<div className="contacts-page">
			<div className="container">
				<h1 className="contacts-title">Контакты</h1>
				
				<div className="contacts-grid">
					<div className="contacts-info">
						<div className="contact-item">
							<span className="contact-icon">📍</span>
							<div>
								<h3>Адрес</h3>
								<p>Москва, ул. Тверская, д. 10</p>
							</div>
						</div>

						<div className="contact-item">
							<span className="contact-icon">📞</span>
							<div>
								<h3>Телефон</h3>
								<a href="tel:+79991234567" className="contact-link">+7 (999) 123-45-67</a>
							</div>
						</div>

						<div className="contact-item">
							<span className="contact-icon">✉️</span>
							<div>
								<h3>Email</h3>
								<a href="mailto:info@parfum.ru" className="contact-link">info@parfum.ru</a>
							</div>
						</div>

						<div className="contact-item">
							<span className="contact-icon">🕐</span>
							<div>
								<h3>Режим работы</h3>
								<p>Пн-Вс: 10:00 – 21:00</p>
							</div>
						</div>
					</div>

					<div className="contacts-form-wrapper">
						<h2>Напишите нам</h2>
						<form className="contacts-form">
							<div className="form-group">
								<label>Имя</label>
								<input type="text" placeholder="Ваше имя" required />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" placeholder="Ваш email" required />
							</div>
							<div className="form-group">
								<label>Сообщение</label>
								<textarea rows="4" placeholder="Ваше сообщение" required></textarea>
							</div>
							<button type="submit" className="btn">
								Отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
import './Footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="container footer-inner">
				<div className="footer-copy">
					© 2025 PARFUM. Все права защищены.
				</div>
				<div className="footer-social">
					<a href="https://instagram.com/ваш_аккаунт" className="footer-social-link" target="_blank" rel="noopener noreferrer">IG</a>
					<a href="https://t.me/ваш_канал" className="footer-social-link" target="_blank" rel="noopener noreferrer">TG</a>
					<a href="https://vk.com/ваш_паблик" className="footer-social-link" target="_blank" rel="noopener noreferrer">VK</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
// components/Footer.jsx
'use client';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Основная информация */}
                <div className="footer-grid">
                    {/* Колонка 1 - О компании */}
                    <div className="footer-col">
                        <h3 className="footer-title">OSKAR MOBILE</h3>
                        <p className="footer-about">
                            Интернет-магазин смартфонов и аксессуаров. 
                            Только оригинальная техника с гарантией.
                        </p>
                        <div className="footer-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">📷</span>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">📘</span>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">▶️</span>
                            </a>
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">📱</span>
                            </a>
                        </div>
                    </div>

                    {/* Колонка 2 - Категории */}
                    <div className="footer-col">
                        <h3 className="footer-title">Категории</h3>
                        <ul className="footer-links">
                            <li><Link href="/category/smartphones">Смартфоны</Link></li>
                            <li><Link href="/category/accessories">Аксессуары</Link></li>
                            <li><Link href="/category/cases">Чехлы</Link></li>
                            <li><Link href="/category/audio">Наушники</Link></li>
                            <li><Link href="/category/chargers">Зарядные устройства</Link></li>
                        </ul>
                    </div>

                    {/* Колонка 3 - Информация */}
                    <div className="footer-col">
                        <h3 className="footer-title">Информация</h3>
                        <ul className="footer-links">
                            <li><Link href="/about">О нас</Link></li>
                            <li><Link href="/delivery">Доставка и оплата</Link></li>
                            <li><Link href="/warranty">Гарантия</Link></li>
                            <li><Link href="/returns">Возврат товара</Link></li>
                            <li><Link href="/blog">Блог</Link></li>
                        </ul>
                    </div>

                    {/* Колонка 4 - Контакты */}
                    <div className="footer-col">
                        <h3 className="footer-title">Контакты</h3>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📞</span>
                                <div>
                                    <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                                    <span className="contact-note">Ежедневно с 10:00 до 21:00</span>
                                </div>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:info@oskarmobile.ru">info@oskarmobile.ru</a>
                            </li>
                            <li>
                                <span className="contact-icon">📍</span>
                                <div>
                                    <span>г. Москва, ул. Тверская, д. 1</span>
                                    <span className="contact-note">м. Охотный ряд</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Преимущества */}
                <div className="footer-features">
                    <div className="feature-item">
                        <span className="feature-icon">🚚</span>
                        <div>
                            <h4>Бесплатная доставка</h4>
                            <p>При заказе от 10 000 ₽</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">💳</span>
                        <div>
                            <h4>Удобная оплата</h4>
                            <p>Наличные, карта, рассрочка</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🛡️</span>
                        <div>
                            <h4>Гарантия 1 год</h4>
                            <p>Официальная гарантия</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🔄</span>
                        <div>
                            <h4>Возврат 14 дней</h4>
                            <p>Без проблем</p>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть с копирайтом */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} OSKAR MOBILE. Все права защищены.
                        </p>
                        <div className="footer-bottom-links">
                            <Link href="/privacy">Политика конфиденциальности</Link>
                            <Link href="/terms">Пользовательское соглашение</Link>
                        </div>
                        <div className="payment-methods">
                            <span>Visa</span>
                            <span>MasterCard</span>
                            <span>Мир</span>
                            <span>SberPay</span>
                            <span>Yandex Pay</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
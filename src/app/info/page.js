'use client';
import { useEffect, useState } from 'react';
import {
    FiInfo,
    FiTruck,
    FiShield,
    FiRefreshCw,
    FiBookOpen,
    FiCheckCircle,
    FiClock,
    FiCreditCard,
    FiPackage,
    FiHeadphones,
    FiAward,
    FiMapPin,
    FiPhone,
    FiMail,
    FiChevronUp,
    FiMenu,
    FiX
} from 'react-icons/fi';
import './info.css';

const InfoPage = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 400);

            // Определяем активную секцию для подсветки в меню
            const sections = ['about', 'delivery', 'warranty', 'returns', 'blog'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
        setActiveSection(id);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const menuItems = [
        { id: 'about', title: 'О нас', icon: <FiInfo /> },
        { id: 'delivery', title: 'Доставка и оплата', icon: <FiTruck /> },
        { id: 'warranty', title: 'Гарантия', icon: <FiShield /> },
        { id: 'returns', title: 'Возврат товара', icon: <FiRefreshCw /> },
        { id: 'blog', title: 'Блог', icon: <FiBookOpen /> }
    ];

    return (
        <div className="info-page">
            <div className="info-container">
                <h1 className="info-title">Информация</h1>

                {/* Мобильная кнопка меню */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    <span>Меню</span>
                </button>

                {/* Мобильное меню */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <nav className="mobile-nav">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mobile-contacts">
                        <h3>Контакты</h3>
                        <a href="tel:+79991234567" className="mobile-contact-item">
                            <FiPhone /> +7 (999) 123-45-67
                        </a>
                        <a href="mailto:info@oskarmobile.ru" className="mobile-contact-item">
                            <FiMail /> info@oskarmobile.ru
                        </a>
                        <div className="mobile-contact-item">
                            <FiMapPin /> г. Москва, ул. Тверская, д. 1
                        </div>
                        <div className="mobile-contact-item">
                            <FiClock /> Ежедневно 10:00 - 21:00
                        </div>
                    </div>
                </div>

                <div className="info-content">
                    {/* Боковое меню (десктоп) */}
                    <aside className="info-sidebar">
                        <h2>Навигация</h2>
                        <nav className="info-nav">
                            {menuItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`info-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span>{item.title}</span>
                                </button>
                            ))}
                        </nav>

                        {/* Контакты в сайдбаре */}
                        <div className="sidebar-contacts">
                            <h3>Контакты</h3>
                            <a href="tel:+79991234567" className="sidebar-phone">
                                <FiPhone /> +7 (999) 123-45-67
                            </a>
                            <a href="mailto:info@oskarmobile.ru" className="sidebar-email">
                                <FiMail /> info@oskarmobile.ru
                            </a>
                            <div className="sidebar-address">
                                <FiMapPin /> г. Москва, ул. Тверская, д. 1
                            </div>
                            <div className="sidebar-hours">
                                <FiClock /> Ежедневно 10:00 - 21:00
                            </div>
                        </div>
                    </aside>

                    {/* Основной контент */}
                    <main className="info-main">
                        {/* Секция О нас */}
                        <section id="about" className="info-section">
                            <h2>О компании OSKAR MOBILE</h2>

                            <div className="about-hero">
                                <p>
                                    OSKAR MOBILE — это современный интернет-магазин смартфонов и аксессуаров,
                                    который начал свою работу в 2020 году. За это время мы помогли тысячам клиентов
                                    найти идеальные устройства и аксессуары к ним.
                                </p>
                            </div>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-icon">📱</div>
                                    <div className="stat-info">
                                        <div className="stat-number">5000+</div>
                                        <div className="stat-label">Проданных смартфонов</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">😊</div>
                                    <div className="stat-info">
                                        <div className="stat-number">3000+</div>
                                        <div className="stat-label">Довольных клиентов</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">⭐</div>
                                    <div className="stat-info">
                                        <div className="stat-number">4.8</div>
                                        <div className="stat-label">Средний рейтинг</div>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">🏆</div>
                                    <div className="stat-info">
                                        <div className="stat-number">3 года</div>
                                        <div className="stat-label">На рынке</div>
                                    </div>
                                </div>
                            </div>

                            <div className="features-grid">
                                <div className="feature-item">
                                    <FiAward className="feature-icon" />
                                    <h4>Оригинальность</h4>
                                    <p>100% оригинальная техника с официальной гарантией</p>
                                </div>
                                <div className="feature-item">
                                    <FiHeadphones className="feature-icon" />
                                    <h4>Поддержка</h4>
                                    <p>Профессиональная помощь в выборе</p>
                                </div>
                                <div className="feature-item">
                                    <FiCheckCircle className="feature-icon" />
                                    <h4>Качество</h4>
                                    <p>Тщательная проверка каждого товара</p>
                                </div>
                            </div>
                        </section>

                        {/* Секция Доставка и оплата */}
                        <section id="delivery" className="info-section">
                            <h2>Доставка и оплата</h2>

                            <div className="delivery-grid">
                                <div className="delivery-card">
                                    <FiPackage className="delivery-icon" />
                                    <h3>Самовывоз</h3>
                                    <p>г. Москва, ул. Тверская, д. 1</p>
                                    <p className="delivery-time">Бесплатно • Сегодня</p>
                                </div>
                                <div className="delivery-card">
                                    <FiTruck className="delivery-icon" />
                                    <h3>Курьером по Москве</h3>
                                    <p>Доставка в пределах МКАД</p>
                                    <p className="delivery-price">300 ₽ • от 10 000 ₽ бесплатно</p>
                                    <p className="delivery-time">1-2 дня</p>
                                </div>
                                <div className="delivery-card">
                                    <FiPackage className="delivery-icon" />
                                    <h3>Почта России</h3>
                                    <p>По всей стране</p>
                                    <p className="delivery-price">от 500 ₽</p>
                                    <p className="delivery-time">3-10 дней</p>
                                </div>
                            </div>

                            <div className="payment-section">
                                <h3>Способы оплаты</h3>
                                <div className="payment-grid">
                                    <div className="payment-item">
                                        <FiCreditCard />
                                        <span>Банковской картой</span>
                                    </div>
                                    <div className="payment-item">
                                        <span>💵</span>
                                        <span>Наличными</span>
                                    </div>
                                    <div className="payment-item">
                                        <span>🏦</span>
                                        <span>Рассрочка</span>
                                    </div>
                                    <div className="payment-item">
                                        <span>🏧</span>
                                        <span>Перевод на карту</span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-note">
                                <h4>Важно:</h4>
                                <p>
                                    При заказе от 10 000 ₽ доставка по Москве бесплатная.
                                    Точную стоимость доставки в ваш регион рассчитает менеджер при подтверждении заказа.
                                </p>
                            </div>
                        </section>

                        {/* Секция Гарантия */}
                        <section id="warranty" className="info-section">
                            <h2>Гарантия</h2>

                            <div className="warranty-card">
                                <FiShield className="warranty-icon" />
                                <h3>Официальная гарантия 1 год</h3>
                                <p>
                                    На все смартфоны и аксессуары предоставляется официальная гарантия
                                    сроком на 12 месяцев с момента покупки.
                                </p>
                            </div>

                            <div className="warranty-features">
                                <div className="warranty-item">
                                    <h4>Что покрывает гарантия:</h4>
                                    <ul>
                                        <li>✓ Производственные дефекты</li>
                                        <li>✓ Заводской брак</li>
                                        <li>✓ Неисправности компонентов</li>
                                        <li>✓ Проблемы с аккумулятором</li>
                                    </ul>
                                </div>
                                <div className="warranty-item">
                                    <h4>Что не покрывает гарантия:</h4>
                                    <ul>
                                        <li>✗ Механические повреждения</li>
                                        <li>✗ Попадание жидкости</li>
                                        <li>✗ Износ батареи (более 80%)</li>
                                        <li>✗ Неправильная эксплуатация</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="info-note">
                                <p>
                                    Для гарантийного обслуживания необходимо предоставить товар,
                                    чек и гарантийный талон в наш сервисный центр.
                                </p>
                            </div>
                        </section>

                        {/* Секция Возврат */}
                        <section id="returns" className="info-section">
                            <h2>Возврат товара</h2>

                            <div className="returns-grid">
                                <div className="returns-card">
                                    <FiRefreshCw className="returns-icon" />
                                    <h3>14 дней на возврат</h3>
                                    <p>
                                        Вы можете вернуть товар в течение 14 дней после покупки,
                                        если он не подошел по размеру, цвету или комплектации.
                                    </p>
                                </div>
                                <div className="returns-card">
                                    <FiCheckCircle className="returns-icon" />
                                    <h3>Условия возврата</h3>
                                    <ul>
                                        <li>Товар не был в употреблении</li>
                                        <li>Сохранен товарный вид</li>
                                        <li>Наличие чека</li>
                                        <li>Полная комплектация</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="return-steps">
                                <h3>Как вернуть товар:</h3>
                                <ol>
                                    <li>Свяжитесь с нами по телефону или email</li>
                                    <li>Опишите причину возврата</li>
                                    <li>Согласуйте способ возврата</li>
                                    <li>Отправьте товар или привезите в магазин</li>
                                    <li>Получите деньги в течение 5 дней</li>
                                </ol>
                            </div>

                            <div className="info-note">
                                <p>
                                    Деньги возвращаются тем же способом, которым была произведена оплата.
                                    Срок зачисления зависит от банка и составляет от 1 до 5 дней.
                                </p>
                            </div>
                        </section>

                        {/* Секция Блог */}
                        <section id="blog" className="info-section">
                            <h2>Блог</h2>

                            <div className="blog-grid">
                                <article className="blog-card">
                                    <div className="blog-image">📱</div>
                                    <h3>Как выбрать смартфон в 2024 году</h3>
                                    <p className="blog-excerpt">
                                        Подробное руководство по выбору смартфона: процессор, камера,
                                        память и другие важные характеристики...
                                    </p>
                                    <div className="blog-meta">
                                        <span>📅 15 марта 2024</span>
                                        <span>👁️ 1234 просмотра</span>
                                    </div>
                                    <button className="blog-read-more">Читать далее →</button>
                                </article>

                                <article className="blog-card">
                                    <div className="blog-image">🔋</div>
                                    <h3>Как продлить жизнь аккумулятору</h3>
                                    <p className="blog-excerpt">
                                        Советы по правильной зарядке и эксплуатации аккумулятора
                                        современных смартфонов...
                                    </p>
                                    <div className="blog-meta">
                                        <span>📅 10 марта 2024</span>
                                        <span>👁️ 892 просмотра</span>
                                    </div>
                                    <button className="blog-read-more">Читать далее →</button>
                                </article>

                                <article className="blog-card">
                                    <div className="blog-image">📸</div>
                                    <h3>Сравнение камер iPhone 15 Pro и Samsung S24 Ultra</h3>
                                    <p className="blog-excerpt">
                                        Детальное сравнение возможностей камер двух флагманов 2024 года...
                                    </p>
                                    <div className="blog-meta">
                                        <span>📅 5 марта 2024</span>
                                        <span>👁️ 2156 просмотров</span>
                                    </div>
                                    <button className="blog-read-more">Читать далее →</button>
                                </article>

                                <article className="blog-card">
                                    <div className="blog-image">🎧</div>
                                    <h3>Топ-10 аксессуаров для смартфона</h3>
                                    <p className="blog-excerpt">
                                        Самые полезные аксессуары, которые сделают использование
                                        смартфона комфортнее...
                                    </p>
                                    <div className="blog-meta">
                                        <span>📅 1 марта 2024</span>
                                        <span>👁️ 734 просмотра</span>
                                    </div>
                                    <button className="blog-read-more">Читать далее →</button>
                                </article>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Кнопка "Наверх" */}
            {showScroll && (
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    <FiChevronUp />
                </button>
            )}
        </div>
    );
};

export default InfoPage;
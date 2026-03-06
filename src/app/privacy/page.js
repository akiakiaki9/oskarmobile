'use client';
import Link from 'next/link';
import { FiShield, FiLock, FiEye, FiDatabase, FiMail, FiClock, FiUser, FiMapPin  } from 'react-icons/fi';
import '../styles/legal.css';

const PrivacyPage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                {/* Заголовок */}
                <div className="legal-header">
                    <h1 className="legal-title">
                        <FiShield className="legal-title-icon" />
                        Политика конфиденциальности
                    </h1>
                    <p className="legal-date">Последнее обновление: 15 марта 2024 г.</p>
                </div>

                {/* Содержание */}
                <div className="legal-content">
                    <div className="legal-section">
                        <h2>1. Общие положения</h2>
                        <p>
                            Настоящая политика обработки персональных данных составлена в соответствии с требованиями
                            Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок
                            обработки персональных данных и меры по обеспечению безопасности персональных данных,
                            предпринимаемые OSKAR MOBILE (далее – Оператор).
                        </p>
                        <p>
                            Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение
                            прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты
                            прав на неприкосновенность частной жизни, личную и семейную тайну.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>2. Основные понятия</h2>
                        <ul className="legal-list">
                            <li>
                                <strong>Персональные данные</strong> — любая информация, относящаяся прямо или косвенно
                                к определенному или определяемому Пользователю сайта;
                            </li>
                            <li>
                                <strong>Пользователь</strong> — любой посетитель сайта https://oskarmobile.ru;
                            </li>
                            <li>
                                <strong>Обработка персональных данных</strong> — любое действие с персональными данными;
                            </li>
                            <li>
                                <strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения
                                Оператором требование не раскрывать персональные данные без согласия Пользователя.
                            </li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>3. Сбор персональных данных</h2>
                        <p>Мы собираем следующие данные:</p>
                        <div className="data-grid">
                            <div className="data-card">
                                <FiUser className="data-icon" />
                                <h3>Личная информация</h3>
                                <p>Имя, фамилия, контактный телефон, email</p>
                            </div>
                            <div className="data-card">
                                <FiMapPin className="data-icon" />
                                <h3>Адрес доставки</h3>
                                <p>Город, улица, дом, квартира, индекс</p>
                            </div>
                            <div className="data-card">
                                <FiDatabase className="data-icon" />
                                <h3>История заказов</h3>
                                <p>Список покупок, предпочтения, отзывы</p>
                            </div>
                            <div className="data-card">
                                <FiEye className="data-icon" />
                                <h3>Технические данные</h3>
                                <p>IP-адрес, cookie, данные о поведении на сайте</p>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>4. Цели обработки персональных данных</h2>
                        <ul className="legal-list">
                            <li>Оформление и выполнение заказов;</li>
                            <li>Связь с клиентом (подтверждение заказа, информирование о статусе);</li>
                            <li>Улучшение качества обслуживания;</li>
                            <li>Проведение маркетинговых исследований и рассылок (с согласия);</li>
                            <li>Защита от мошенничества и обеспечение безопасности.</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>5. Правовые основания обработки</h2>
                        <p>Мы обрабатываем персональные данные только в следующих случаях:</p>
                        <ul className="legal-list">
                            <li>Пользователь дал согласие на обработку своих персональных данных;</li>
                            <li>Обработка необходима для исполнения договора (купли-продажи);</li>
                            <li>Обработка необходима для соблюдения законодательства РФ.</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>6. Защита персональных данных</h2>
                        <div className="protection-features">
                            <div className="protection-item">
                                <FiLock className="protection-icon" />
                                <div>
                                    <h4>Шифрование данных</h4>
                                    <p>Все данные передаются по защищенному протоколу HTTPS</p>
                                </div>
                            </div>
                            <div className="protection-item">
                                <FiShield className="protection-icon" />
                                <div>
                                    <h4>Ограниченный доступ</h4>
                                    <p>Доступ к данным имеют только уполномоченные сотрудники</p>
                                </div>
                            </div>
                            <div className="protection-item">
                                <FiClock className="protection-icon" />
                                <div>
                                    <h4>Регулярный аудит</h4>
                                    <p>Мы постоянно обновляем системы безопасности</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>7. Права пользователя</h2>
                        <p>Вы имеете право:</p>
                        <ul className="legal-list">
                            <li>Получить информацию о хранении ваших данных;</li>
                            <li>Требовать исправления неточных данных;</li>
                            <li>Требовать удаления ваших данных;</li>
                            <li>Отозвать согласие на обработку данных;</li>
                            <li>Обжаловать действия Оператора.</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>8. Сроки хранения</h2>
                        <p>
                            Персональные данные хранятся не дольше, чем этого требуют цели обработки,
                            если иное не предусмотрено законодательством РФ. После достижения целей
                            обработки данные уничтожаются или обезличиваются.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>9. Контактная информация</h2>
                        <p>По всем вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
                        <div className="contact-block">
                            <p><strong>Email:</strong> <a href="mailto:privacy@oskarmobile.ru">privacy@oskarmobile.ru</a></p>
                            <p><strong>Телефон:</strong> <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
                            <p><strong>Адрес:</strong> г. Москва, ул. Тверская, д. 1, офис 101</p>
                        </div>
                    </div>

                    <div className="legal-note">
                        <p>
                            Используя наш сайт, вы подтверждаете свое согласие с условиями
                            настоящей Политики конфиденциальности.
                        </p>
                    </div>
                </div>

                {/* Кнопка возврата */}
                <div className="legal-footer">
                    <Link href="/" className="back-button">
                        ← Вернуться на главную
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
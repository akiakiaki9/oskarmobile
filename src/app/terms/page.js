'use client';
import Link from 'next/link';
import {
    FiFileText,
    FiCheckCircle,
    FiAlertCircle,
    FiPackage,
    FiCreditCard,
    FiTruck,
    FiShield,
    FiUser
} from 'react-icons/fi';
import '../styles/legal.css';

const TermsPage = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                {/* Заголовок */}
                <div className="legal-header">
                    <h1 className="legal-title">
                        <FiFileText className="legal-title-icon" />
                        Пользовательское соглашение
                    </h1>
                    <p className="legal-date">Последнее обновление: 15 марта 2024 г.</p>
                </div>

                {/* Содержание */}
                <div className="legal-content">
                    <div className="legal-section">
                        <h2>1. Термины и определения</h2>
                        <ul className="legal-list">
                            <li>
                                <strong>Продавец</strong> — OSKAR MOBILE, интернет-магазин по продаже
                                смартфонов и аксессуаров;
                            </li>
                            <li>
                                <strong>Покупатель</strong> — любое физическое или юридическое лицо,
                                совершившее заказ в интернет-магазине;
                            </li>
                            <li>
                                <strong>Товар</strong> — смартфоны, аксессуары и другие устройства,
                                представленные на сайте;
                            </li>
                            <li>
                                <strong>Заказ</strong> — должным образом оформленный запрос Покупателя
                                на приобретение Товара.
                            </li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>2. Общие положения</h2>
                        <p>
                            2.1. Настоящее Соглашение регулирует отношения между Продавцом и Покупателем
                            при покупке товаров в интернет-магазине OSKAR MOBILE.
                        </p>
                        <p>
                            2.2. Оформляя заказ на сайте, Покупатель соглашается с условиями настоящего
                            Соглашения.
                        </p>
                        <p>
                            2.3. Продавец оставляет за собой право вносить изменения в Соглашение без
                            уведомления Покупателя.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>3. Оформление заказа</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <h4>Выбор товара</h4>
                                <p>Покупатель выбирает товар и добавляет его в корзину</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">2</div>
                                <h4>Оформление</h4>
                                <p>Заполнение контактных данных и выбор способа доставки</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">3</div>
                                <h4>Подтверждение</h4>
                                <p>Менеджер связывается для подтверждения заказа</p>
                            </div>
                            <div className="step-card">
                                <div className="step-number">4</div>
                                <h4>Оплата</h4>
                                <p>Выбранным способом оплаты</p>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>4. Права и обязанности сторон</h2>

                        <h3>4.1. Продавец обязуется:</h3>
                        <ul className="legal-list">
                            <li>Передать товар в соответствии с заказом;</li>
                            <li>Обеспечить конфиденциальность данных Покупателя;</li>
                            <li>Предоставлять полную информацию о товаре;</li>
                            <li>Возвращать денежные средства при возврате товара.</li>
                        </ul>

                        <h3>4.2. Покупатель обязуется:</h3>
                        <ul className="legal-list">
                            <li>Предоставить достоверную информацию для доставки;</li>
                            <li>Оплатить товар в установленные сроки;</li>
                            <li>Принять товар и проверить его при получении.</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>5. Стоимость и оплата</h2>
                        <div className="payment-terms">
                            <div className="term-item">
                                <FiCreditCard className="term-icon" />
                                <div>
                                    <h4>Цена товара</h4>
                                    <p>Указана на сайте, может меняться в зависимости от акций</p>
                                </div>
                            </div>
                            <div className="term-item">
                                <FiPackage className="term-icon" />
                                <div>
                                    <h4>Стоимость доставки</h4>
                                    <p>Рассчитывается индивидуально, либо бесплатно при заказе от 10 000 ₽</p>
                                </div>
                            </div>
                            <div className="term-item">
                                <FiCheckCircle className="term-icon" />
                                <div>
                                    <h4>Способы оплаты</h4>
                                    <p>Наличные, банковская карта, рассрочка, перевод</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>6. Доставка</h2>
                        <div className="delivery-info">
                            <div className="delivery-item">
                                <FiTruck className="delivery-item-icon" />
                                <div>
                                    <h4>Сроки доставки</h4>
                                    <p>По Москве: 1-2 дня, по России: 3-10 дней</p>
                                </div>
                            </div>
                            <div className="delivery-item">
                                <FiAlertCircle className="delivery-item-icon" />
                                <div>
                                    <h4>Просрочка доставки</h4>
                                    <p>При задержке более 3 дней Покупатель вправе отказаться от заказа</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>7. Возврат товара</h2>
                        <p>
                            7.1. Покупатель вправе отказаться от товара в течение 14 дней с момента получения,
                            если товар не был в употреблении и сохранен товарный вид.
                        </p>
                        <p>
                            7.2. Возврат товара надлежащего качества возможен, если сохранены его потребительские
                            свойства, фабричные ярлыки и упаковка.
                        </p>
                        <p>
                            7.3. Возврат денежных средств осуществляется в течение 5 рабочих дней с момента
                            получения товара Продавцом.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>8. Гарантия</h2>
                        <div className="warranty-block">
                            <FiShield className="warranty-icon" />
                            <div>
                                <h4>Гарантийный срок</h4>
                                <p>На все смартфоны предоставляется гарантия 12 месяцев с даты покупки.</p>
                                <p>Гарантия не распространяется на механические повреждения и следы неправильной эксплуатации.</p>
                            </div>
                        </div>
                    </div>

                    <div className="legal-section">
                        <h2>9. Ответственность</h2>
                        <p>
                            9.1. Продавец не несет ответственности за убытки, возникшие вследствие
                            неправильного использования товара Покупателем.
                        </p>
                        <p>
                            9.2. Продавец не отвечает за содержание и достоверность информации,
                            предоставленной Покупателем при оформлении заказа.
                        </p>
                        <p>
                            9.3. Продавец освобождается от ответственности за нарушение условий
                            Соглашения, если такое нарушение вызвано форс-мажорными обстоятельствами.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>10. Разрешение споров</h2>
                        <p>
                            10.1. Все споры и разногласия решаются путем переговоров.
                        </p>
                        <p>
                            10.2. При невозможности достижения согласия споры подлежат рассмотрению
                            в судебном порядке в соответствии с законодательством РФ.
                        </p>
                    </div>

                    <div className="legal-section">
                        <h2>11. Реквизиты</h2>
                        <div className="requisites">
                            <p><strong>ИП Оскаров О.О.</strong></p>
                            <p>ИНН: 123456789012</p>
                            <p>ОГРН: 123456789012345</p>
                            <p>Юридический адрес: г. Москва, ул. Тверская, д. 1, офис 101</p>
                        </div>
                    </div>

                    <div className="legal-note">
                        <FiUser className="legal-note-icon" />
                        <p>
                            Нажимая кнопку «Оформить заказ», вы подтверждаете, что ознакомлены
                            с условиями настоящего Пользовательского соглашения и принимаете их.
                        </p>
                    </div>
                </div>

                {/* Кнопки действий */}
                <div className="legal-footer">
                    <div className="legal-buttons">
                        <Link href="/" className="back-button">
                            ← Вернуться на главную
                        </Link>
                        <Link href="/privacy" className="privacy-link">
                            Политика конфиденциальности →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
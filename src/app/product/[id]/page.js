// app/product/[id]/page.jsx - добавить useShop и функции
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/app/utils/data';
import { useShop } from '@/app/context/ShopContext';
import { 
    FiHeart, 
    FiShoppingCart, 
    FiCheck, 
    FiTruck, 
    FiShield, 
    FiRefreshCw,
    FiCreditCard,
    FiMinus,
    FiPlus,
    FiX
} from 'react-icons/fi';
import './product.css';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart, toggleFavorite, isInFavorites } = useShop();
    const [product, setProduct] = useState(null);
    const [selectedMemory, setSelectedMemory] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [purchaseType, setPurchaseType] = useState('call');
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            if (foundProduct.memory) setSelectedMemory(foundProduct.memory[0]);
            if (foundProduct.colors) setSelectedColor(foundProduct.colors[0]);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="product-loading">
                <div className="loading-spinner"></div>
                <p>Загрузка товара...</p>
            </div>
        );
    }

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const calculateMonthlyPayment = (price) => {
        return Math.round(price / 12).toLocaleString('ru-RU') + ' ₽/мес';
    };

    const handleQuantityChange = (type) => {
        if (type === 'increment' && quantity < 10) {
            setQuantity(prev => prev + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedMemory, selectedColor);
        setIsAddedToCart(true);
        setTimeout(() => setIsAddedToCart(false), 2000);
    };

    const handleBuyNow = () => {
        // Сначала добавляем в корзину, потом открываем модалку
        addToCart(product, quantity, selectedMemory, selectedColor);
        setIsModalOpen(true);
    };

    const handleToggleFavorite = () => {
        toggleFavorite(product);
    };

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        alert(`Заявка отправлена! Мы перезвоним вам в ближайшее время. Товар: ${product.name}`);
        setIsModalOpen(false);
        setPhoneNumber('');
    };

    const similarProducts = products
        .filter(p => p.brand === product.brand && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="product-page">
            <div className="product-container">
                {/* Хлебные крошки */}
                <div className="breadcrumbs">
                    <Link href="/">Главная</Link>
                    <span>/</span>
                    <Link href={`/brand/${product.brand.toLowerCase()}`}>{product.brand}</Link>
                    <span>/</span>
                    <span className="current">{product.name}</span>
                </div>

                {/* Основная информация о товаре */}
                <div className="product-main">
                    {/* Галерея изображений */}
                    <div className="product-gallery">
                        <div className="main-image">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                onError={(e) => {
                                    e.target.src = '/images/no-image.jpg';
                                }}
                            />
                            {product.oldPrice && (
                                <span className="product-badge discount">
                                    -{Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}%
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Информация о товаре */}
                    <div className="product-info">
                        <h1 className="product-title">{product.name}</h1>
                        
                        <div className="product-meta">
                            <div className="product-rating">
                                <div className="stars">
                                    {'★'.repeat(Math.floor(product.rating))}
                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                </div>
                                <span className="reviews">{product.reviews} отзывов</span>
                            </div>
                            <span className="product-sku">Артикул: {product.id}</span>
                        </div>

                        {/* Цена */}
                        <div className="product-price-section">
                            <div className="price-block">
                                <span className="current-price">{formatPrice(product.price)}</span>
                                {product.oldPrice && (
                                    <span className="old-price">{formatPrice(product.oldPrice)}</span>
                                )}
                            </div>
                            <div className="installment">
                                <FiCreditCard />
                                <span>Рассрочка: {calculateMonthlyPayment(product.price)} на 12 месяцев</span>
                            </div>
                        </div>

                        {/* Выбор памяти */}
                        {product.memory && (
                            <div className="product-option">
                                <h3>Выберите память:</h3>
                                <div className="option-buttons">
                                    {product.memory.map(memory => (
                                        <button
                                            key={memory}
                                            className={`option-btn ${selectedMemory === memory ? 'active' : ''}`}
                                            onClick={() => setSelectedMemory(memory)}
                                        >
                                            {memory}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Выбор цвета */}
                        {product.colors && (
                            <div className="product-option">
                                <h3>Выберите цвет:</h3>
                                <div className="color-buttons">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => setSelectedColor(color)}
                                            title={color === "#AE5328" ? "Оранжевый" : ""}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Количество */}
                        <div className="product-option">
                            <h3>Количество:</h3>
                            <div className="quantity-selector">
                                <button 
                                    className="quantity-btn"
                                    onClick={() => handleQuantityChange('decrement')}
                                    disabled={quantity === 1}
                                >
                                    <FiMinus />
                                </button>
                                <span className="quantity">{quantity}</span>
                                <button 
                                    className="quantity-btn"
                                    onClick={() => handleQuantityChange('increment')}
                                    disabled={quantity === 10}
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        {/* Наличие */}
                        <div className="product-stock">
                            {product.inStock ? (
                                <span className="in-stock">
                                    <FiCheck /> В наличии
                                </span>
                            ) : (
                                <span className="out-of-stock">Нет в наличии</span>
                            )}
                        </div>

                        {/* Кнопки действий */}
                        <div className="product-actions">
                            <button 
                                className={`add-to-cart ${isAddedToCart ? 'added' : ''}`}
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                            >
                                {isAddedToCart ? (
                                    <>
                                        <FiCheck /> Добавлено
                                    </>
                                ) : (
                                    <>
                                        <FiShoppingCart /> В корзину
                                    </>
                                )}
                            </button>
                            <button 
                                className="buy-now"
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                            >
                                Купить сейчас
                            </button>
                            <button 
                                className={`favorite-btn ${isInFavorites(product.id) ? 'active' : ''}`}
                                onClick={handleToggleFavorite}
                                title={isInFavorites(product.id) ? "Удалить из избранного" : "Добавить в избранное"}
                            >
                                <FiHeart />
                            </button>
                        </div>

                        {/* Преимущества */}
                        <div className="product-benefits">
                            <div className="benefit">
                                <FiTruck />
                                <span>Бесплатная доставка от 10 000 ₽</span>
                            </div>
                            <div className="benefit">
                                <FiShield />
                                <span>Гарантия 1 год</span>
                            </div>
                            <div className="benefit">
                                <FiRefreshCw />
                                <span>Возврат 14 дней</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Табы с информацией */}
                <div className="product-tabs">
                    <div className="tabs-header">
                        <button 
                            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Описание
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'characteristics' ? 'active' : ''}`}
                            onClick={() => setActiveTab('characteristics')}
                        >
                            Характеристики
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Отзывы ({product.reviews})
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'delivery' ? 'active' : ''}`}
                            onClick={() => setActiveTab('delivery')}
                        >
                            Доставка и оплата
                        </button>
                    </div>

                    <div className="tabs-content">
                        {activeTab === 'description' && (
                            <div className="tab-pane">
                                <h3>Описание товара</h3>
                                <p>{product.name} - это современный смартфон с отличными характеристиками.</p>
                                <p>В комплекте: смартфон, зарядное устройство, кабель USB, документация.</p>
                            </div>
                        )}

                        {activeTab === 'characteristics' && (
                            <div className="tab-pane">
                                <h3>Характеристики</h3>
                                <ul className="characteristics-list">
                                    <li><span>Бренд:</span> {product.brand}</li>
                                    <li><span>Модель:</span> {product.name}</li>
                                    {product.memory && <li><span>Память:</span> {product.memory.join(', ')}</li>}
                                    {product.colors && <li><span>Цвета:</span> {product.colors.length} вариантов</li>}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="tab-pane">
                                <h3>Отзывы покупателей</h3>
                                <p>У этого товара {product.reviews} отзывов. Средний рейтинг: {product.rating} из 5.</p>
                            </div>
                        )}

                        {activeTab === 'delivery' && (
                            <div className="tab-pane">
                                <h3>Доставка и оплата</h3>
                                <p>• Доставка по Москве - 300 ₽, от 10 000 ₽ бесплатно</p>
                                <p>• Доставка по России - от 500 ₽</p>
                                <p>• Оплата: наличные, карта, рассрочка</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Похожие товары */}
                {similarProducts.length > 0 && (
                    <div className="similar-products">
                        <h2>Похожие товары</h2>
                        <div className="similar-grid">
                            {similarProducts.map(item => (
                                <Link href={`/product/${item.id}`} key={item.id} className="similar-card">
                                    <div className="similar-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <span className="similar-price">{formatPrice(item.price)}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Модальное окно покупки */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            <FiX />
                        </button>

                        <h2>Купить товар</h2>
                        <p className="modal-product">{product.name}</p>

                        {/* Переключатель типа покупки */}
                        <div className="purchase-toggle">
                            <button 
                                className={`toggle-btn ${purchaseType === 'form' ? 'active' : ''}`}
                                onClick={() => setPurchaseType('form')}
                            >
                                Заказать звонок
                            </button>
                            <button 
                                className={`toggle-btn ${purchaseType === 'call' ? 'active' : ''}`}
                                onClick={() => setPurchaseType('call')}
                            >
                                Позвонить самим
                            </button>
                        </div>

                        {purchaseType === 'form' ? (
                            // Форма заказа
                            <form onSubmit={handlePhoneSubmit} className="purchase-form">
                                <div className="form-group">
                                    <label>Ваш телефон</label>
                                    <input 
                                        type="tel"
                                        placeholder="+7 (999) 123-45-67"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Товар</label>
                                    <input 
                                        type="text"
                                        value={`${product.name} - ${formatPrice(product.price)}`}
                                        readOnly
                                        className="readonly"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Количество</label>
                                    <input 
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        className="readonly"
                                    />
                                </div>
                                <button type="submit" className="submit-btn">
                                    Заказать звонок
                                </button>
                                <p className="form-note">
                                    Менеджер перезвонит вам в течение 5 минут
                                </p>
                            </form>
                        ) : (
                            // Информация для звонка
                            <div className="call-info">
                                <div className="call-icon">📞</div>
                                <h3>Позвоните нам</h3>
                                <a href="tel:+79991234567" className="call-phone">
                                    +7 (999) 123-45-67
                                </a>
                                <p className="call-note">
                                    Скажите менеджеру, что хотите заказать:
                                </p>
                                <div className="call-product-info">
                                    <strong>{product.name}</strong>
                                    <span>Количество: {quantity}</span>
                                    <span>Сумма: {formatPrice(product.price * quantity)}</span>
                                </div>
                                <button 
                                    className="call-btn"
                                    onClick={() => window.location.href = 'tel:+79991234567'}
                                >
                                    Позвонить сейчас
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
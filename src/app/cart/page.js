// app/cart/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight, FiCreditCard, FiTruck } from 'react-icons/fi';
import './cart.css';

const CartPage = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart
    } = useShop();

    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState('standard');

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const handlePromoSubmit = (e) => {
        e.preventDefault();
        if (promoCode.toLowerCase() === 'oskar2024') {
            setPromoApplied(true);
        } else {
            alert('Неверный промокод');
        }
    };

    const subtotal = getCartTotal();
    const deliveryPrice = deliveryMethod === 'express' ? 500 : 0;
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const total = subtotal + deliveryPrice - discount;

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <FiShoppingBag size={80} />
                        </div>
                        <h2>Корзина пуста</h2>
                        <p>Добавьте товары в корзину, чтобы оформить заказ</p>
                        <Link href="/" className="continue-shopping-btn">
                            Перейти к покупкам
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1 className="cart-title">Корзина</h1>

                <div className="cart-content">
                    {/* Список товаров */}
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={`${item.id}-${item.memory}-${item.color}-${index}`} className="cart-item">
                                <Link href={`/product/${item.id}`} className="cart-item-image">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.src = '/images/no-image.jpg';
                                        }}
                                    />
                                </Link>

                                <div className="cart-item-info">
                                    <div className="cart-item-header">
                                        <Link href={`/product/${item.id}`} className="cart-item-name">
                                            {item.name}
                                        </Link>
                                        <button
                                            className="cart-item-remove"
                                            onClick={() => removeFromCart(item.id, item.memory, item.color)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>

                                    <div className="cart-item-details">
                                        {item.memory && (
                                            <span className="cart-item-detail">Память: {item.memory}</span>
                                        )}
                                        {item.color && (
                                            <span className="cart-item-detail">
                                                Цвет: <span className="color-dot" style={{ backgroundColor: item.color }}></span>
                                            </span>
                                        )}
                                    </div>

                                    <div className="cart-item-footer">
                                        <div className="cart-item-quantity">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.memory, item.color)}
                                                disabled={item.quantity <= 1}
                                            >
                                                <FiMinus />
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.memory, item.color)}
                                                disabled={item.quantity >= 10}
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                        <div className="cart-item-price">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="clear-cart-btn" onClick={clearCart}>
                            <FiTrash2 /> Очистить корзину
                        </button>
                    </div>

                    {/* Боковая панель с итогом */}
                    <div className="cart-sidebar">
                        <div className="cart-summary">
                            <h3>Ваш заказ</h3>

                            <div className="summary-row">
                                <span>Товары ({cart.length})</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>

                            {/* Промокод */}
                            <div className="promo-section">
                                <form onSubmit={handlePromoSubmit} className="promo-form">
                                    <input
                                        type="text"
                                        placeholder="Промокод"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        disabled={promoApplied}
                                    />
                                    <button type="submit" disabled={promoApplied}>
                                        Применить
                                    </button>
                                </form>
                                {promoApplied && (
                                    <div className="promo-success">
                                        Промокод применен! Скидка 10%
                                    </div>
                                )}
                            </div>

                            {/* Доставка */}
                            <div className="delivery-section">
                                <h4>Способ доставки</h4>
                                <label className="delivery-option">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="standard"
                                        checked={deliveryMethod === 'standard'}
                                        onChange={(e) => setDeliveryMethod(e.target.value)}
                                    />
                                    <div className="delivery-option-info">
                                        <span className="delivery-name">Стандартная доставка</span>
                                        <span className="delivery-time">3-5 дней</span>
                                        <span className="delivery-price">Бесплатно</span>
                                    </div>
                                </label>
                                <label className="delivery-option">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="express"
                                        checked={deliveryMethod === 'express'}
                                        onChange={(e) => setDeliveryMethod(e.target.value)}
                                    />
                                    <div className="delivery-option-info">
                                        <span className="delivery-name">Экспресс-доставка</span>
                                        <span className="delivery-time">1-2 дня</span>
                                        <span className="delivery-price">500 ₽</span>
                                    </div>
                                </label>
                            </div>

                            {/* Итоговая сумма */}
                            {discount > 0 && (
                                <div className="summary-row discount">
                                    <span>Скидка</span>
                                    <span>-{formatPrice(discount)}</span>
                                </div>
                            )}

                            {deliveryPrice > 0 && (
                                <div className="summary-row">
                                    <span>Доставка</span>
                                    <span>{formatPrice(deliveryPrice)}</span>
                                </div>
                            )}

                            <div className="summary-row total">
                                <span>Итого</span>
                                <span>{formatPrice(total)}</span>
                            </div>

                            <button className="checkout-btn">
                                <FiCreditCard /> Оформить заказ
                            </button>

                            <div className="payment-info">
                                <FiTruck />
                                <span>Бесплатная доставка при заказе от 10 000 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
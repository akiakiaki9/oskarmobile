// app/favorites/page.jsx
'use client';
import Link from 'next/link';
import { useShop } from '../context/ShopContext';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import './favorites.css';

const FavoritesPage = () => {
    const { favorites, removeFromFavorites, addToCart, isInFavorites } = useShop();

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const handleAddToCart = (product) => {
        addToCart(product, 1);
    };

    if (favorites.length === 0) {
        return (
            <div className="favorites-page">
                <div className="favorites-container">
                    <div className="empty-favorites">
                        <div className="empty-favorites-icon">
                            <FiHeart size={80} />
                        </div>
                        <h2>Избранное пусто</h2>
                        <p>Добавляйте товары в избранное, чтобы не потерять их</p>
                        <Link href="/" className="continue-shopping-btn">
                            Перейти к покупкам
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-page">
            <div className="favorites-container">
                <h1 className="favorites-title">
                    Избранное
                    <span className="favorites-count">{favorites.length} товаров</span>
                </h1>

                <div className="favorites-grid">
                    {favorites.map(product => (
                        <div key={product.id} className="favorite-card">
                            <Link href={`/product/${product.id}`} className="favorite-image">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    onError={(e) => {
                                        e.target.src = '/images/no-image.jpg';
                                    }}
                                />
                            </Link>

                            <div className="favorite-info">
                                <Link href={`/product/${product.id}`} className="favorite-name">
                                    {product.name}
                                </Link>

                                <div className="favorite-rating">
                                    <div className="stars">
                                        {'★'.repeat(Math.floor(product.rating))}
                                        {'☆'.repeat(5 - Math.floor(product.rating))}
                                    </div>
                                    <span>{product.reviews} отзывов</span>
                                </div>

                                <div className="favorite-price">
                                    {formatPrice(product.price)}
                                </div>

                                <div className="favorite-actions">
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        <FiShoppingCart /> В корзину
                                    </button>
                                    <button
                                        className="remove-favorite-btn"
                                        onClick={() => removeFromFavorites(product.id)}
                                    >
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;
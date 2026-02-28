// components/Products.jsx
'use client';
import Link from 'next/link';
import { FiArrowRight, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { products } from '@/app/utils/data';
import { useShop } from '@/app/context/ShopContext';
import { useState } from 'react';
import './products.css';

const Products = () => {
    const { addToCart, toggleFavorite, isInFavorites } = useShop();
    const [addedToCart, setAddedToCart] = useState({});

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    // Группируем товары по брендам
    const appleProducts = products.filter(p => p.brand === 'Apple').slice(0, 4);
    const samsungProducts = products.filter(p => p.brand === 'Samsung').slice(0, 4);
    const xiaomiProducts = products.filter(p => p.brand === 'Xiaomi').slice(0, 4);
    const accessories = products.filter(p => p.category === 'accessories').slice(0, 4);

    const handleAddToCart = (e, product) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        addToCart(product, 1);

        // Показываем уведомление
        setAddedToCart(prev => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddedToCart(prev => ({ ...prev, [product.id]: false }));
        }, 2000);
    };

    const handleToggleFavorite = (e, product) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        toggleFavorite(product);
    };

    const ProductCard = ({ product }) => {
        const [imgError, setImgError] = useState(false);

        const handleImageError = () => {
            setImgError(true);
        };

        return (
            <div className="product-card-wrapper">
                <Link
                    href={`/product/${product.id}`}
                    className="product-card"
                >
                    <div className="product-card-image">
                        {!imgError ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                onError={handleImageError}
                            />
                        ) : (
                            <div className="no-image">
                                <span>📱</span>
                                <span>Нет фото</span>
                            </div>
                        )}
                        {product.oldPrice && (
                            <span className="product-discount">
                                -{Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}%
                            </span>
                        )}
                    </div>

                    <div className="product-card-info">
                        <h3 className="product-card-name">{product.name}</h3>

                        <div className="product-rating">
                            <div className="stars">
                                {'★'.repeat(Math.floor(product.rating))}
                                {'☆'.repeat(5 - Math.floor(product.rating))}
                            </div>
                            <span className="reviews">{product.reviews} отзывов</span>
                        </div>

                        <div className="product-price">
                            <span className="current-price">{formatPrice(product.price)}</span>
                            {product.oldPrice && (
                                <span className="old-price">{formatPrice(product.oldPrice)}</span>
                            )}
                        </div>

                        {product.memory && (
                            <div className="product-memory">
                                {product.memory.slice(0, 2).map(m => (
                                    <span key={m} className="memory-chip">{m}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </Link>

                <div className="product-card-actions">
                    <button
                        className={`action-btn favorite-btn ${isInFavorites(product.id) ? 'active' : ''}`}
                        onClick={(e) => handleToggleFavorite(e, product)}
                        title={isInFavorites(product.id) ? "Удалить из избранного" : "Добавить в избранное"}
                    >
                        <FiHeart size={18} />
                    </button>
                    <button
                        className={`action-btn cart-btn ${addedToCart[product.id] ? 'added' : ''}`}
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={addedToCart[product.id]}
                        title={addedToCart[product.id] ? "Добавлено" : "Добавить в корзину"}
                    >
                        {addedToCart[product.id] ? (
                            <>✓</>
                        ) : (
                            <FiShoppingCart size={18} />
                        )}
                    </button>
                </div>
            </div>
        );
    };

    const ProductSection = ({ title, brand, products, link }) => (
        <section className="products-section">
            <div className="products-header">
                <h2 className="products-title">
                    {title}
                    {brand && (
                        <span className="products-brand">{brand}</span>
                    )}
                </h2>
                {link && (
                    <Link href={link} className="products-link">
                        Все товары
                        <FiArrowRight className="products-link-icon" />
                    </Link>
                )}
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );

    return (
        <div className="products-container">
            <ProductSection
                title="Apple"
                brand="iPhone"
                products={appleProducts}
                link="/brand/apple"
            />

            <ProductSection
                title="Samsung"
                brand="Galaxy"
                products={samsungProducts}
                link="/brand/samsung"
            />

            <ProductSection
                title="Xiaomi"
                brand="Redmi & POCO"
                products={xiaomiProducts}
                link="/brand/xiaomi"
            />

            <ProductSection
                title="Аксессуары"
                products={accessories}
                link="/category/accessories"
            />
        </div>
    );
};

export default Products;
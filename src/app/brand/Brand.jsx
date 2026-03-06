// app/brand/page.jsx
'use client';
import Link from 'next/link';
import { products } from '../utils/data';
import { FiArrowRight } from 'react-icons/fi';
import './brands.css';

// Компоненты SVG логотипов
const BrandIcons = {
    Apple: () => (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.69 3.56-1.702z" />
        </svg>
    ),
    Samsung: () => (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M6 12 L18 12 M12 6 L12 18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    Xiaomi: () => (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    ),
    Google: () => (
        <svg viewBox="0 0 24 24" width="48" height="48">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    ),
    HONOR: () => (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
    ),
    Spigen: () => (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
            <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L19 9l-7 3.5L5 9l7-3.5zM4 9.5l7 3.5v7L4 16.5v-7zm9 10.5v-7l7-3.5v7L13 20z" />
        </svg>
    )
};

// Иконка-заглушка для неизвестных брендов
const DefaultBrandIcon = () => (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const BrandsPage = () => {
    // Получаем все уникальные бренды
    const brands = [...new Set(products.map(p => p.brand))].sort();

    // Считаем количество товаров для каждого бренда
    const getBrandCount = (brand) => {
        return products.filter(p => p.brand === brand).length;
    };

    // Получаем популярные товары для бренда (для превью)
    const getBrandPreview = (brand) => {
        return products.filter(p => p.brand === brand).slice(0, 3);
    };

    // Функция для получения иконки бренда
    const getBrandIcon = (brand) => {
        const IconComponent = BrandIcons[brand] || DefaultBrandIcon;
        return <IconComponent />;
    };

    return (
        <div className="brands-page">
            <div className="brands-container">
                {/* Заголовок */}
                <div className="brands-header">
                    <h1 className="brands-title">Все бренды</h1>
                    <p className="brands-subtitle">
                        {brands.length} брендов • {products.length} товаров
                    </p>
                </div>

                {/* Сетка брендов */}
                <div className="brands-grid">
                    {brands.map(brand => {
                        const previewProducts = getBrandPreview(brand);

                        return (
                            <Link
                                key={brand}
                                href={`/brand/${brand.toLowerCase()}`}
                                className="brand-card"
                                data-brand={brand}
                            >
                                <div className="brand-card-header">
                                    <span className="brand-icon">
                                        {getBrandIcon(brand)}
                                    </span>
                                    <h2 className="brand-name">{brand}</h2>
                                    <span className="brand-count">
                                        {getBrandCount(brand)} товаров
                                    </span>
                                </div>

                                {/* Превью товаров */}
                                <div className="brand-preview">
                                    {previewProducts.map(product => (
                                        <div key={product.id} className="preview-item">
                                            <div className="preview-image">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = '/images/no-image.jpg';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {previewProducts.length === 3 && (
                                        <div className="preview-more">
                                            <span>+{getBrandCount(brand) - 3}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Популярные категории */}
                                <div className="brand-categories">
                                    {['smartphones', 'accessories'].map(category => {
                                        const count = products.filter(
                                            p => p.brand === brand && p.category === category
                                        ).length;
                                        if (count === 0) return null;
                                        return (
                                            <span key={category} className="category-tag">
                                                {category === 'smartphones' ? '📱 Смартфоны' : '🎧 Аксессуары'} {count}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="brand-card-footer">
                                    <span className="brand-link">
                                        Перейти в магазин
                                        <FiArrowRight className="brand-link-icon" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* SEO текст */}
                <div className="brands-seo">
                    <h2>Магазин телефонов OSKAR MOBILE</h2>
                    <p>
                        В нашем магазине представлены товары ведущих мировых брендов:
                        Apple, Samsung, Xiaomi и многих других. Мы гарантируем оригинальность
                        всей продукции и предоставляем официальную гарантию.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrandsPage;
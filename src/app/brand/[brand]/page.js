// app/brand/[brand]/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/app/utils/data';
import { FiFilter, FiGrid, FiList, FiChevronDown, FiX } from 'react-icons/fi';
import './brand.css';

const BrandPage = () => {
    const { brand } = useParams();
    const [brandProducts, setBrandProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState('popular');
    const [viewMode, setViewMode] = useState('grid');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Заглавная буква для бренда
    const brandName = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();

    useEffect(() => {
        // Фильтруем товары по бренду
        let filtered = products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
        setBrandProducts(filtered);
        setFilteredProducts(filtered);
    }, [brand]);

    useEffect(() => {
        // Применяем все фильтры
        let filtered = [...brandProducts];

        // Фильтр по категориям
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
        }

        // Фильтр по цене
        filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

        // Сортировка
        switch (sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
            default:
                filtered.sort((a, b) => b.reviews - a.reviews);
                break;
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [selectedCategories, priceRange, sortBy, brandProducts]);

    // Получаем уникальные категории
    const categories = [...new Set(brandProducts.map(p => p.category))];

    // Пагинация
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const handleCategoryToggle = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ min: 0, max: 200000 });
        setSortBy('popular');
    };

    const ProductCard = ({ product }) => (
        <Link href={`/product/${product.id}`} className="product-card">
            <div className="product-card-image">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = '/images/no-image.jpg';
                    }}
                />
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
    );

    const ProductListItem = ({ product }) => (
        <Link href={`/product/${product.id}`} className="product-list-item">
            <div className="list-item-image">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = '/images/no-image.jpg';
                    }}
                />
            </div>
            <div className="list-item-info">
                <h3>{product.name}</h3>
                <div className="list-item-rating">
                    <div className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span>{product.reviews} отзывов</span>
                </div>
                <div className="list-item-price">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                        <span className="old-price">{formatPrice(product.oldPrice)}</span>
                    )}
                </div>
                <div className="list-item-description">
                    <p>Категория: {
                        product.category === 'smartphones' ? 'Смартфоны' :
                            product.category === 'accessories' ? 'Аксессуары' : product.category
                    }</p>
                    {product.memory && <p>Память: {product.memory.join(', ')}</p>}
                </div>
            </div>
        </Link>
    );

    return (
        <div className="brand-page">
            <div className="brand-container">
                {/* Заголовок */}
                <div className="brand-header">
                    <h1 className="brand-title">
                        {brandName}
                    </h1>
                    <p className="brand-count">
                        Найдено {filteredProducts.length} товаров
                    </p>
                </div>

                {/* Мобильная кнопка фильтра */}
                <button
                    className="mobile-filter-btn"
                    onClick={() => setShowFilters(true)}
                >
                    <FiFilter /> Фильтры
                </button>

                <div className="brand-content">
                    {/* Боковая панель фильтров */}
                    <aside className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
                        <div className="filters-header">
                            <h3>Фильтры</h3>
                            <button
                                className="close-filters"
                                onClick={() => setShowFilters(false)}
                            >
                                <FiX />
                            </button>
                        </div>

                        {/* Фильтр по категориям */}
                        {categories.length > 0 && (
                            <div className="filter-section">
                                <h4>Категории</h4>
                                <div className="category-filters">
                                    {categories.map(category => (
                                        <label key={category} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryToggle(category)}
                                            />
                                            <span>
                                                {category === 'smartphones' ? 'Смартфоны' :
                                                    category === 'accessories' ? 'Аксессуары' : category}
                                            </span>
                                            <span className="count">
                                                {brandProducts.filter(p => p.category === category).length}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Фильтр по цене */}
                        <div className="filter-section">
                            <h4>Цена</h4>
                            <div className="price-range">
                                <div className="price-inputs">
                                    <input
                                        type="number"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                                        placeholder="От"
                                        min="0"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                                        placeholder="До"
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Кнопка сброса фильтров */}
                        <button className="clear-filters" onClick={clearFilters}>
                            Сбросить фильтры
                        </button>
                    </aside>

                    {/* Основной контент */}
                    <div className="brand-main">
                        {/* Панель сортировки */}
                        <div className="sort-bar">
                            <div className="sort-select">
                                <label>Сортировка:</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="popular">По популярности</option>
                                    <option value="rating">По рейтингу</option>
                                    <option value="price-asc">Сначала дешевле</option>
                                    <option value="price-desc">Сначала дороже</option>
                                </select>
                                <FiChevronDown className="select-arrow" />
                            </div>

                            <div className="view-toggle">
                                <button
                                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                    onClick={() => setViewMode('grid')}
                                >
                                    <FiGrid />
                                </button>
                                <button
                                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                >
                                    <FiList />
                                </button>
                            </div>
                        </div>

                        {/* Сетка товаров */}
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className={`products-${viewMode}`}>
                                    {viewMode === 'grid' ? (
                                        currentProducts.map(product => (
                                            <ProductCard key={product.id} product={product} />
                                        ))
                                    ) : (
                                        currentProducts.map(product => (
                                            <ProductListItem key={product.id} product={product} />
                                        ))
                                    )}
                                </div>

                                {/* Пагинация */}
                                {totalPages > 1 && (
                                    <div className="pagination">
                                        <button
                                            className="pagination-btn"
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                        >
                                            ←
                                        </button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                                onClick={() => setCurrentPage(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                        <button
                                            className="pagination-btn"
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                        >
                                            →
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-products">
                                <p>Товары не найдены</p>
                                <button onClick={clearFilters} className="clear-filters-btn">
                                    Сбросить фильтры
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandPage;
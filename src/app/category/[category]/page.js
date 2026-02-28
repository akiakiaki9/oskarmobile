'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products, categories } from '@/app/utils/data';
import { FiFilter, FiGrid, FiList, FiChevronDown, FiX } from 'react-icons/fi';
import './category.css';

const CategoryPage = () => {
    const { category } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState('popular');
    const [viewMode, setViewMode] = useState('grid');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Находим название категории
    const categoryInfo = categories.find(c => c.id === category);

    useEffect(() => {
        // Фильтруем товары по категории
        let filtered = products.filter(p => p.category === category);
        setCategoryProducts(filtered);
        setFilteredProducts(filtered);

        // Получаем уникальные бренды для этой категории
        const brands = [...new Set(filtered.map(p => p.brand))];
    }, [category]);

    useEffect(() => {
        // Применяем все фильтры
        let filtered = [...categoryProducts];

        // Фильтр по брендам
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(p => selectedBrands.includes(p.brand));
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
    }, [selectedBrands, priceRange, sortBy, categoryProducts]);

    // Получаем уникальные бренды
    const brands = [...new Set(categoryProducts.map(p => p.brand))];

    // Пагинация
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU') + ' ₽';
    };

    const handleBrandToggle = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const clearFilters = () => {
        setSelectedBrands([]);
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
                    <p>Бренд: {product.brand}</p>
                    {product.memory && <p>Память: {product.memory.join(', ')}</p>}
                </div>
            </div>
        </Link>
    );

    return (
        <div className="category-page">
            <div className="category-container">
                {/* Заголовок */}
                <div className="category-header">
                    <h1 className="category-title">
                        {categoryInfo?.icon} {categoryInfo?.name}
                    </h1>
                    <p className="category-count">
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

                <div className="category-content">
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

                        {/* Фильтр по брендам */}
                        <div className="filter-section">
                            <h4>Бренды</h4>
                            <div className="brand-filters">
                                {brands.map(brand => (
                                    <label key={brand} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandToggle(brand)}
                                        />
                                        <span>{brand}</span>
                                        <span className="count">
                                            {categoryProducts.filter(p => p.brand === brand).length}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

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
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                                        placeholder="До"
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
                    <div className="category-main">
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

export default CategoryPage;
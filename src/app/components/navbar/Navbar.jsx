'use client';
import { useState, useEffect, useRef } from 'react';
import {
    FiMenu,
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiX,
    FiChevronRight,
    FiChevronDown,
    FiPhone
} from 'react-icons/fi';
import { products, categories } from '@/app/utils/data';
import './navbar.css';
import { useShop } from '@/app/context/ShopContext';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const { getCartCount, favorites } = useShop();

    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    // Закрытие меню при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                overlayRef.current && overlayRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Закрытие поиска при клике вне
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Поиск товаров
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5);

        setSearchResults(results);
        setShowSuggestions(true);
    }, [searchQuery]);

    // Товары для поднавбара
    const popularProducts = {
        smartphones: products.filter(p => p.category === 'smartphones').slice(0, 4),
        accessories: products.filter(p => p.category === 'accessories').slice(0, 4)
    };

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Левая часть - бренд и бургер */}
                    <div className="navbar-left">
                        <Link href="/" className="brand">
                            <img src="/images/logo.jpg" alt="OSKAR MOBILE" />
                        </Link>
                        <button
                            className="burger-button"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Открыть меню"
                        >
                            <FiMenu size={28} />
                        </button>
                    </div>

                    {/* Центр - поиск (десктоп) */}
                    <div className="search-desktop" ref={searchRef}>
                        <div className="search-wrapper">
                            <FiSearch className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Поиск товаров..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                className="search-input"
                            />

                            {/* Подсказки поиска */}
                            {showSuggestions && searchQuery.trim() !== '' && (
                                <div className="search-suggestions">
                                    {searchResults.length > 0 ? (
                                        <>
                                            {searchResults.map(product => (
                                                <Link
                                                    key={product.id}
                                                    href={`/product/${product.id}`}
                                                    className="suggestion-item"
                                                    onClick={() => {
                                                        setShowSuggestions(false);
                                                        setSearchQuery('');
                                                    }}
                                                >
                                                    <div className="suggestion-info">
                                                        <span className="suggestion-name">{product.name}</span>
                                                        <span className="suggestion-brand">{product.brand}</span>
                                                    </div>
                                                    <span className="suggestion-price">{product.price.toLocaleString()} ₽</span>
                                                </Link>
                                            ))}
                                            <Link
                                                href={`/search?q=${searchQuery}`}
                                                className="suggestion-all"
                                                onClick={() => setShowSuggestions(false)}
                                            >
                                                <FiSearch size={16} />
                                                <span>Все результаты по запросу "{searchQuery}"</span>
                                            </Link>
                                        </>
                                    ) : (
                                        <div className="suggestion-empty">
                                            <span>Ничего не найдено</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Правая часть - иконки и телефон */}
                    <div className="navbar-right">
                        <a href="tel:+998973000909" className="phone-link desktop-only">
                            <FiPhone size={20} />
                            <span>+998 (97) 300 09 09</span>
                        </a>

                        <button
                            className="icon-button search-mobile-btn"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            aria-label="Поиск"
                        >
                            <FiSearch size={26} />
                        </button>

                        {/* <button className="icon-button" aria-label="Войти">
                            <FiUser size={26} />
                        </button> */}

                        <Link href='/favorites' className="icon-button" aria-label="Избранное">
                            <FiHeart size={26} />
                            <span className="badge">{favorites.length}</span>
                        </Link>

                        <Link href='/cart' className="icon-button" aria-label="Корзина">
                            <FiShoppingCart size={26} />
                            <span className="badge">{getCartCount()}</span>
                        </Link>
                    </div>
                </div>

                {/* Мобильный поиск */}
                <div className={`mobile-search ${isSearchOpen ? 'open' : ''}`}>
                    <div className="mobile-search-container">
                        <div className="search-wrapper">
                            <FiSearch className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Поиск товаров..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                                autoFocus
                            />
                            {searchQuery && (
                                <button
                                    className="mobile-search-clear"
                                    onClick={() => setSearchQuery('')}
                                >
                                    <FiX size={18} />
                                </button>
                            )}
                        </div>

                        {/* Мобильные результаты поиска */}
                        {searchQuery.trim() !== '' && (
                            <div className="mobile-search-results">
                                {searchResults.length > 0 ? (
                                    <>
                                        {searchResults.map(product => (
                                            <Link
                                                key={product.id}
                                                href={`/product/${product.id}`}
                                                className="mobile-search-item"
                                                onClick={() => {
                                                    setIsSearchOpen(false);
                                                    setSearchQuery('');
                                                }}
                                            >
                                                <div className="mobile-search-item-info">
                                                    <span className="mobile-search-item-name">{product.name}</span>
                                                    <span className="mobile-search-item-brand">{product.brand}</span>
                                                </div>
                                                <span className="mobile-search-item-price">{product.price.toLocaleString()} ₽</span>
                                            </Link>
                                        ))}
                                        <Link
                                            href={`/search?q=${searchQuery}`}
                                            className="mobile-search-all"
                                            onClick={() => setIsSearchOpen(false)}
                                        >
                                            <FiSearch size={16} />
                                            <span>Все результаты</span>
                                        </Link>
                                    </>
                                ) : (
                                    <div className="mobile-search-empty">
                                        <span>Ничего не найдено</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Поднавбар с категориями и телефоном */}
            <div className={`subnavbar ${isScrolled ? 'subnavbar-scrolled' : ''}`}>
                <div className="subnavbar-container">
                    <div className="subnavbar-categories">
                        {/* Dropdown Смартфоны */}
                        <div className="category-dropdown">
                            <button
                                className="category-dropdown-btn"
                                onClick={() => handleDropdownToggle('smartphones')}
                            >
                                <span>Смартфоны</span>
                                <FiChevronDown className={`dropdown-arrow ${openDropdown === 'smartphones' ? 'rotated' : ''}`} />
                            </button>
                            {openDropdown === 'smartphones' && (
                                <div className="dropdown-menu">
                                    {popularProducts.smartphones.map(product => (
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.id}`}
                                            className="dropdown-item"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/category/smartphones"
                                        className="dropdown-item all-link"
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        Все смартфоны →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Dropdown Аксессуары */}
                        <div className="category-dropdown">
                            <button
                                className="category-dropdown-btn"
                                onClick={() => handleDropdownToggle('accessories')}
                            >
                                <span>Аксессуары</span>
                                <FiChevronDown className={`dropdown-arrow ${openDropdown === 'accessories' ? 'rotated' : ''}`} />
                            </button>
                            {openDropdown === 'accessories' && (
                                <div className="dropdown-menu">
                                    {popularProducts.accessories.map(product => (
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.id}`}
                                            className="dropdown-item"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/category/accessories"
                                        className="dropdown-item all-link"
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        Все аксессуары →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Остальные категории */}
                        {categories.slice(2, 5).map(category => (
                            <Link
                                key={category.id}
                                href={`/category/${category.id}`}
                                className="category-link"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    {/* Телефон для мобилок */}
                    <a href="tel:+79991234567" className="subnavbar-phone mobile-only">
                        <FiPhone size={18} />
                        <span>+7 (999) 123-45-67</span>
                    </a>
                </div>
            </div>

            {/* Затемнение при открытом поиске на мобилке */}
            {isSearchOpen && (
                <div
                    className="mobile-search-overlay"
                    onClick={() => setIsSearchOpen(false)}
                />
            )}

            {/* Бургер меню */}
            <div
                ref={overlayRef}
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            >
                <div ref={menuRef} className={`menu-drawer ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-header">
                        <span className="menu-title">Меню</span>
                        <button
                            className="close-button"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <FiX size={28} />
                        </button>
                    </div>

                    <div className="menu-content">
                        {/* Главные категории */}
                        <div className="menu-section">
                            <h3 className="menu-section-title">Категории</h3>
                            {categories.map(category => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.id}`}
                                    className="menu-item"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="menu-item-icon">{category.icon}</span>
                                    <span className="menu-item-name">{category.name}</span>
                                    <FiChevronRight className="menu-item-arrow" size={18} />
                                </Link>
                            ))}
                        </div>

                        {/* Популярные бренды */}
                        <div className="menu-section">
                            <h3 className="menu-section-title">Популярные бренды</h3>
                            {['Apple', 'Samsung', 'Xiaomi', 'Google', 'HONOR'].map(brand => (
                                <Link
                                    key={brand}
                                    href={`/brand/${brand.toLowerCase()}`}
                                    className="menu-item"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="menu-item-name">{brand}</span>
                                    <FiChevronRight className="menu-item-arrow" size={18} />
                                </Link>
                            ))}
                        </div>

                        {/* Специальные предложения */}
                        <div className="menu-promo">
                            <Link href="/sale" className="promo-banner" onClick={() => setIsMenuOpen(false)}>
                                <span className="promo-text">🔥 Горячие скидки</span>
                                <span className="promo-subtext">до 30% на технику Apple</span>
                            </Link>
                        </div>
                    </div>

                    <div className="menu-footer">
                        <Link href="/profile" className="menu-footer-link" onClick={() => setIsMenuOpen(false)}>
                            <FiUser size={20} />
                            <span>Личный кабинет</span>
                        </Link>
                        <Link href="/favorites" className="menu-footer-link" onClick={() => setIsMenuOpen(false)}>
                            <FiHeart size={20} />
                            <span>Избранное</span>
                        </Link>
                        <Link href="/orders" className="menu-footer-link" onClick={() => setIsMenuOpen(false)}>
                            <FiShoppingCart size={20} />
                            <span>Мои заказы</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
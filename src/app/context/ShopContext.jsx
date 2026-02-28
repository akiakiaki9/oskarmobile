// context/ShopContext.jsx
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within ShopProvider');
    }
    return context;
};

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Загружаем данные из localStorage при инициализации
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        const savedFavorites = localStorage.getItem('favorites');

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    }, []);

    // Сохраняем в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Добавление в корзину
    const addToCart = (product, quantity = 1, memory = null, color = null) => {
        setCart(prev => {
            const existingItem = prev.find(item =>
                item.id === product.id &&
                item.memory === memory &&
                item.color === color
            );

            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id && item.memory === memory && item.color === color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                memory,
                color,
                quantity,
                brand: product.brand
            }];
        });
    };

    // Удаление из корзины
    const removeFromCart = (productId, memory = null, color = null) => {
        setCart(prev => prev.filter(item =>
            !(item.id === productId && item.memory === memory && item.color === color)
        ));
    };

    // Изменение количества
    const updateQuantity = (productId, newQuantity, memory = null, color = null) => {
        if (newQuantity < 1) return;

        setCart(prev => prev.map(item =>
            item.id === productId && item.memory === memory && item.color === color
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    // Очистка корзины
    const clearCart = () => {
        setCart([]);
    };

    // Подсчет общей суммы
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Подсчет количества товаров
    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    // Добавление в избранное
    const addToFavorites = (product) => {
        setFavorites(prev => {
            if (prev.some(item => item.id === product.id)) {
                return prev;
            }
            return [...prev, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                brand: product.brand,
                rating: product.rating,
                reviews: product.reviews
            }];
        });
    };

    // Удаление из избранного
    const removeFromFavorites = (productId) => {
        setFavorites(prev => prev.filter(item => item.id !== productId));
    };

    // Проверка в избранном
    const isInFavorites = (productId) => {
        return favorites.some(item => item.id === productId);
    };

    // Переключение избранного
    const toggleFavorite = (product) => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const value = {
        cart,
        favorites,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        toggleFavorite,
        isInFavorites
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
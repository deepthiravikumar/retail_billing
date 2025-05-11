import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Menubar from "../../components/Menubar/Menubar.jsx";

const Dashboard = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: 'Wireless Headphones',
            description: 'Premium noise-canceling wireless headphones with 30hr battery',
            price: '$199.99',
            category: 'Electronics',
            image: '🎧'
        },
        {
            id: 2,
            name: 'Smart Watch',
            description: 'Fitness tracking smartwatch with heart rate monitor',
            price: '$159.99',
            category: 'Electronics',
            image: '⌚'
        },
        {
            id: 3,
            name: 'Bluetooth Speaker',
            description: 'Portable waterproof speaker with 20hr playtime',
            price: '$89.99',
            category: 'Electronics',
            image: '🔊'
        },
        {
            id: 4,
            name: 'Laptop Backpack',
            description: 'Ergonomic backpack with USB charging port',
            price: '$49.99',
            category: 'Accessories',
            image: '🎒'
        },
        {
            id: 5,
            name: 'Wireless Earbuds',
            description: 'True wireless earbuds with 24hr battery life',
            price: '$129.99',
            category: 'Electronics',
            image: '🎵'
        },
        {
            id: 6,
            name: 'Smartphone Stand',
            description: 'Adjustable stand for phones and tablets',
            price: '$24.99',
            category: 'Accessories',
            image: '📱'
        },
        {
            id: 7,
            name: 'Desk Lamp',
            description: 'LED desk lamp with adjustable brightness',
            price: '$39.99',
            category: 'Home',
            image: '💡'
        },
        {
            id: 8,
            name: 'Coffee Maker',
            description: 'Programmable coffee maker with thermal carafe',
            price: '$79.99',
            category: 'Home',
            image: '☕'
        }
    ];

    const features = [
        {
            title: "Easy Shopping",
            description: "Browse and purchase products with our intuitive interface",
            icon: "🛒"
        },
        {
            title: "Secure Checkout",
            description: "Safe and secure payment processing",
            icon: "🔒"
        },
        {
            title: "Fast Delivery",
            description: "Reliable shipping with real-time tracking",
            icon: "🚚"
        },
        {
            title: "24/7 Support",
            description: "Dedicated customer service anytime",
            icon: "📞"
        }
    ];

    const handleGetStarted = () => {
        navigate('/explore');
    };

    const handleFreeTrial = () => {
        navigate('/login');
    };

    const handleAddToCart = (productId) => {
        console.log(`Product ${productId} added to cart`);
        navigate('/explore');
    };

    return (
        <>
            <div className="ecommerce-homepage">
                {/* Hero Banner */}
                <section className="hero-banner">
                    <div className="hero-content">
                        <h1>ShopEase Retail</h1>
                        <p>Your one-stop destination for quality products and seamless shopping</p>
                        <div className="cta-buttons">
                            <button className="primary-btn" onClick={handleGetStarted}>Shop Now</button>
                            <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="features-section">
                    <h2>Why Shop With Us?</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Products */}
                <section className="products-section">
                    <h2>Featured Products</h2>
                    <div className="products-grid">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image">
                                    <div className="image-placeholder">{product.image}</div>
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <span className="product-category">{product.category}</span>
                                    <p>{product.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button
                                            className="add-to-cart"
                                            onClick={() => handleAddToCart(product.id)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="view-all-btn" onClick={() => navigate('/items')}>View All Products</button>
                </section>

                {/* Testimonials */}
                <section className="testimonials">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <p>"The checkout process was so smooth and my order arrived earlier than expected!"</p>
                            <div className="author">- Jessica L., Premium Member</div>
                        </div>
                        <div className="testimonial-card">
                            <p>"Excellent customer service and product quality. Will shop here again!"</p>
                            <div className="author">- David M., Frequent Buyer</div>
                        </div>
                        <div className="testimonial-card">
                            <p>"Best prices I've found online with fast shipping. Highly recommend!"</p>
                            <div className="author">- Sarah K., Loyal Customer</div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="footer-cta">
                    <h2>Ready to Experience Seamless Shopping?</h2>
                    <div className="auth-buttons">
                        <button className="primary-btn large" onClick={handleFreeTrial}>Login / Register</button>
                        <button className="secondary-btn large" onClick={() => navigate('/about')}>About Us</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;
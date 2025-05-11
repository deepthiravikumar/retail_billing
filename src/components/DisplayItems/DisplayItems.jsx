import React, { useContext } from 'react';
import './DisplayItems.css';
import { AppContext } from '../../context/AppContext.jsx';

const DisplayItems = ({ products }) => {
    const { addToCart } = useContext(AppContext);

    return (
        <div className="display-items-container">
            <h3 className="mb-4">Available Products</h3>
            <div className="items-grid">
                {products.map(product => (
                    <div key={product.id} className="item-card">
                        <div className="item-image-placeholder">
                            <span className="item-initial">{product.name.charAt(0)}</span>
                        </div>
                        <div className="item-details">
                            <h5 className="item-name">{product.name}</h5>
                            <p className="item-description">{product.description}</p>
                            <div className="item-footer">
                                <span className="item-price">${product.price.toFixed(2)}</span>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayItems;
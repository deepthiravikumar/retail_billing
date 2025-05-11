import './Explore.css';
import {AppContext} from "../../context/AppContext.jsx";
import React, {useContext} from "react";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../components/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";

const Explore = () => {
    // Gadget categories data
    const sampleCategories = [
        { id: 1, name: "Smartphones" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "Headphones" },
        { id: 4, name: "Smart Watches" },
        { id: 5, name: "Accessories" }
    ];

    // Gadget products data
    const sampleProducts = [
        { id: 1, name: "iPhone 15 Pro", price: 999, category: "Smartphones", description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera" },
        { id: 2, name: "Samsung Galaxy S23", price: 799, category: "Smartphones", description: "6.1-inch Dynamic AMOLED, Snapdragon 8 Gen 2, 50MP camera" },
        { id: 3, name: "Google Pixel 7", price: 599, category: "Smartphones", description: "6.3-inch OLED, Google Tensor G2, 50MP main camera" },
        { id: 4, name: "MacBook Pro 14\"", price: 1599, category: "Laptops", description: "M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display" },
        { id: 5, name: "Dell XPS 15", price: 1299, category: "Laptops", description: "15.6\" 4K UHD+, Intel Core i7, 16GB RAM, 512GB SSD" },
        { id: 6, name: "HP Spectre x360", price: 1099, category: "Laptops", description: "13.5\" 3K2K OLED, Intel Core i7, 16GB RAM, 1TB SSD" },
        { id: 7, name: "Sony WH-1000XM5", price: 399, category: "Headphones", description: "Industry-leading noise cancellation, 30-hour battery life" },
        { id: 8, name: "AirPods Pro (2nd Gen)", price: 249, category: "Headphones", description: "Active Noise Cancellation, Adaptive Transparency, Spatial Audio" },
        { id: 9, name: "Bose QuietComfort 45", price: 329, category: "Headphones", description: "World-class noise cancellation, 24-hour battery life" },
        { id: 10, name: "Apple Watch Series 8", price: 399, category: "Smart Watches", description: "45mm GPS, Always-On Retina display, ECG app" },
        { id: 11, name: "Samsung Galaxy Watch 5", price: 279, category: "Smart Watches", description: "40mm Bluetooth, BioActive Sensor, Sleep Coaching" },
        { id: 12, name: "Fitbit Sense 2", price: 299, category: "Smart Watches", description: "Advanced health metrics, Stress management, GPS" },
        { id: 13, name: "Anker PowerCore 20K", price: 49, category: "Accessories", description: "20000mAh portable charger, USB-C PD, 3 ports" },
        { id: 14, name: "Logitech MX Master 3S", price: 99, category: "Accessories", description: "Wireless mouse, 8K DPI, MagSpeed scrolling" },
        { id: 15, name: "Samsung T7 SSD 1TB", price: 89, category: "Accessories", description: "Portable SSD, USB 3.2 Gen 2, 1050MB/s read speed" }
    ];

    const context = useContext(AppContext);
    const categories = context?.categories || sampleCategories;
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [customerName, setCustomerName] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? sampleProducts.filter(product => product.category === selectedCategory)
        : sampleProducts;

    return (
        <div className="explore-container text-light">
            <div className="left-column">
                {/*<div className="first-row" style={{overflowY: "auto"}}>*/}
                {/*    <DisplayCategory*/}
                {/*        selectedCategory={selectedCategory}*/}
                {/*        setSelectedCategory={setSelectedCategory}*/}
                {/*        categories={categories} />*/}
                {/*</div>*/}
                <hr className="horizontal-line" />
                <div className="second-row" style={{overflowY: "auto"}}>
                    <DisplayItems products={filteredProducts} />
                </div>
            </div>
            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{height:'20%'}}>
                    <CustomerForm
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setMobileNumber={setMobileNumber}
                        setCustomerName={setCustomerName}
                    />
                </div>
                {/*<hr className="my-3 text-light" />*/}
                {/*<div className="cart-items-container" style={{height:'55%',overflowY: 'auto'}}>*/}
                {/*    <CartItems/>*/}
                {/*</div>*/}
                <div className="cart-summary-container" style={{height:'40%'}}>
                    <CartSummary
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setMobileNumber={setMobileNumber}
                        setCustomerName={setCustomerName}
                    />
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-items-container" style={{height:'55%',overflowY: 'auto'}}>
                    <CartItems/>
                </div>
            </div>
        </div>
    )
}

export default Explore;
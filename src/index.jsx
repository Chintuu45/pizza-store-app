import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const pizzaData = [
    {
        name: "BBQ Chicken Pizza",
        ingredients: "BBQ sauce with olive oil, cornmeal, and mozzarella cheese",
        price: 189,
        photoName: "pizzas/bbqpizza.jpg",
        soldOut: false,
    },
    {
        name: "Hawaiian Pizza",
        ingredients: "Pineapple, ham, and mozzarella cheese",
        price: 220,
        photoName: "pizzas/hawaiinpizza.jpg",
        soldOut: false,
    },
    {
        name: "Keema Pizza",
        ingredients: "Ground meat, spices, and cheese",
        price: 250,
        photoName: "pizzas/keemapizza.jpg",
        soldOut: false,
    },
    {
        name: "Margherita Pizza",
        ingredients: "Tomato sauce, fresh mozzarella cheese, and basil",
        price: 175,
        photoName: "pizzas/margheritapizza.jpg",
        soldOut: false,
    },
    {
        name: "Onion Pizza",
        ingredients: "Sliced onions, cheese, and tomato sauce",
        price: 115,
        photoName: "pizzas/onionpizza.jpg",
        soldOut: true,
    },
    {
        name: "Veggie Pizza",
        ingredients: "Vegetables, cheese, and tomato sauce",
        price: 135,
        photoName: "pizzas/veggiepizza.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Pizza Store🍕</h1>
        </header>
    );
}

function Menu() {
    return (
        <menu className="menu">
            <h2>Pizzas Menu</h2>
            <p>
                Authentic Indian Cuisine. 6 creative dishes to choose from. All from our stone oven. All organic, all delicious.
            </p>
            <ul className="pizzas">
                {/* Let's render our pizza data */}
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </menu>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold Out" : `Price: ₹${pizzaObj.price}`}</span>
                <button className="btn">Order</button>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 16;
    const whenOpen = hour >= openHour && hour < closeHour;

    return (
        <footer className="footer">
            <div>
                {whenOpen ? (
                    <p>We're open from {openHour}:00 to {closeHour}:00. Come to visit us or order now!</p>
                ) : (
                    <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00. Thank you!</p>
                )}
            </div>
            <p>&copy; 2024 Pizza Store</p>
            <p>Designed By<a href="">RAHUL</a></p>
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

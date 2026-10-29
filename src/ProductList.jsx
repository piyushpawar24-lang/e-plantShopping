import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b70?w=400", cost: "$15", description: "Easy-care plant for indoor spaces." },
      { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400", cost: "$18", description: "Beautiful green leaves and elegant flowers." },
      { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c9f5?w=400", cost: "$12", description: "A resilient plant for your home." },
      { name: "Areca Palm", image: "https://images.unsplash.com/photo-1597055181300-c6c9a0e1e6b1?w=400", cost: "$22", description: "Adds a tropical touch to your room." },
      { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400", cost: "$20", description: "Glossy foliage for modern interiors." },
      { name: "Boston Fern", image: "https://images.unsplash.com/photo-1597055181449-6d8f4f4f7c0e?w=400", cost: "$16", description: "Lush foliage for bright indoor spaces." }
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400", cost: "$14", description: "Fragrant flowers with a calming aroma." },
      { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400", cost: "$10", description: "An aromatic herb for your kitchen." },
      { name: "Peppermint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400", cost: "$9", description: "Fresh-scented leaves for everyday use." },
      { name: "Basil", image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400", cost: "$8", description: "A popular aromatic culinary herb." },
      { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400", cost: "$11", description: "A leafy herb with a lemony fragrance." },
      { name: "Thyme", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400", cost: "$10", description: "A compact herb with a pleasant aroma." }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400", cost: "$13", description: "A popular succulent for home growing." },
      { name: "Tulsi", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400", cost: "$8", description: "A traditional aromatic garden plant." },
      { name: "Neem", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", cost: "$19", description: "A leafy tree valued in traditional practices." },
      { name: "Lemongrass", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400", cost: "$12", description: "A fragrant grass often used in teas." },
      { name: "Ginger Plant", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f3?w=400", cost: "$14", description: "A tropical plant grown for its rhizome." },
      { name: "Chamomile", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", cost: "$11", description: "A flowering herb with a gentle fragrance." }
    ]
  }
];

function ProductList({ onHomeClick, onCartClick, totalItems }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items || []);

  const addedToCart = {};
  cart.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <div className="navbar-brand">Paradise Nursery</div>

        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Plants
          </button>
          <button onClick={onCartClick}>
            🛒 Cart ({totalItems ?? cartQuantity})
          </button>
        </div>
      </nav>

      <main className="product-list">
        <h1>Our Plants</h1>
        <p>Discover the perfect plants for your home and garden.</p>

        {plantsArray.map((category) => (
          <section className="plant-category" key={category.category}>
            <

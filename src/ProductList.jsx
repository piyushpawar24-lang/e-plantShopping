import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b77?w=500', description: 'Hardy indoor plant', cost: 15 },
      { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500', description: 'Easy-care foliage', cost: 12 },
      { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500', description: 'Elegant flowering plant', cost: 18 },
      { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1597055181300-a8f7b3e7c6c6?w=500', description: 'Lush green fern', cost: 20 },
      { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500', description: 'Glossy decorative leaves', cost: 17 },
      { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500', description: 'Popular succulent', cost: 14 }
    ]
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500', description: 'Beautiful fragrant flowers', cost: 20 },
      { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1597055181300-a8f7b3e7c6c6?w=500', description: 'Sweet-smelling flowers', cost: 18 },
      { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=500', description: 'Aromatic cooking herb', cost: 15 },
      { name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500', description: 'Refreshing fragrant herb', cost: 12 },
      { name: 'Lemon Balm', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500', description: 'Lemon-scented foliage', cost: 14 },
      { name: 'Hyacinth', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500', description: 'Fragrant flowering plant', cost: 22 }
    ]
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Oregano', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500', description: 'Useful aromatic herb', cost: 10 },
      { name: 'Marigold', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500', description: 'Bright garden flowers', cost: 8 },
      { name: 'Geranium', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500', description: 'Colorful flowering plant', cost: 20 },
      { name: 'Basil', image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=500', description: 'Fragrant culinary herb', cost: 9 },
      { name: 'Citronella Grass', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500', description: 'Aromatic ornamental grass', cost: 16 },
      { name: 'Catnip', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500', description: 'A fragrant garden herb', cost: 13 }
    ]
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Echinacea', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500', description: 'Flowering garden plant', cost: 16 },
      { name: 'Peppermint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500', description: 'Refreshing aromatic herb', cost: 13 },
      { name: 'Chamomile', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34

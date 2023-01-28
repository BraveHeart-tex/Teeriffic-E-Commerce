import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our company is dedicated to providing high-quality, stylish, and comfortable t-shirts that allow our customers to express themselves and make a statement. We believe that fashion is a form of self-expression and our mission is to empower our customers to wear their unique style with confidence.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to be the leading t-shirt brand that empowers individuals to express themselves through fashion. We aim to make fashion accessible to everyone and to be known for our high-quality materials, excellent customer service, and commitment to sustainability.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Our company has a rich history of providing high-quality t-shirts for individuals to express themselves through fashion. Founded in 2005, we started as a small team with a passion for design and style. We have become known for our excellent customer service, commitment to sustainability, and our ability to stay at the forefront of fashion trends.',
  },
];

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;

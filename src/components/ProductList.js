import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import { products } from '../utils/data';

function ProductList() {
  return (
    <Card.Group>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Card.Group>
  );
}

export default ProductList;

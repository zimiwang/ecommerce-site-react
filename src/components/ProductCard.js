import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} style={{ height: `200px`, width: '100%', objectFit: 'cover' }} />
      </Link>
      <Card.Content>
        <Card.Header as={Link} to={`/product/${product.id}`}>
          {product.name}
        </Card.Header>
        <Card.Meta>${product.price}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ProductCard;

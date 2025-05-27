import React from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard';

const PageTemplate = ({ title, description, products, subTitle, gridContents }) => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      {/* Main title */}
      <Header as="h1" textAlign="center">
        {title}
      </Header>

      {/* Short description */}
      <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.2rem' }}>
        {description}
      </p>

      {/* Product display grid */}
      <Grid>
        <Grid.Row columns={4}>
          {products.map((product, index) => (
            <Grid.Column key={index}>
              <ProductCard product={product} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      {/* Sub-title */}
      <Header as="h2" textAlign="left" style={{ marginTop: '2rem' }}>
        {subTitle}
      </Header>

      {/* FAQ-style text content */}
      <Grid>
        {gridContents.map((content, index) => (
          <Grid.Row key={index}>
            <Grid.Column>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{content.title}</Card.Header>
                  <Card.Description>{content.description}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  );
};

export default PageTemplate;

import React from 'react';

import {
  Container,
  Image,
  Description,
  Title,
  Price,
  Footer,
  IconVector as Icon,
} from './styles';

const Product = (props: any = {}) => {
  const {image, title, description, price} = props.product;
  return (
    <Container>
      <Image source={{uri: image}} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>{price}</Price>
        <Icon name="shopping-cart" size={17} />
      </Footer>
    </Container>
  );
};

export default Product;

import React from 'react';

import {Container, Image, Description, Title, Price} from './styles';

const Product = (props: any = {}) => {
  const {image, title, description, price} = props.product;
  return (
    <Container>
      <Image source={{uri: image}} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Container>
  );
};

export default Product;

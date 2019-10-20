import React from 'react';

// Components
import Button from '../Button';
// Styles
import {
  Container,
  Info,
  Thumb,
  Subcontainer,
  Name,
  ButtonContainer,
} from './styles';

const SubHeader = () => (
  <Container>
    <Thumb
      source={{
        uri:
          'https://avatars3.githubusercontent.com/u/39751943?s=400&u=6c571d6b2a91a28270039814f59ac0a03e6c2eb9&v=4',
      }}
    />
    <Subcontainer>
      <Name>Nicollas Matheus</Name>
      <Info>Software Engineer @VUniverse</Info>
      <ButtonContainer>
        <Button content="Mensagem" />
        <Button content="Seguir" />
      </ButtonContainer>
    </Subcontainer>
  </Container>
);

export default SubHeader;

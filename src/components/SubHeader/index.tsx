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

import {translate} from '../../locales';
import {colors} from '../../global';

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
        <Button
          primary
          center
          bold
          width={40}
          borderRadius={20}
          color={colors.white}
          content={translate(['subheader', 'message'])}
        />
        <Button
          center
          bold
          outline
          color={colors.header.primary}
          width={40}
          borderRadius={20}
          content={translate(['subheader', 'follow'])}
        />
      </ButtonContainer>
    </Subcontainer>
  </Container>
);

export default SubHeader;

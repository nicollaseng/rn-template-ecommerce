import React from 'react';

import {Container, IconVector as Icon, MainIcon} from './styles';
import {colors} from '../../global';

const Tabs = () => {
  return (
    <Container>
      <Icon name="clone" size={16} />
      <Icon name="search" size={16} />
      <MainIcon>
        <Icon name="plus" size={16} color={colors.white} />
      </MainIcon>
      <Icon name="bell-o" size={16} />
      <Icon name="user-o" size={16} />
    </Container>
  );
};

export default Tabs;

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, metrics} from '../../global';

export const View = styled.View`
  background-color: ${colors.white};
  height: ${metrics.headerHeight};
  padding-top: ${metrics.headerPadding};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${metrics.padding}px;
`;

export const IconVector = styled(Icon)`
  color: ${colors.header.primary};
`;

export const Text = styled.Text`
  color: #000;
`;

import {Dimensions} from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, metrics} from '../../../global';

const {width} = Dimensions.get('window');
export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 15px;
  shadow-color: ${colors.lighter};
  shadow-radius: 2px;
  shadow-opacity: 0.5;
  shadow-offset: {x: 0, y: 0};
  width: ${(width - 45) / 2}px;
  margin-top: ${metrics.padding}px;
`;

export const Image = styled.Image`
  height: 96px;
  width: 100%;
  align-self: center;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 15px;
  padding-top: 10px
  font-weight: 500;
  color: ${colors.icons.primary};
`;

export const Description = styled.Text`
  font-size: 13.5px;
  color: ${colors.inputs.primary};
`;

export const Price = styled.Text`
  font-size: 13.5px;
  font-weight: 600;
  margin-top: 5px;
  color: ${colors.icons.primary};
`;

export const Footer = styled.View`
  flex: 1;
  padding-top: 5px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const IconVector = styled(Icon)`
  color: ${colors.icons.primary};
`;

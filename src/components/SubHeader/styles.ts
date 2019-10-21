import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {metrics, colors} from '../../global';

export const Container = styled.View`
  padding: ${metrics.padding}px;
  background-color: ${colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white};
  flex-direction: row;
  align-items: center;
`;

export const Thumb = styled.Image`
  width: 68px;
  height: 68px;
  max-width: 25%;
  resize-mode: contain;
  border-radius: 34px;
`;

export const Subcontainer = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

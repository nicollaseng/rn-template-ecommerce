import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {metrics, colors} from '../../global';

interface IconProps {
  color?: string;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: ${metrics.navBarHeight};
  background-color: ${colors.white};
`;

export const IconVector = styled(Icon)`
  color: ${props => (props.color ? props.color : colors.icons.primary)};
`;

export const MainIcon = styled.View`
  padding: 20px;
  border-radius: 40px;
  background-color: ${colors.buttons.primary};
`;

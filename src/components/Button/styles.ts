import {Platform} from 'react-native';
import styled from 'styled-components/native';

import colors from '../../global/colors';

interface BtnProps {
  basic?: boolean;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  dark?: boolean;
  facebook?: boolean;
  google?: boolean;
  center?: boolean;
  margin?: string;
  notFull?: boolean;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number;
  outline?: boolean;
  borderRadius?: number;
}

interface TextProps {
  dark?: boolean;
  basicBlue?: boolean;
  uppercase?: boolean;
  size?: string;
  bold?: boolean;
  center?: boolean;
  padding?: number;
  color?: string;
}

const Btn = styled.TouchableOpacity<BtnProps>`
  width: ${props => (props.width ? `${props.width}%` : '100%')}
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  align-items: center;
  z-index: ${Platform.OS === 'ios' ? 10 : 0};
  margin-horizontal: 5px;
  margin-bottom: ${props => props.margin || 0};
  margin-top: ${props => props.margin || 0};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '2px')}
  padding-left: ${props =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
  padding-right: ${props =>
    props.paddingRight ? `${props.paddingRight}px` : '0px'};

  background-color: ${props =>
    props.primary
      ? colors.buttons.primary
      : props.secondary
      ? colors.blue
      : props.disabled
      ? colors.buttons.disabled
      : props.facebook
      ? colors.sociais.facebook
      : props.google
      ? colors.sociais.google
      : props.success
      ? colors.buttons.success
      : props.warning
      ? colors.buttons.warning
      : props.danger
      ? colors.danger
      : 'transparent'};

  border: ${props =>
    props.basic
      ? `2px solid ${colors.white}`
      : props.dark
      ? `1px solid ${colors.buttons.dark}`
      : props.outline
      ? `1px solid ${colors.header.primary}`
      : 0};
`;

const BtnText = styled.Text<TextProps>`
  color: ${props => (props.color ? props.color : colors.primary)};
  ${props => (props.center ? `text-align: center` : null)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  padding: 5px
  font-size: ${props => props.size || '14px'};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
`;

export {Btn, BtnText};

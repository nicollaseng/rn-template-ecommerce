import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {View, IconVector as Icon, Text} from './styles';

export interface HeaderProps extends React.Props<HeaderProps> {
  title: string;
}

const Header: React.SFC<HeaderProps> = (props: any = {}) => {
  return (
    <View>
      <Icon name="ios-arrow-back" size={24} />
      <Text>{props.title || 'Profile'}</Text>
      <Icon name="ios-more" size={24} />
    </View>
  );
};

const mapStateToProps = (state: any = {}) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);

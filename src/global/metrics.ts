import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
const {width, height} = Dimensions.get('window');

const metrics = {
  font: 'Open Sans',
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === 'ios' ? (isIphoneX() ? 90 : 64) : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  baseRadius: 3,
  headerPadding: Platform.OS === 'ios' ? 24 : 0,
  headerHeight: Platform.OS === 'ios' ? 68 : 44,
  padding: 15,
};

export default metrics;

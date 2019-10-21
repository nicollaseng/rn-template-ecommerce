import * as React from 'react';
import {Component} from 'react';

// Redux
import {connect} from 'react-redux';

//  Components
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

// Styled Components
import {Container, Scroll} from './styles';
import ProductList from '../../components/ProductList';
import Tabs from '../../components/Tabs';

const spinner = require('../../assets/img/react.png');

class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Scroll>
          <SubHeader />
          <ProductList />
        </Scroll>
        <Tabs />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Main);

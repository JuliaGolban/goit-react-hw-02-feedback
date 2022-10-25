import { Component } from 'react';
import { Container } from './constants/Container.styled';
import { Reviews } from './components/Reviews/Reviews';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component { 
  state = {
    initionValue: 0,
  };

  render() {

    return (
      <Container>
        <Reviews></Reviews>
        <Statistics></Statistics>
      </Container>
      );
  }
}

import { Component } from 'react';
import { Container } from './constants/Container.styled';
import { Reviews } from './components/Reviews/Reviews';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component { 
   static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        initialValue: 0,
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    }

    handleGoodReviews = () => {
        this.setState(prevState => ({
            good: prevState.good +1,
        }))
    }

    handleNeutralReviews = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral +1,
        }))
    }

    handleBadReviews = () => {
        this.setState(prevState => ({
            bad: prevState.bad +1,
        }))
    }


  render() {

    return (
      <Container>
        <Reviews
          onGoodBtnClick={this.handleGoodReviews}
          onNeutralBtnClick={this.handleNeutralReviews}
          onBadBtnClick={this.handleBadReviews}>
        </Reviews>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positive = {this.state.positive}
        ></Statistics>
      </Container>
      );
  }
}

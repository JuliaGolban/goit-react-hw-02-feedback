import { Component } from 'react';
import { Container } from './constants/Container.styled';
import { Reviews } from './components/Reviews/Reviews';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    total= 0;
    positivePercentage= 0;
  
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
  
    countTotalFeedback = ()=> {
      this.total = this.state.good + this.state.neutral + this.state.bad;
    }
  
    countPositiveFeedbackPercentage = () => {
      if (!this.total) return;
      this.positivePercentage = (this.state.good / this.total) * 100;
    }
  
  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

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
          total={this.total}
          positivePercentage={this.positivePercentage.toFixed(0)}
        ></Statistics>
      </Container>
      );
  }
}

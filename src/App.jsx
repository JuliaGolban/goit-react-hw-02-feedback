import { Component } from 'react';
import { Container } from './components/base/Container.styled';
import { FeedbackOptoins } from './components/FeedbackOptoins/FeedbackOptoins';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  total= 0;
  positivePercentage = 0;
  
  handleFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    })
  }
      
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    this.total = good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { total } = this;

    if (!this.total) return;
    this.positivePercentage = parseInt((good / total) * 100);
  }
  
  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    const { total, positivePercentage} = this;

    return (
      <Container>
        <FeedbackOptoins
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        >
        </FeedbackOptoins>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </Container>
      );
  }
}

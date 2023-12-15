import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

import { Feedback, Title } from './Section.styled';

export class Section extends React.Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      persent: 0,
    };
  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };
  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <Feedback>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          onGood={this.handleGood}
          onBad={this.handleBad}
          onNeutral={this.handleNeutral}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          persent={((good / total) * 100).toFixed(2)}
        />
      </Feedback>
    );
  }
}

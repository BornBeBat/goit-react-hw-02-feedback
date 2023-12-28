import React, { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

import { Feedback, Title } from './FeedbackForm.styled';
import { countTotalFeedback } from 'utils';

export class FeedbackForm extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          total={countTotalFeedback(good, bad, neutral)}
        />
      </Feedback>
    );
  }
}

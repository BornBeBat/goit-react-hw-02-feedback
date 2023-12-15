import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

import { Feedback, Title } from './Section.styled';
export class Section extends React.Component {
  render() {
    return (
      <Feedback>
        <Title>Please leave feedback</Title>
        <FeedbackOptions />
        <Statistics />
      </Feedback>
    );
  }
}

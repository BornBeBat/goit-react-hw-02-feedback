import PropTypes from 'prop-types';
import { countPositiveFeedbackPercentage } from 'utils';
import {
  Container,
  Item,
  Value,
} from './StatContainer.styled';

export const StatContainer = ({
  good,
  neutral,
  bad,
  total,
}) => {
  return (
    <Container>
      <Item>
        Good<Value>{good}</Value>
      </Item>
      <Item>
        Neutral<Value>{neutral}</Value>
      </Item>
      <Item>
        Bad<Value>{bad}</Value>
      </Item>
      <Item>
        Total<Value>{total}</Value>
      </Item>
      <Item>
        Positive&nbsp;feedback
        <Value>
          {countPositiveFeedbackPercentage(good, total)}
        </Value>
      </Item>
    </Container>
  );
};

StatContainer.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

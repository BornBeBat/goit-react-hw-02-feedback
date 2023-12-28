import PropTypes from 'prop-types';
import { Title } from './Statistics.styled';
import { StatContainer } from './StatContainer/StatContainer';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      {total > 0 ? (
        <StatContainer
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

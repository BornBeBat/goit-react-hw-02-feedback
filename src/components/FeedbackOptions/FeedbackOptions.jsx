import PropTypes from 'prop-types';
import {
  BtnContainer,
  Button,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onGood,
  onBad,
  onNeutral,
}) => {
  return (
    <BtnContainer>
      <Button onClick={onGood}>Good </Button>
      <Button onClick={onNeutral}>Neutral</Button>
      <Button onClick={onBad}>Bad</Button>
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
};

import {
  Title,
  Container,
  Item,
  Value,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  persent,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <Container>
        <Item>
          Good<Value>{good || '0'}</Value>
        </Item>
        <Item>
          Neutral<Value>{neutral || '0'}</Value>
        </Item>
        <Item>
          Bad<Value>{bad || '0'}</Value>
        </Item>
        <Item>
          Total<Value>{total || '0'}</Value>
        </Item>
        <Item>
          Positive&nbsp;feedback
          <Value>
            {persent === 'NaN' ? '' : persent + ' %'}
          </Value>
        </Item>
      </Container>
    </>
  );
};

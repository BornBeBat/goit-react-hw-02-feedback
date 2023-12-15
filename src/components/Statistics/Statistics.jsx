import {
  Title,
  Container,
  Item,
  Value,
} from './Statistics.styled';

export const Statistics = () => {
  return (
    <>
      <Title>Statistics</Title>
      <Container>
        <Item>
          Good<Value>val</Value>
        </Item>
        <Item>
          Neutral<Value>val</Value>
        </Item>
        <Item>
          Bad<Value>val</Value>
        </Item>
        <Item>
          Total<Value>val</Value>
        </Item>
        <Item>
          Positivefeedback<Value>val</Value>
        </Item>
      </Container>
    </>
  );
};

import styled from "styled-components";

const Container = styled.div`
  & > p {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    margin-top: 32px;
  }
`;

export default function Heading() {
  return (
    <Container>
      <p>Your Cart</p>
    </Container>
  );
}

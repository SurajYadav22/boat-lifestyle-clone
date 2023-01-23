import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 900px;
  height: 250px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & p {
    font-weight: 600;
    font-size: 31px;
    line-height: 38px;
  }

  & button {
    width: 190px;
    height: 46px;
    color: white;
    border-radius: 4px;
    background: #ff0000;
    border: none;
    font-size: 20px;
    margin-top: 26px;
  }

  & .continue {
    width: 225px;
    font-size: 26px;
    line-height: 32px;
    background: none;
    color: #000000;
  }
`;

export default function Total({ total }) {
  const history = useHistory();
  const checkOut = () => {
    history.push("/payment");
  };
  const contShopping = () => {
    history.push("/");
  };
  return (
    <Container>
      <p>Total:Rs.{total}.00</p>
      <button onClick={checkOut}>Check out</button>
      <button className="continue" onClick={contShopping}>
        Continue Shopping
      </button>
    </Container>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div``;

const Product = styled.div`
  height: 191px;
  display: flex;
  width: 900px;
  border-bottom: 3px solid #e5e5e5;
  margin-bottom: 0px;
`;

const Delete = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    background: #fff;
    border: none;
  }
`;

const Image = styled.div`
  & > img {
    width: 155px;
    margin-top: 10px;
  }
`;

const Name = styled.div`
  width: 350px;
  margin-left: 20px;
  & p {
    font-size: 20px;
    font-weight: 600;
    margin-top: 51px;
  }
`;

const Circle = styled.div`
  display: flex;
  margin-top: 25px;

  & div {
    margin-right: 8px;
  }
`;

const In = styled.div`
  background: ${(props) => `${props.col}`};
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
`;

const Price = styled.div`
  width: 150px;
  & p {
    font-size: 18px;
    line-height: 29px;
    margin-top: 55px;
  }
`;

const Quantity = styled.div`
  display: flex;
  & button {
    background: #000000;
    border: none;
    color: white;
    width: 28px;
    height: 28px;
    font-size: 20px;
    margin-top: 55px;
  }
  & p {
    width: 28px;
    text-align: center;
    font-size: 20px;
    margin-top: 55px;
  }
`;

const Total = styled.div`
  width: 150px;
  & p {
    font-size: 18px;
    float: right;
    line-height: 29px;
    margin-top: 55px;
  }
`;

export default function ProductInCart({ total, setTotal }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    getUser(id);
  }, []);

  const totalCal = () => {
    let temp = 0;
    quantity.forEach((e, i) => {
      temp += e * cart[i].original_price;
    });
    setTotal(temp);
  };

  const getUser = async (id) => {
    const res = await axios.get(
      `https://boatlifestyleapi.onrender.com/users/${id}`
    );
    setCart(res.data.cart);
    setQuantity(new Array(res.data.cart.length).fill(1));
  };

  const changeQuantity = (ch, i) => {
    if (quantity[i] === 1 && ch === -1) return;
    if (quantity[i] === 7 && ch === 1) return;
    const newQuantity = quantity.map((e, j) => {
      if (i === j) {
        return (e += ch);
      }
      return e;
    });
    setQuantity(newQuantity);
    totalCal();
  };
  totalCal();

  return (
    <Container>
      {cart.map((e, i) => (
        <Product key={e._id}>
          <Delete>
            <button>X</button>
          </Delete>
          <Image>
            <img src={e.image[0]} alt="product" />
          </Image>
          <Name>
            <p>{e.name}</p>
            <Circle>
              {e.color.map((el, i) => (
                <In key={i} col={el}></In>
              ))}
            </Circle>
          </Name>
          <Price>
            <p>Rs.{e.original_price}.00</p>
          </Price>
          <Quantity>
            <button onClick={() => changeQuantity(-1, i)}>-</button>
            <p>{quantity[i]}</p>
            <button onClick={() => changeQuantity(1, i)}>+</button>
          </Quantity>
          <Total>
            <p>Rs.{e.original_price * quantity[i]}.00</p>
          </Total>
        </Product>
      ))}
    </Container>
  );
}

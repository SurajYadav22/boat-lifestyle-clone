import Heading from "./Heading";
import styled from "styled-components";
import ProductInCart from "./ProductInCart";
import ProductDetails from "./ProductDetails";
import Total from "./Total";
import { useState } from "react";

const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Cart() {
  const [total, setTotal] = useState(0);
  localStorage.setItem("total", total);
  return (
    <Container>
      <Heading />
      <ProductDetails />
      <ProductInCart total={total} setTotal={setTotal} />
      <Total total={total} />
    </Container>
  );
}

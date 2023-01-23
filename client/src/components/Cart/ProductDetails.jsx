import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  display: flex;
  font-size: 20px;
  border-bottom: 3px solid #e5e5e5;
  margin-top: 100px;
`;

export default function ProductDetails() {
  return (
    <Container>
      <p style={{ marginLeft: "30px" }}>Product</p>
      <p style={{ marginLeft: "460px" }}>Price</p>
      <p style={{ marginLeft: "70px" }}>Quantity</p>
      <p style={{ marginLeft: "100px" }}>Total</p>
    </Container>
  );
}

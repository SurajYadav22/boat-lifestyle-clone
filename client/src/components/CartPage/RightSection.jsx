import styled from "styled-components";
import product from "./Images/image 66.png";

const Container = styled.div`
  position: absolute;
  width: 50%;
  left: 50%;
  height: 1472px;
  top: 86px;
  background: #e5e5e5;
`;

const ProductDisplay = styled.div`
  margin-top: 140px;
  & > div {
    display: flex;
    margin-left: 22px;
    width: 90%;
    border-bottom: 1px solid #292929;
    padding-bottom: 8px;
  }

  & > div img {
    width: 10.55%;
  }

  & .title {
    width: 38.16%;
    margin-left: 34px;
  }

  & .title h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
  }

  & .title p {
    font-size: 20px;
    line-height: 24px;
    color: #363636;
  }

  & .btn {
    width: 12.08%;
    display: flex;
  }

  & .btn button {
    width: 28px;
    height: 28px;
    border: none;
    color: white;
    font-size: 20px;
  }

  & .btn .minus {
    background: #939393;
  }

  & .btn .plus {
    background: #000000;
    margin-left: 15px;
  }

  & .pay {
    display: flex;
    flex-direction: column;
  }

  & .price {
    display: flex;
    margin-left: 75px;
  }

  & .price h5 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  & .price p {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    text-decoration-line: line-through;
    color: #222222;
  }

  & .pay > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ff0000;
    margin-left: 150px;
    margin-top: 5px;
  }

  & .circle {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: #ff0000;
    left: 80px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #fafafa;
    text-align: center;
    padding-top: 2px;
  }
`;

const Total = styled.div`
  & .coupon {
    display: flex;
  }

  & .coupon input {
    text-align: center;
    font-size: 16px;
    width: 315px;
    height: 48px;
    background: #ffffff;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 30px;
    margin-left: 20%;
  }

  & .coupon button {
    width: 148px;
    height: 48px;
    margin-top: 30px;
    background: #383838;
    color: white;
    border: none;
    border-radius: 4px;
    margin-left: 5%;
  }

  & .cont {
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width: 90%;
    border-bottom: 1px solid black;
    padding-bottom: 40px;
  }

  & .bill {
    display: flex;
    margin-left: 30%;
    justify-content: space-between;
    margin-top: 32px;
  }

  & .light {
    font-size: 20px;
    line-height: 24px;
    color: #363636;
  }

  & .dark {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const Code = styled.div`
  width: 92%;
  margin-left: 5%;
  margin-top: 48px;
  height: 72px;
  background: #000000;
  border-radius: 8px;
  padding: 10px;
  padding-left: 15px;

  & p {
    color: #fafafa;
    font-size: 20px;
    line-height: 24px;
  }
`;

export default function RightSection() {
  return (
    <Container>
      <ProductDisplay>
        <div>
          <img src={product} alt="product" />
          <div className="circle">1</div>
          <div className="title">
            <h2>Stone 1200</h2>
            <p>Maroon</p>
          </div>
          <div className="btn">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
          <div className="pay">
            <div className="price">
              <h5>₹ 1,499.00</h5>
              <p>₹ 1,499.00</p>
            </div>
            <p>49% off</p>
          </div>
        </div>
      </ProductDisplay>
      <Total>
        <div className="coupon">
          <input name="coupon" placeholder="Gift card or Discount Code" />
          <button>Apply</button>
        </div>
        <div className="cont">
          <div className="bill">
            <p className="light">Subtotal</p>
            <p className="dark right">₹ 13,990.00</p>
          </div>
          <div className="bill">
            <p className="light">Shipping</p>
            <p className="light">Calculated at next step</p>
          </div>
        </div>
        <div className="bill">
          <p className="light">Total</p>
          <p className="dark" style={{ marginRight: "5%" }}>
            ₹ 13,990.00
          </p>
        </div>
      </Total>
      <Code>
        <p>
          Apply code PRO150 & get Flat Rs.150 off on your favourite Products!
        </p>
      </Code>
    </Container>
  );
}

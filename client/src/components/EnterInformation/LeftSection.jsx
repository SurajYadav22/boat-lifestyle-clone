import styled from "styled-components";
import logo from "../CartPage/Images/image 98.png";
import vector from "../CartPage/Images/Vector 5.png";

const Container = styled.div`
  position: absolute;
  top: 86px;
  left: 0px;
  width: 50%;
  height: 1472px;
  background: white;

  & .logo {
    position: absolute;
    width: 16.14%;
    height: 56px;
    left: 12.82%;
    top: 72px;
  }

  & .covid {
    position: absolute;
    width: 86%;
    height: 40px;
    left: 12.82%;
    top: 154px;
    background: #ff0000;
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    padding: 12px;
    padding-left: 20px;
  }

  & div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
    position: absolute;
    width: 45.85%;
    height: 15px;
    left: 12.82%;
    top: 220px;
    font-size: 12px;
  }

  & .info {
    position: absolute;
    top: 264px;
    left: 12.82%;
    justify-content: space-between;
    width: 86%;
    display: flex;
    height: 20px;
  }

  & .info p:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  & .info p:nth-child(2) {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  & .btn {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  & .btn p {
    font-size: 16px;
    line-height: 20px;
  }

  .btn input {
    width: 28.65%;
    height: 46px;
    background: #ff0000;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  & .vector {
    display: flex;
  }

  & .vector img {
    width: 3px;
    height: 7px;
    margin-top: 5px;
    margin-right: 12px;
  }

  & .policy {
    margin-top: 200px;
    margin-left: 12.82%;
    display: flex;
  }

  & .policy p {
    font-size: 12px;
    margin-right: 15px;
  }

  & .address {
    margin-top: 326px;
  }

  & .address div {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-left: 12%;
    background: #ffffff;
    border: 0.5px solid #000000;
    height: 48px;
    box-sizing: border-box;
  }

  & .address div input:focus {
    outline: none;
  }

  & .address div input {
    border-style: hidden;
    width: 70%;
    font-size: 16px;
  }
  & .address div p {
    margin-top: 13px;
    margin-left: 5px;
    margin-right: 10px;
  }

  & .address .contact {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & .address .shipto {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & .left {
    font-size: 16px;
    line-height: 20px;
    color: #515151;
  }

  & .shipping {
    margin-top: 70px;
    margin-left: 12%;
  }

  & .free {
    height: 54px;
    width: 85%;
    border: 0.5px solid black;
    border-radius: 4px;
    margin-left: 12%;
    margin-top: 36px;
    display: flex;
  }

  & .hollow {
    border: 9px solid black;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin-top: 15px;
    margin-left: 26px;
  }

  & .textFree {
    margin-top: 17px;
    margin-left: 35px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  & .fr {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-left: 326px;
    margin-top: 17px;
  }

  & .payment {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-left: 12%;
    margin-top: 49px;
  }

  & .payment div {
    display: flex;
  }

  & .payment div img {
    height: 10px;
    width: 4px;
    margin-right: 15px;
    margin-top: 5px;
  }

  & .payment button {
    width: 190px;
    height: 46px;
    background: #ff0000;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
`;

export default function LeftSection() {
  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <div className="covid">
        Note: Due to COVID related lockdowns, Please expect a delay in the
        delivery of your order.
      </div>
      <div>
        <p>{"Cart >"}</p>
        <p>{"Information >"}</p>
        <p>{"Shipping >"}</p>
        <p>{"Payment"}</p>
      </div>
      <div className="info">
        <p>Contact Information</p>
        <p>Already have an account? Log in</p>
      </div>
      <div className="address">
        <div className="contact">
          <p className="left">Contact</p>
          <input type="text" value="surajybtg@gmail.com" />
          <p>Change</p>
        </div>
        <div className="shipto">
          <p className="left">Ship to</p>
          <input type="text" value="surajybtg@gmail.com" />
          <p>Change</p>
        </div>
      </div>
      <p className="shipping">Shipping Address</p>
      <div className="free">
        <div className="hollow"></div>
        <p className="textFree">Shipping Method</p>
        <p className="fr">Free</p>
      </div>
      <div className="payment">
        <div>
          <img src={vector} alt="leftarrow" />
          <p>Return to Information</p>
        </div>
        <button>Continue to Payment</button>
      </div>
      <div className="policy">
        <p>Return Policy</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </Container>
  );
}

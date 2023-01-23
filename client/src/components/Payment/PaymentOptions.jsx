import pay from './Images/image 102.png'
import styled from "styled-components";
import leftArrow from "./Images/Vector 5.png";

const Container = styled.div`
height: 800px;
    & .pay {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-left: 12%;
        margin-top: 54px;
    }

    & .all {
        font-size: 16px;
        line-height: 20px;
        margin-left: 12%;
        margin-top: 14px;
    }

    & .paymentOptions {
        margin-top: 22px;
        margin-left: 12%;
        width: 85%;
        height: 180px;
        border: 0.5px solid black;
    }

    & .paymentOptions div {
        display: flex;
        height: 60px;
        border: 0.5px solid black;
        padding: 10px;
    }

    & .paymentOptions input {
        margin-top: 10px;
    }

     & .paymentOptions input:after {
        width: 21px;
        height: 21px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 1px solid black;
    }

    & .paymentOptions input:checked:after {
        width: 21px;
        height: 21px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 8px solid black;
    }

    & .paymentOptions img{
        margin-left: 40%;
        width: 25%;
    }

    & .paymentOptions p{
        margin-left: 10px;
        margin-top: 10px;
    }

    & .bill {
        margin-top: 50px;
        margin-left: 12%;
        font-size: 16px;
        font-weight: 600;
    }

    & .select {
        margin-top: 14px;
        margin-left: 12%;
    }

    & .shipping {
        margin-top: 12px;
        margin-left: 12%;
        width: 85%;
    }

    & .shipping div {
        height: 50px;
        border: 0.5px solid black;
        display: flex;
        padding: 14px
    }

    & .shipping input:after {
    width: 21px;
    height: 21px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: white;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid black;
    }

    & .shipping input:checked:after {
        width: 21px;
        height: 21px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 8px solid black;
    }
    
    & .shipping p {
        margin-left: 15px;
    }

    & .complete {
        display: flex;
        margin-top: 50px;
        margin-left: 12%;
        width: 85%;
        justify-content: space-between;
    }

    & .complete div {
        display: flex;
    }

    & .complete img {
        width: 4px;
        height: 10px;
        margin-top: 5px;
    }
    
    & .complete p {
        margin-left: 15px;
        font-size: 14px;
    }

    & .complete button {
        width: 190px;
        height: 46px;
        background: #FF0000;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF
    }
`;

export default function PaymentOptions() {
    return (
        <Container>
            <p className="pay">Payment</p>
            <p className="all">All Payments are secured and encrypted.</p>
            <div className="paymentOptions">
                <div>
                    <input type="radio" />
                    <p>PayU India</p>
                    <img src={pay} alt="pay" />
                    <p>  and more..</p>
                </div>
                <div>
                    <input type="radio" />
                    <p>RazorPay</p>
                    <img src={pay} alt="pay" />
                    <p>  and more..</p>
                </div>
                <div>
                    <input type="radio" />
                    <p>Paytm   </p>
                    <img src={pay} alt="pay" style={{marginLeft: "45%"}}/>
                    <p>  and more..</p>
                </div>
            </div>
            <p className="bill">Billing Adress</p>
            <p className="select">Select the address that matches your card or payment method.</p>
            <div className="shipping">
                <div>
                    <input type="radio" />
                    <p>Same as shipping address</p>
                </div>
                <div>
                    <input type="radio" />
                    <p>Use a different billing address</p>
                </div>
            </div>
            <div className="complete">
                <div>
                    <img src={ leftArrow } alt="leftarrow"/>
                    <p>Return Shopping</p>
                </div>
                <button>Complete Order</button>
            </div>
        </Container>
    );
}
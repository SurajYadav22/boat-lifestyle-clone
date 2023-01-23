import { useEffect, useState } from "react";
import styled from "styled-components";
import loading from "../assets/loading-icon.svg";
import { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

const rotation = keyframes`
0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const done = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
`;

const Container = styled.div`
  background-color: white !important;
  width: 100%;
  height: 100vh;
  border: 1px solid transparent;

  .cflex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 165px;
  }

  img {
    width: 100px;
    margin-bottom: 60px;
  }

  h2 {
    font-weight: 500;
    font-size: 35px;
    margin-bottom: 20px;
  }

  p {
    color: #a5a5a5;
    font-size: 20px;
    margin-bottom: 232px;
  }

  span {
    font-size: 20px;
  }

  .loading-image {
    animation: 5s infinite forwards linear ${rotation};
  }
`;

const Final = styled.div`
  background-color: white !important;
  width: 100%;
  height: 100vh;
  border: 1px solid transparent;
  animation: 0.5s ease-in ${done};

  .cflex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 165px;
  }

  img {
    margin-bottom: 16px;
    width: 250px;
  }

  h1 {
    color: #39ce57;
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 16px;
    line-height: 60px;
  }

  p {
    font-size: 23px;
    text-align: center;
    line-height: 35px;
    font-weight: 600;
  }
`;

export function Success() {
  const [flag, setFlag] = useState(false);
  const [total, setTotal] = useState();
  const history = useHistory();
  useEffect(() => {
    setTotal(localStorage.getItem("total"));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      removeCart();
      history.push("/");
    }, 10000);
    return () => {
      clearTimeout(id);
    };
  }, [history]);

  const removeCart = async () => {
    const id = localStorage.getItem("id");
    await axios.patch(`https://boatlifestyleapi.onrender.com/users`, {
      _id: id,
      cart: [],
    });
    localStorage.removeItem("total");
  };

  return !flag ? (
    <Container>
      <div className="cflex">
        <img className="loading-image" src={loading} alt="" />
        <h2>Processing your Payment...</h2>
        <p>Transaction ID: 23690293837922</p>
        <span>DO NOT CLOSE THIS WINDOW</span>
      </div>
    </Container>
  ) : (
    <Final>
      <div className="cflex">
        <img src="https://i.stack.imgur.com/ZRTb6.gif" alt="" />
        <h1>Payment Success!</h1>
        <p>
          You Paid Rs.{total}.00 <br /> to Boat life Style
        </p>
      </div>
    </Final>
  );
}

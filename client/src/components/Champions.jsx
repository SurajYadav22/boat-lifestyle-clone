import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { Chatbot } from "./Chatbot";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;

  .main-banner > img,
  .section > img {
    max-width: 100%;
    width: auto;
    display: block;
    margin: auto;
    height: auto;
  }

  .section {
    position: relative;
  }

  .section-2-text {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    top: 0%;
    width: 100%;
  }

  .section-2-text > h2 {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    -webkit-text-stroke: 1px #ff0000;
    margin: 10px 0 10px;
    color: white;
  }

  .section-2-text > p {
    text-align: center;
    background: #ff0000;
    width: 95%;
    max-width: 700px;
    margin: auto;
    padding: 10px;
    border-radius: 2em;
    font-weight: bold;
    font-size: 20px;
    color: white;
  }

  .section-1-text {
    position: absolute;
    left: 6.3%;
    top: 50%;
    height: 180px;
    /* transform: translate(-50%, -50%); */
    transform-origin: left;
    bottom: -5%;
    background-color: white;
    border-radius: 20px;
    padding: 15px;
    max-width: 700px;
    width: 100%;
  }

  .section-1-text > div {
    text-align: center;
    position: relative;
  }

  .sect-icon {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    top: -50px;
    max-width: 60px;
    width: 60px;
  }

  .sect-icon > img {
    max-width: 100%;
    width: auto;
    display: block;
    margin: auto;
    height: auto;
  }

  .section-1-text > div > p {
    font-size: 20px;
    margin-top: 30px;
    font-weight: 500;
    margin-bottom: 1em;
  }

  .data-cont {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .data-cont > .sort > h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
    color: var(--white);
  }

  .data-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    margin-top: 30px;
    row-gap: 70px;
  }

  .sort {
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    margin: auto;

    label {
      padding-right: 10px;
      font-size: 12px;
      color: #8b8b8b;
      text-transform: uppercase;
    }

    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
      background-color: #ff0000c5;
      text-align: center;
      transition: opacity 5ms;
      border: none;
    }

    select {
      display: inline-block;
      vertical-align: middle;
      margin: -18px 0 -16px 0.5em;
      font-size: 16px;
      letter-spacing: 0;
      background-color: transparent;
      color: white;
      border: none;
    }
  }
`;

export function Champions() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://boatlifestyleapi.onrender.com/champions"
    );
    setData(res.data);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let temp = [...data];

    if (value === "manual") temp.sort((a, b) => a.id - b.id);
    else if (value === "price-ascending")
      temp.sort((a, b) => {
        return (
          a.original_price -
          Math.floor((a.original_price * a.discount) / 100) -
          (b.original_price - Math.floor((b.original_price * b.discount) / 100))
        );
      });
    else
      temp.sort((a, b) => {
        return (
          b.original_price -
          Math.floor((b.original_price * b.discount) / 100) -
          (a.original_price - Math.floor((a.original_price * a.discount) / 100))
        );
      });

    setData(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Chatbot />
      <div className="main-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IPL_sec_1.jpg?v=1632132839"
          alt=""
        />
      </div>
      <div className="section section-2">
        <div className="section-2-text">
          <h2>GET A CHANCE TO WIN FREE IPL MERCHANDISE</h2>
          <p>
            Shop worth Rs 2000 and 100 lucky winners will get boAt IPL
            merchandise!
          </p>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ipl_sec_2.jpg?v=1632132839"
          alt=""
        />
      </div>
      <div className="section section-1">
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hardik-sec-3.jpg?v=1632132840"
          alt=""
        />
        <div className="section-1-text">
          <div>
            <div className="sect-icon">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon_542c95df-bb9d-4df4-96d5-66e5e33cbe38.png?v=1632132629"
                alt=""
              />
            </div>
            <p>
              {" "}
              Top 3 highest spenders stand a chance to win a boAt product and
              get to meet and greet one of our boAthead in a clubhouse <br />{" "}
              session*
            </p>
            <small>*T&C apply</small>
          </div>
        </div>
      </div>
      <div className="data-cont">
        <div className="sort">
          <h2>Sound of Champions</h2>
          <span>
            <label>Sort by</label>
            <span>
              <select onChange={handleChange}>
                <option value="manual">Featured</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
              </select>
            </span>
          </span>
        </div>
        <div className="data-grid">
          {data.map((el) => (
            <ProductCard key={el._id} el={el}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
}

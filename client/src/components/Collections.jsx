import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ProductCard } from "./ProductCard";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  background: linear-gradient(115.38deg, #292929 -23.43%, #010101 61.34%);
  border: 1px solid transparent;

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
    height: 100%;
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

export function Collections() {
  const [data, setData] = useState([]);
  const { collectionName } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const getCategory = (cname) => {
    let ans;
    if (cname === "true-wireless-earbuds") {
      ans = "WIRELESS EARBUDS";
    } else if (cname === "bluetooth-wireless-headphones") {
      ans = "BLUETOOTH EARPHONES";
    } else if (cname === "smart-watches") {
      ans = "SMART WATCHES";
    } else if (cname === "wired-earphones") {
      ans = "WIRED EARPHONES";
    } else if (cname === "bluetooth-speakers") {
      ans = "BLUETOOTH SPEAKERS";
    } else if (cname === "home-audio") {
      ans = "HOME THEATRE & SOUND BARS";
    } else if (cname === "mobile-accessories") {
      ans = "MOBILE ACCESSORIES";
    } else if (cname === "trebel-audiowear-for-women") {
      ans = "AUDIOWEAR FOR WOMEN";
    } else if (cname === "limited-edition") {
      ans = "LIMITED EDITION";
    } else if (cname === "misfit-by-boat") {
      ans = "MISFIT BY BOAT";
    } else if (cname === "immortal-gaming") {
      ans = "IMMORTAL GAMING";
    }

    return ans;
  };

  const getTitle = (cname) => {
    let ans;
    if (cname === "true-wireless-earbuds") {
      ans = "Wireless Earbuds";
    } else if (cname === "bluetooth-wireless-headphones") {
      ans = "Wireless Earphones";
    } else if (cname === "smart-watches") {
      ans = "Smart Watches";
    } else if (cname === "wired-earphones") {
      ans = "Wired Earphones";
    } else if (cname === "bluetooth-speakers") {
      ans = "Wireless Speakers";
    } else if (cname === "home-audio") {
      ans = "Home Theater Systems & Soundbars";
    } else if (cname === "mobile-accessories") {
      ans = "Mobile Accessories";
    } else if (cname === "trebel-audiowear-for-women") {
      ans = "TRebel";
    } else if (cname === "limited-edition") {
      ans = "Limited Edition";
    } else if (cname === "misfit-by-boat") {
      ans = "Misfit - Best Trimmer for Men";
    } else if (cname === "immortal-gaming") {
      ans = "Immortal Gaming";
    }
    return ans;
  };

  const catName = getCategory(collectionName);
  const title = getTitle(collectionName);

  const getData = async () => {
    const res = await axios.get(
      "https://boatlifestyleapi.onrender.com/products"
    );
    let temp = res.data.filter((el) => el.category === catName);
    setData(temp);
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
  }, [collectionName]);

  return (
    <Container>
      <div className="data-cont">
        <div className="sort">
          <h2>{title}</h2>
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

import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  height: 705px;
  background-color: var(--white);
  padding-bottom: 60px;
  border: 0.1px solid black;

  .cont {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .cont2 {
    margin-left: auto;
    margin-right: auto;
    width: 420px;
    max-width: 100%;
    margin-top: 30px;
  }

  .heading {
    margin: 10px 0px 40px;
  }

  .heading > h2 {
    text-align: center;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
  }
`;

const Form = styled.form`
  .socials > iframe {
    width: 100%;
    max-width: 100%;
    padding-top: 0px;
    margin-bottom: 5px;
    border: 0px;
    height: 50px;
  }

  .input-box,
  .login-password {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 16px;
    line-height: 1.4em;
    margin-bottom: 8px;
  }

  .input-box > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #000;
  }

  .action-bottom {
    margin-top: 27px;
  }

  .action-bottom > p {
    margin-bottom: 1em;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .action-bottom > p > input {
    font-weight: 700;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    background: red;
    border: 1px solid red;
    font-size: 16px;
    line-height: 1em;
    height: auto;
    margin: 0;
    padding: 11px 25px;
    vertical-align: middle;
    text-align: center;
    color: white;
    transition: background-color 0.1s, color 0.1s, border-color 0.1s,
      opacity 0.1s;
    display: inline-block;
  }

  .action-bottom > span {
    text-align: center;
    margin: 10px 0;
    display: block;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;
    font-size: inherit;
    letter-spacing: 1px;
  }

  .action-bottom > span > a {
    color: var(--black);
  }

  .action-bottom > span > a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
    transition: color 0.1s, border-color 0.1s;
  }
`;

export function Register() {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false); //to check if registration was successful

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.post("https://boatlifestyleapi.onrender.com/users", data);
      setFlag(true);
    } catch (e) {
      alert("Invalid Input");
    }
  };

  return (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h2>Create Account</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="socials">
              <iframe
                id="social_login_frame"
                title="Social Login Frame"
                src="https://social-login.oxiapps.com/widget?site=boatlifestylein.myshopify.com&amp;vt=928362&amp;parenturl=https://www.boat-lifestyle.com/account/login"
                scrolling="no"
              ></iframe>
            </div>
            <div className="input-box">
              <label htmlFor="customer_name">First Name</label>
              <input
                required
                name="first_name"
                onChange={handleChange}
                type="text"
                id="customer_name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="customer_lname">Last Name</label>
              <input
                required
                name="last_name"
                onChange={handleChange}
                type="text"
                id="customer_lname"
              />
            </div>
            <div className="input-box">
              <label htmlFor="customer_email">Email</label>
              <input
                required
                name="email"
                onChange={handleChange}
                type="email"
                id="customer_email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="customer_password">Password</label>
              <input
                required
                name="password"
                onChange={handleChange}
                type="password"
                id="customer_password"
              />
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Create" />
              </p>
              <span>
                <Link to="/account/login">
                  Log in with an existing account&nbsp;
                </Link>
                or <Link to="/"> Return to Store</Link>
              </span>
            </div>
          </Form>
          {flag ? (
            <Redirect to="/account/login" />
          ) : (
            <Redirect to="/account/register" />
          )}
        </div>
      </div>
    </Container>
  );
}

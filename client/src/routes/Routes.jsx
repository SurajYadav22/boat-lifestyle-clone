import { Route, Switch } from "react-router-dom";
import { Error } from "../components/Error";
import { HomePage } from "../components/homepage/HomePage";
import { Champions } from "../components/Champions";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Footer } from "../components/Footer";
import ProductPage from "../components/ProductPage/ProductPage";
import { Collections } from "../components/Collections";
import { Navbar } from "../components/navbar/Navbar";

import { Success } from "../components/Success";
import Cart from "../components/Cart/Cart";
import { Payment } from "../components/Payment";
import PrivateRoute from "./PrivateRoute";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Navbar />
        <HomePage />
        <Footer />
      </Route>

      <Route path="/pages/sound-of-champions">
        <Navbar />
        <Champions />
        <Footer />
      </Route>

      <Route path="/account/login">
        <Navbar />
        <Login />
        <Footer />
      </Route>

      <Route path="/account/register">
        <Navbar />
        <Register />
        <Footer />
      </Route>

      <Route path="/products/:productName">
        <Navbar />
        <ProductPage />
        <Footer />
      </Route>

      <Route path="/cart">
        <Navbar />
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      </Route>

      <Route path="/payment">
        <Payment />
      </Route>

      <Route exact path="/successful">
        <Success />
      </Route>

      <Route path="/collections/:collectionName">
        <Navbar />
        <Collections />
        <Footer />
      </Route>

      <Route>
        <Navbar />
        <Error />
        <Footer />
      </Route>
    </Switch>
  );
}

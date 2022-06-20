import NavBar from "./routes/navbar/navbar-component";
import { Route, Routes} from "react-router-dom";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Authorization from "./routes/authorization/authorization-component";
import Checkout from "./routes/checkout/checkout-component";
import {useEffect} from "react";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import PaymentForm from "./components/payment-form/payment-form-component";
import ThankYou from "./routes/thankyou/thankYou-component";





const App = () => {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    }, [dispatch])


  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authorization />} />
          <Route path="logout" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

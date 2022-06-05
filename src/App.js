import NavBar from "./routes/navbar/navbar-component";
import { Route, Routes} from "react-router-dom";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Authorization from "./routes/authorization/authorization-component";
import Checkout from "./routes/checkout/checkout-component";




const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authorization />} />
          <Route path="logout" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import axios from "axios";
import "./App.css";
import Hero from "./component/Hero/Hero";
import NavBar from "./component/NavBar/NavBar";
import PricingCards from "./component/PricingCards/PricingCards";
import Status from "./component/Status";
import Steps from "./component/Steps";
import FreeTrial from "./component/FreeTrial";
import Footer from "./component/Footer";
import Products from "./component/Products/Products";
import Cart from "./component/Cart/Cart";
import { useState } from "react";

const pricingPromise = axios.get("pricingData.json");
const productsPromise = axios.get("productsData.json");

function App() {

  const [activeTab, setActiveTab] = useState('Products');
  const [carts, setCarts] = useState([]);

  return (
    <>
      <header className="max-w-300 mx-auto">
        <nav>
          <NavBar></NavBar>
        </nav>
        <Hero></Hero>
      </header>
      <main className="max-w-400 mx-auto">
        <Status></Status>
        <div className="text-center text-black mb-15">
          <h2 className="font-extrabold text-5xl mb-4">
            Premium Digital Tools
          </h2>
          <p className="mb-4">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent mb-10">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full bg-white text-black w-40"
            aria-label="Products"
            onClick={() => setActiveTab('Products')}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 bg-white text-black"
            aria-label={`Cart (${carts.length})`}
            defaultChecked
            onClick={() => setActiveTab('Cart')}
          />
        </div>

        {activeTab === 'Products' && <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>}
        {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}

        <Steps></Steps>
        <PricingCards pricingPromise={pricingPromise}></PricingCards>

        <FreeTrial></FreeTrial>

        <Footer></Footer>
      </main>
    </>
  );
}

export default App;

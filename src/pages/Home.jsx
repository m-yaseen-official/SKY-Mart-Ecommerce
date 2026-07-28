import  Features  from "../components/Features/Features";
import Categories from "../components/Categories/Categories";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import Stats from "../components/Stats/Stats";

import CartDrawer from "../components/Cart/CartDrawer";

const Home = () => {

  return (
  <main className="px-5">
    <div>
      <CartDrawer  />
    </div>
  
      <div>
      <Hero />  
      </div>
    <div>
      <Stats />
    </div>
      <div>
        <Categories />
      </div>
    
      <div>
      <Features />
    </div>
  </main>
  );
};

export default Home;
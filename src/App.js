
import Cards from "./Component/Cards";
import Category from "./Component/Category";
import Food from "./Component/Food";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";



function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Cards />
     <Food /> 
     <Category />
     <Footer />
    
    </div>
  );
}

export default App;

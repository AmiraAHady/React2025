import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import ProductCard from "./components/productCard/productCard";
import Header from "./components/header/header";
import Recipes from "./components/recipes/recipes";
import Login from "./components/login/login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mb-2">
        <Header />
     
      </div>
      <div className="container">
      <Login />
      </div>
      
      {/* <Recipes /> */}
      {/* <ProductCard /> */}
    </>
  );
}

export default App;

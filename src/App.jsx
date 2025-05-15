import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import ProductCard from "./components/productCard/productCard";

function App() {
  return (
    <>
      <Navbar />
      <h1>hello from app component</h1>
      <ProductCard />
    </>
  );
}

export default App;

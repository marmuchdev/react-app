import { useState , useEffect } from "react";
import ProductList from "../components/ProductList";


const Home = () => {
  //state that stores products data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const initialProducts = [
        { id: 1, name: 'Product 1', price: 10, stock_count: 5 },
        { id: 2, name: 'Product 2', price: 20, stock_count: 5 },
        { id: 3, name: 'Product 3', price: 30, stock_count: 0 },
        { id: 4, name: 'Product 4', price: 40, stock_count: 5 },
        { id: 5, name: 'Product 5', price: 50, stock_count: 5 },
      ];

    setProducts(initialProducts); //assign to our empty array
  }, []);
  return (
  <>
  <h2>Welcome to our Online Store</h2>
  
  <ProductList products={products} />
  </>
  );
};

export default Home;

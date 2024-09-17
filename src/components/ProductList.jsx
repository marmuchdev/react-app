import "./ProductList.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import OutOfStockCard from "./OutOfStockCard";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const handleShowModal = (product) => {
  //     setSelectedProduct(product);
  // };
  // const handleCloseModal = () => {
  //     setSelectedProduct(null);
  // };
  return (
    <>
      <h3>Our Products</h3>
      <div className="row">
        {products.map((product) => {
          if (product.stock_count > 0) {
            return <ProductCard key={product.id} product={product} />;
          } else {
            return <OutOfStockCard key={product.id} product={product} />;
          }
        })}
      </div>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;

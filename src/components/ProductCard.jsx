import PropTypes from "prop-types";
import { useState } from "react";
import ProductModal from "./ProductModal";
const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const addProductToBasket = (e) => {
    e.stopPropagation();
    alert("Added to the basket!");
  };
  return (
    <>
      <div key={product.id} className="col-md-4 mb-3">
        <div className="card" onClick={() => handleShowModal(product)}>
          <img
            src={`https://via.placeholder.com/150?text=${product.name}`}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: £{product.price}</p>
            <a
              className="btn btn-primary"
              onClick={(e) => addProductToBasket(e)}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      <ProductModal
        selectedProduct={selectedProduct}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

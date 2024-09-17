import './ProductList.css'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null)
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
        {products.map(product => (
        //   <div key={product.id} className="col-md-4 mb-3">
        //     <div className="card" onClick={() => handleShowModal(product)}>
        //       <img src={`https://via.placeholder.com/150?text=${product.name}`} className="card-img-top" alt={product.name} />
        //       <div className="card-body">
        //         <h5 className="card-title">{product.name}</h5>
        //         <p className="card-text">Price: £{product.price}</p>
        //         <a href="#" className="btn btn-primary">Add to Cart</a>
        //       </div>
        //     </div>
        //   </div>

        <ProductCard
        key={product.id}
        product={product}
        // name={product.name}
        // price={product.price}
        />
        ))}
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
    })
  ).isRequired,
};

export default ProductList;
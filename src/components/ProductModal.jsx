import {Modal, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';


const ProductModal = ({selectedProduct, handleCloseModal} ) => {

    return (
        <>
         {/* Modal component */}
      {selectedProduct && (
        <Modal show={!!selectedProduct} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Price: £{selectedProduct.price}</p>
            {/* Add more details here */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
        </>
    );

};
ProductModal.propTypes = {
    selectedProduct: PropTypes.object,
    handleCloseModal: PropTypes.func.isRequired
};

export default ProductModal;
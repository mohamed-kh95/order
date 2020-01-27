import React , {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
const AddOpt = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {handleSubmit} = props;
    
    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            +
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Option</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit = {(e) => {handleSubmit(e); handleClose(e)}}>
                    <div className = 'input-content'>
                        <label>Option Name</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name='name' id='name' onChange = {props.handleChange} className = 'form-control' type = 'text'/>
                            <button className = 'btn btn-primary'>Edit</button>
                            <button className = 'btn btn-danger'>Remove</button>
                        </div>
                    </div>
                    <div className = 'input-content'>
                        <label>Translate To English</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name = 'transToEn' onChange = {props.handleChange} className = 'form-control' type = 'text' />
                            <button className = 'btn btn-primary'>Edit</button>
                            <button className = 'btn btn-danger'>Remove</button>
                        </div>
                    </div>
                    <div className = 'input-content'>
                        <label>Translate To French</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name = 'transToF' onChange = {props.handleChange} className = 'form-control' type = 'text' />
                            <button className = 'btn btn-primary'>Edit</button>
                            <button className = 'btn btn-danger'>Remove</button>
                        </div>
                    </div>
                    
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick = {(e) => {handleSubmit(e); handleClose(e)}}>
                Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default AddOpt;
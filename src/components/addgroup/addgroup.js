import React , {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
const AddGroup = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {groupSubmit, groupChange} = props;
    
    return (
        <>
        <Button variant="danger"
         onClick={handleShow}
         disabled = {props.optionsLength ? false: true}
         style = {{cursor: props.optionsLength ? 'pointer': 'no-drop'}}
         >
            +
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit = {(e) => {groupSubmit(e); handleClose(e)}}>
                    <div className = 'input-content'>
                        <label>Group Name</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name='name' onChange = {groupChange} className = 'form-control' type = 'text'/>
                            
                        </div>
                    </div>
                    <div className = 'input-content'>
                        <label>Translate To English</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name = 'transToEn' onChange = {groupChange} className = 'form-control' type = 'text' />
                            
                        </div>
                    </div>
                    <div className = 'input-content'>
                        <label>Translate To French</label>
                        <div className = 'form-group d-flex align-items-center'>
                            <input name = 'transToF' onChange = {groupChange} className = 'form-control' type = 'text' />
                            
                        </div>
                    </div>
                    
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick = {(e) => {groupSubmit(e); handleClose(e)}}>
                Save
            </Button>
            
            
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default AddGroup;
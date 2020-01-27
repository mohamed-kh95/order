import React , {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
const OptList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        
            <div className = 'form-group d-flex align-items-center'>
                <input className = 'form-control' type = 'text' disabled value = {props.opt.name} />
                <button onClick = {(e) => {e.preventDefault(); handleShow()}} className = 'btn btn-primary'>Edit</button>
                <button onClick = {(e) => {e.preventDefault(); props.deleteOpt(props.index)}} className = 'btn btn-danger'>Delete</button>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add New Option</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit = {(e) => {props.handleSubmit(e); handleClose(e)}}>
                                <div className = 'input-content'>
                                    <label>Option Name</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input
                                            name='name'
                                            onChange = {(e) => props.editList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.options[props.index].name}/>
                                        
                                    </div>
                                </div>
                                <div className = 'input-content'>
                                    <label>Translate To English</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input 
                                            name = 'transToEn'
                                            onChange = {(e) => props.editList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.options[props.index].transToEn}/>
                                        
                                    </div>
                                </div>
                                <div className = 'input-content'>
                                    <label>Translate To French</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input
                                            name = 'transToF'
                                            onChange = {(e) => props.editList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.options[props.index].transToF}/>
                                        
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick = {(e) => {props.editSave(e); handleClose(e)}}>
                            Save Changes
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </>
    )
}
export default OptList;
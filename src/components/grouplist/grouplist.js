import React , {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './grouplist.css';
const GroupList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showOp, setShowOp] = useState(false);
    const optionClose = () => setShowOp(false);
    const optionShow = () => setShowOp(true);

    
    
    return (
        <>
        
            <div className = 'form-group d-flex align-items-start'>
                <div className = 'group-dropdown'>
                    <div className = 'group-name' onClick = {() => props.groupToggle(props.index)}>
                        <div className = 'group-toggle'>{props.gro.open ? '-': '+'}</div>
                        <div className = 'name'>{props.gro.name}</div>
                    </div>
                    <ul className = 'group-drop'  className = {props.gro.open ? 'open': 'closed'} >
                        {/* {props.groupOption()} */}
                        <li>
                            <Button variant="primary" onClick={optionShow}>
                                Add Option
                            </Button>
                            <Modal show={showOp} onHide={optionClose} animation={true}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Option To Group</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <form className = 'option-form'>
                                    <div className = 'row'>
                                        {props.groupOption()}
                                    </div>
                                    
                                </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={optionClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={optionClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </li>
                    </ul>
                </div>
                {/* <input className = 'form-control' type = 'text' disabled value = {props.gro.name} />
                 */}
                <button onClick = {(e) => {e.preventDefault(); handleShow()}} className = 'btn btn-primary'>Edit</button>
                <button onClick = {(e) => {e.preventDefault(); props.deleteGroup(props.index)}} className = 'btn btn-danger'>Delete</button>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add New Group</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit = {(e) => {props.editGroupSave(e); handleClose(e)}}>
                                <div className = 'input-content'>
                                    <label>Group Name</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input
                                            name='name'
                                            onChange = {(e) => props.editGroupList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.groups[props.index].name}/>
                                        
                                    </div>
                                </div>
                                <div className = 'input-content'>
                                    <label>Translate To English</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input 
                                            name = 'transToEn'
                                            onChange = {(e) => props.editGroupList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.groups[props.index].transToEn}/>
                                        
                                    </div>
                                </div>
                                <div className = 'input-content'>
                                    <label>Translate To French</label>
                                    <div className = 'form-group d-flex align-items-center'>
                                        <input
                                            name = 'transToF'
                                            onChange = {(e) => props.editGroupList(e, props.index)}
                                            className = 'form-control'
                                            type = 'text'
                                            defaultValue = {props.groups[props.index].transToF}/>
                                        
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick = {(e) => {props.editGroupSave(e); handleClose(e)}}>
                            Save
                        </Button>
                        
                        
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </>
    )
}
export default GroupList;
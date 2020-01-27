import React , {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AddOpt from '../addoption/addoption';
import OptList from '../optlist/optlist';
import './options.css';


class Options extends Component {
    state = {
        options : [
            // {name: 'Test', transToEn: 'Test', transToF: 'Test'}
        ],
        newOpt: {name:'', transToEn: '', transToF: ''}
        // hasEdit: false,
        // setShow: false,
        // show: false
    }
    // handleClose = () => this.setState({setShow: false});
    // handleShow = () => this.setState({setShow: true});
    handleChange = (e) => {
        let {newOpt} = this.state;
        newOpt[e.target.name] = e.target.value;
        
        this.setState({
            newOpt
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let {options, newOpt} = this.state;
        options.push(newOpt);
        newOpt = {name:'', transToEn: '', transToF: ''}
        this.setState({
            options,
            newOpt
        });
    }
    editList = (e, index) => {
        let {options} = this.state;
        options[index][e.target.name] = e.target.value
    }
    editSave = (e) => {
        e.preventDefault();
        let {options} = this.state;
        this.setState({
            options
        });
        console.log(this.state.options)
    }
    deleteOpt = (e, index) => {
        e.preventDefault();
        let {options} = this.state;
        options[index][e.target.name] = '';
        this.setState({
            options
        });
        console.log(this.state.options)
    }
  render() {
      const {options} = this.state;
      const optLength = options.length;
      const optList = optLength ? ( options.map((opt, index) => {
          return (
            <div key = {index}>
                <OptList deleteOpt = {this.deleteOpt} editSave = {this.editSave} editList = {this.editList} opt = {opt} options = {this.state.options} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}  editToggle = {this.editToggle} index = {index} />
            </div>
          )
      })) : (<div className = 'noitem'>No Options Added</div>)
    return (
      <div className="Options">
          <Container>
              <Row>
                  <Col xs = {6}>
                    <div className = 'add-opt'>
                        <div className = 'opt d-flex justify-content-between align-items-center'>
                            <div className = 'title'>
                                <div>Options</div>
                                <p>Add Options Items</p>
                            </div>
                            <AddOpt handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} newOpt = {this.state.newOpt} />
                        </div>
                        <form>
                            {optList}
                        </form>
                    </div>
                  </Col>
                  

              </Row>
          </Container>
        
      </div>
    );
  }
}
export default Options;

import React , {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AddOpt from '../addoption/addoption';
import OptList from '../optlist/optlist';
import './options.css';


class Options extends Component {
    
    
    // componentDidMount = () => {
    //     const {options} = this.state;
    //     const optLength = options.length;
    //     this.props.checkLength(optLength);
    //     console.log('Length =>' + this.props.checkLength(optLength))
    // }
    // componentDidUpdate = () => {
    //     console.log('update Options')
    // }
  render() {
      const {options} = this.props;
      const optLength = options.length;
      const optList = optLength ? (options.map((opt, index) => {
          return (
            <div key = {index}>
                <OptList deleteOpt = {this.props.deleteOpt} editOptSave = {this.props.editOptSave} editOptList = {this.props.editOptList} opt = {opt} options = {this.props.options} optionSubmit = {this.props.optionSubmit} optionChange = {this.props.optionChange} index = {index} />
            </div>
          )
      })) : (<div className = 'noitem'>No Options Added</div>)
    return (
        <Col xs = {12} md = {6} style = {{userSelect: 'none'}}>
            <div className="Options">
                <div className = 'add-opt'>
                    <div className = 'opt d-flex justify-content-between align-items-center'>
                        <div className = 'title'>
                            <div>Options</div>
                            <p>Add Options Items</p>
                        </div>
                        <AddOpt optionSubmit = {this.props.optionSubmit} optionChange = {this.props.optionChange} newOpt = {this.props.newOpt} />
                    </div>
                    <form>
                        {optList}
                    </form>
                </div>
            </div>
        </Col>
    );
  }
}
export default Options;

import React , {Component} from 'react';
import Options from './components/options/options';
import Groups from './components/groups/groups';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    // Options
    options : [
      // {name: 'Test', transToEn: 'Test', transToF: 'Test'}
    ],
    newOpt: {name:'', transToEn: '', transToF: ''}, // To Add New Options
    // Groups
    groups : [
      // {name: 'Test', transToEn: 'Test', transToF: 'Test'}
    ],
    newGroup: {name:'', transToEn: '', transToF: '', open: false, id: Math.random()}, // To Add New Group
  }
  // Options Function
  optionChange = (e) => {
      let {newOpt} = this.state;
      newOpt[e.target.name] = e.target.value;
      
      this.setState({
          newOpt
      })
      console.log(this.state)
  }
  optionSubmit = (e) => {
      e.preventDefault();
      let {options, newOpt} = this.state;
      if (this.state.newOpt.name !== '') {
        options.push(newOpt);
        newOpt = {name:'', transToEn: '', transToF: ''}
        this.setState({
            options,
            newOpt
        });
      } else {
        newOpt = {name:'', transToEn: '', transToF: ''}
        this.setState({
            options,
            newOpt
        });
      }
  }
  // Popup Edit
  editOptList = (e, index) => {
      let {options} = this.state;
      options[index][e.target.name] = e.target.value
  }
  // Popup Save
  editOptSave = (e) => {
      e.preventDefault();
      let {options} = this.state;
      this.setState({
          options
      });
      console.log(this.state.options)
  }
  // Delete Option
  deleteOpt = (index) => {
      let {options} = this.state;
      options.splice(index, 1)
      this.setState({
          options
      });
      console.log(this.state.options)
  }
  // Groups Functions
  groupChange = (e) => {
      let {newGroup} = this.state;
      newGroup[e.target.name] = e.target.value;
      
      this.setState({
          newGroup
      })
      
  }
  groupSubmit = (e) => {
      e.preventDefault();
      let {groups, newGroup} = this.state;
      if(newGroup.name !== '') {
        groups.push(newGroup);
        newGroup = {name:'', transToEn: '', transToF: '', open: false, id: Math.random()}
        this.setState({
            groups,
            newGroup
        });
      } else {
        newGroup = {name:'', transToEn: '', transToF: '', open: false, id: Math.random()}
        this.setState({
            groups,
            newGroup
        });
      }
  }
  // Popup Edit
  editGroupList = (e, index) => {
      let {groups} = this.state;
      groups[index][e.target.name] = e.target.value
  }
  // Popup Save
  editGroupSave = (e) => {
      e.preventDefault();
      let {groups} = this.state;
      this.setState({
          groups
      });
      console.log(this.state.groups)
  }
  // Delete Group
  deleteGroup = (index) => {
      let {groups} = this.state;
      groups.splice(index, 1)
      this.setState({
          groups
      });
      console.log(this.state.groups)
  }
  // Render Options In Group   
  groupOption = () => {
      let {options} = this.state;
        
      let opList = options.map((groupOp, index) => {
        console.log('group name' + groupOp.name)
          return (
              <div className = 'col-4' key = {index}>
                  <div className = 'form-group d-flex align-items-center'>
                    <input type = 'checkbox' id = {`_${groupOp.name}`} name = {groupOp.name} value = {groupOp.name} />
                    <label for = {`_${groupOp.name}`}>{groupOp.name}</label>
                  </div>
              </div>
          )
      })
      return opList
  }
    // Gruop List Toggle 
    groupToggle = (index) => {
        let {groups} = this.state;
        if (groups.indexOf(groups[index]) === index) {
            let {open} = this.state.groups[index]
            groups[index].open = !open;
            this.setState({
                groups
            })
            console.log(this.state.groups)
            console.log('Status ' + groups[index].open)
        } else {
            groups[index].open = false;
            this.setState({
                groups
            })
            console.log('error')
        }
           
        
    }  
  render() {
      let {options} = this.state;
      
    return (
      <div className="App">
        <Container>
          <Row>

            <Options 
            options = {this.state.options}
            newOpt = {this.state.newOpt}
            optionChange = {this.optionChange}
            optionSubmit = {this.optionSubmit}
            editOptSave = {this.editOptSave}
            editOptList = {this.editOptList}
            deleteOpt = {this.deleteOpt} />

            <Groups
            groups = {this.state.groups}
            newGroup = {this.state.newGroup}
            groupChange = {this.groupChange}
            groupSubmit = {this.groupSubmit}
            editGroupSave = {this.editGroupSave}
            editGroupList = {this.editGroupList}
            deleteGroup = {this.deleteGroup}
            groupOption = {this.groupOption}
            groupToggle = {this.groupToggle}
            optionsLength = {this.state.options.length} />
          </Row>
        </Container>
        
      </div>
    );
  }
}
export default App;

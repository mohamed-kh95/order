import React , {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AddGroup from '../addgroup/addgroup';
import GroupList from '../grouplist/grouplist';
import './groups.css';


class Groups extends Component {
    state = {
        show: false,
        showToggle: 'none',
        btnContent: '+'
    }
    
  render() {
      const {groups} = this.props;
      const groupLength = groups.length;
      const groupList = groupLength ? ( groups.map((gro, index) => {
          return (
            <div key = {index}>
                <GroupList
                btnContent = {this.state.btnContent}
                showToggle = {this.state.showToggle}
                groupToggle = {this.groupToggle}
                deleteGroup = {this.props.deleteGroup}
                editGroupSave = {this.props.editGroupSave}
                editGroupList = {this.props.editGroupList}
                gro = {gro}
                groups = {this.props.groups}
                groupSubmit = {this.props.groupSubmit}
                groupChange = {this.props.groupChange}
                index = {index}
                groupOption = {this.props.groupOption}
                groupToggle = {this.props.groupToggle} />
            </div>
          )
      })) : (<div className = 'noitem'>No Groups Added</div>)
    return (
        <Col xs = {12} md = {6} style = {{opacity: this.props.optionsLength ? 1 : .5, userSelect: 'none'}}>
            <div className="Groups">
                <div className = 'add-group'>
                    <div className = 'group d-flex justify-content-between align-items-center'>
                        <div className = 'title'>
                            <div>Groups</div>
                            <p>Create / Remove Groups</p>
                        </div>
                        <AddGroup
                        groupSubmit = {this.props.groupSubmit}
                        groupChange = {this.props.groupChange}
                        newGroup = {this.props.newGroup}
                        optionsLength = {this.props.optionsLength} />
                    </div>
                    <form>
                        {groupList}
                    </form>
                </div>
            </div>
        </Col>
    );
  }
}
export default Groups;

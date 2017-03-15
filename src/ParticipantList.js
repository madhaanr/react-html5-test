import React, { Component } from 'react'

import './ParticipantList.css'
import Participant from './Participant'
import AddParticipant from './AddParticipant'
import EditParticipant from './EditParticipant'
import RemoveParticipant from './RemoveParticipant'

class ParticipantList extends Component {
  constructor(props) {
    super(props)
    this.addParticipant = this.addParticipant.bind(this)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
    this.cancelEditing = this.cancelEditing.bind(this)
    this.updateParticipant = this.updateParticipant.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.state = {
      participants: [
        { id: "12sfs", name: "Meet", email: "meet@a.com", phone: "0507654327" },
        { id: "12sf3", name: "Euvu", email: "euvu@a.com", phone: "0509889444" },
        { id: "12sf2", name: "Mers", email: "mers@a.com", phone: "0501234567" },
        { id: "12fgs", name: "Emsa", email: "emsa@a.com", phone: "0501239567" }
      ],
      editing: '',
      nameOrder: '\u2195',
      emailOrder: '\u2195',
      phoneOrder: '\u2195'
    }
  }

  cancelEditing() {
    this.setState({ editing: '' })
  }

  toggleEditing(id) {
    this.setState({ editing: id })
  }

  addParticipant(participant) {
    this.setState({
      participants: [...this.state.participants, participant]
    })
  }

  removeParticipant(id) {
    const filtered = this.state.participants.filter(obj => {
      return obj.id !== id
    })
    this.setState({ participants: filtered })
  }

  updateParticipant(participant) {
    const participants = this.state.participants
    var index = participants.findIndex(obj => {
      return obj.id === participant.id
    })
    participants[index] = participant
    this.setState({ participants: participants, editing: '' })
  }
  sortByName() {
    if (this.state.participants.length === 0) {
      return
    }
    const copy = this.state.participants
    let wasInOrder = 0
    copy.sort((a, b) => {
      if (a.name.toLowerCase() >= b.name.toLowerCase()) {
        wasInOrder++;
        return 1;
      }
      return -1;
    })
    let order = '\u2193'
    if (wasInOrder === 0) {
      order = '\u2191'
      copy.reverse()
    }
    this.setState({ participants: copy, nameOrder: order });
  }

  renderParticipants() {
    return this.state.participants.map((obj) => {
      if (this.state.editing === obj.id) {
        return (
          <Participant
            key={obj.id}
            id={obj.id}
            name={obj.name}
            email={obj.email}
            phone={obj.phone}
            editing={this.state.editing}
            cancelEditing={this.cancelEditing}
            updateParticipant={this.updateParticipant}
          />
        )
      }
      return (
        <Participant
          key={obj.id}
          id={obj.id}
          name={obj.name}
          email={obj.email}
          phone={obj.phone}
          toggleEditing={this.toggleEditing}
          removeParticipant={this.removeParticipant}
        />
      )
    })
  }

  // <RemoveParticipant key={p.id} id={p.id} removeParticipant={this.removeParticipant} />
  //<button><EditParticipant participant={p}/></button>
  render() {
    return (
      <div>
        <div className="AddParticipant">
          <AddParticipant addParticipant={this.addParticipant} />
        </div>
        <div className="table ParticipantList">
          <div className="tr tableHeader">
            <div onClick={this.sortByName} className="th">Name &nbsp;{this.state.nameOrder}</div>
            <div className="th">E-mail address</div>
            <div className="th">Phone number</div>
            <div className="th">
            </div>
          </div>
          {this.renderParticipants()}
        </div>
      </div>
    )
  }
}

export default ParticipantList
import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'

import Participant from './Participant'
import AddParticipant from './AddParticipant'

class ParticipantList extends Component {
  constructor(props) {
    super(props)
    this.addParticipant = this.addParticipant.bind(this)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
    this.cancelEditing = this.cancelEditing.bind(this)
    this.updateParticipant = this.updateParticipant.bind(this)
    this.state = {
      participants: [
        { id: "12sfs", name: "Meet", email: "meet@a.com", phone: "0507654327" },
        { id: "12sf3", name: "Euvu", email: "euvu@a.com", phone: "0509889444" },
        { id: "12sf2", name: "Mers", email: "mers@a.com", phone: "0501234567" },
        { id: "12fgs", name: "Emsa", email: "emsa@a.com", phone: "0501239567" }
      ],
      editing: ''
    }
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

 render() {
    return (
      <div>
        <div className="AddParticipant">
          <AddParticipant addParticipant={this.addParticipant} />
        </div>
        <div className="ParticipantList">
          {this.renderParticipants()}
        </div>
      </div>
    )
  }
}

export default ParticipantList
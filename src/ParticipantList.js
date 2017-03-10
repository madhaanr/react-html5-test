import React, { Component } from 'react'
import Participant from './Participant'
import AddParticipant from './AddParticipant'

class ParticipantList extends Component {
  constructor(props) {
    super(props)
    this.addParticipant = this.addParticipant.bind(this)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.state = {
      participants: [
        { name: "Meet", email: "meet@a.com", phone: "050-7654327" },
        { name: "Euvu", email: "euvu@a.com", phone: "050-9889444" },
        { name: "Mers", email: "mers@a.com", phone: "050-1234567" },
        { name: "Emsa", email: "emsa@a.com", phone: "050-1239567" }
      ]
    }
  }
  renderParticipants() {
    return this.state.participants.map((obj, i) => (
      <Participant
        key={i}
        name={obj.name}
        email={obj.email}
        phone={obj.phone}
        updateParticipant={this.updateParticipant}
        removeParticipant={this.removeParticipant}
      />
    ))
  }
  addParticipant(name, email, phone) {
    this.setState({
      participants: [...this.state.participants, { name: name, email: email, phone: phone }]
    })
    console.log(this.state.participants)
  }

  removeParticipant(removeName) {
    const filtered = this.state.participants.filter(obj => {
      return obj.name !== removeName
    })
    this.setState({ participants: filtered })
  }

  updateParticipant(name, email, phone) {

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
import React, { Component } from 'react'
import './Participant.css'

class Participant extends Component {
  constructor(props) {
    super(props)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.updateParticipant = this.updateParticipant.bind(this)
  }
  removeParticipant() {
    this.props.removeParticipant(this.props.name)
  }
  updateParticipant() {
    this.props.updateParticipant(this.props.name, this.props.email,this.props.phone)
  }
  render() {
    return (
      <div className="Participant">
        {this.props.name} {this.props.email} {this.props.phone}
        <button onClick={this.updateParticipant}>update</button>
        <button onClick={this.removeParticipant}>remove</button>
      </div>
    )
  }
}

export default Participant
import React, { Component } from 'react'

import './Participant.css'
import trash_can from '../public/trash_can.png'
import pen from '../public/pen.png'

class Participant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id, name: this.props.name,
      email: this.props.email, phone: this.props.phone
    }
    this.removeParticipant = this.removeParticipant.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
    this.cancelEditing = this.cancelEditing.bind(this)
    this.updateParticipant = this.updateParticipant.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    editing: React.PropTypes.string,
    updateParticipant: React.PropTypes.func,
    removeParticipant: React.PropTypes.func,
    toggleEditing: React.PropTypes.func,
    cancelEditing: React.PropTypes.func
  }
  removeParticipant() {
    this.props.removeParticipant(this.props.id)
  }
  updateParticipant() {
    event.preventDefault()
    this.props.updateParticipant({
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    })
  }
  toggleEditing() {
    this.props.toggleEditing(this.state.id)
  }
  cancelEditing() {
    event.preventDefault()
    this.props.cancelEditing()
  }
  handleChange(event) {
    event.preventDefault()
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }
  render() {
    if (this.props.editing === this.props.id) {
      return (
        <div className="Participant">
          <form onSubmit={this.updateParticipant}>
            <input
              type="text"
              name="name"
              placeholder={this.state.name}
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="email"
              placeholder={this.state.email}
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="text"
              name="phone"
              placeholder={this.state.phone}
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <button onClick={this.cancelEditing}>cancel</button>
            <input type='submit' value='Save' />
          </form>
        </div>
      )
    }
    return (
      <div className='tr Participant'>
        <div className='td'>{this.props.name}</div>
        <div className='td'>{this.props.email}</div>
        <div className='td'>{this.props.phone}</div>
        <div className='td'>
          <button className='editButton'><img src={pen} alt='edit participant' onClick={this.toggleEditing}/></button>
          <button className='removeButton'><img src={trash_can} alt='remove participant' onClick={this.removeParticipant}/></button>
        </div>
      </div>
    )
  }
}

export default Participant
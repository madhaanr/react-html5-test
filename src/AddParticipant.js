import React, { Component } from 'react'

import './AddParticipant.css'

class AddParticipant extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addParticipant = this.addParticipant.bind(this)
    this.state = { name: '', email: '', phone: '', isEnabled: false }
  }
  static propTypes = {
    addParticipant: React.PropTypes.func.isRequired
  }
  handleChange(event) {
    event.preventDefault()
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }
  addParticipant(event) {
    event.preventDefault()
    this.props.addParticipant({
      id: this.randomId(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    })
    this.setState({ name: '', email: '', phone: ''})
  }
  
  randomId() {
    return "e" + Math.random().toString(36).substr(2, 10)
  }
  render() {
    return (
      <div className="addParticipant">
        <form className='addForm' onSubmit={this.addParticipant}>
          <input className='addInput'
            type="text"
            name="name"
            placeholder="Full name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <input className='addInput'
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <input className='addInput'
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={this.handleChange}
            value={this.state.phone}
            required
          />
          <input className='addSubmit' type="submit" value="Add new" />
        </form>
      </div>
    )
  }
}

export default AddParticipant
import React, { Component } from 'react'

class AddParticipant extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', phone: '' }
    this.handleChange = this.handleChange.bind(this)
    this.addParticipant = this.addParticipant.bind(this)
  }
  handleChange(event) {
    event.preventDefault()
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }
  addParticipant(event) {
    event.preventDefault()
    this.props.addParticipant({id:"asdfsf2",
                               name:this.state.name,
                               email:this.state.email,
                               phone:this.state.phone
                              })
    this.setState({ name: '', email: '', phone: '' })
  }
  render() {
    return (
      <div className="AddParticipant">
        <form onSubmit={this.addParticipant}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddParticipant
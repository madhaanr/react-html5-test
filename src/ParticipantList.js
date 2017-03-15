import React, { Component } from 'react'

import './ParticipantList.css'
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
    this.sortByColumn = this.sortByColumn.bind(this)
    this.state = {
      participants: [
        { id: "12sfs", name: "Gero Nimo", email: "Geronimo@a.com", phone: "0507654327" },
        { id: "12sf3", name: "Eric Von Lustbaders", email: "evl@b.com", phone: "0509889444" },
        { id: "12sf2", name: "Steven Collins", email: "steve@ds.com", phone: "0501234567" },
        { id: "12fgs", name: "Ronald MacRonald", email: "ronald2012@gmail.com", phone: "0501239567" },
        { id: "12sf223", name: "Steven Coll", email: "stevec@ads.com", phone: "0201234567" },
        { id: "12sf23z2", name: "Jermy Monford", email: "jermy@gmail.com", phone: "0401234567" },
        { id: "12sfss2", name: "Palo Alto", email: "pa@abcd.com", phone: "050123567" },
        { id: "1s2sfd2", name: "Gerald Told", email: "gerry@gmail.com", phone: "0501234567" },
        { id: "12sfasda2", name: "Great Appelson", email: "great232312@gmail.com", phone: "0501234567" },
        { id: "12sf223423", name: "Steve Collins", email: "stevecc@gmail.com", phone: "0501234567" },
        { id: "12sfffssdf2", name: "Hemmi Hemmonen", email: "hemmi@gmail.com", phone: "0501234567" },
        { id: "12sfwerew2", name: "Ernest Young", email: "erny@ds.com", phone: "0801234567" },
        { id: "12sf2322", name: "Vodafone India", email: "india2323@ds.com", phone: "0901234567" },
        { id: "12sf2r2", name: "Helen Myers", email: "helen13234324@hotmail.com", phone: "0701234567" },
        { id: "12sfggsdfs2", name: "Susan Sand", email: "susie22434@gmail.com", phone: "0301234567" },
        { id: "125sfsfaf2", name: "Miss Time", email: "miss@time.com", phone: "0501234567" },
        { id: "121sfafa2", name: "Huppe Jumppeli", email: "huppe@huppeli.fi", phone: "0501234567" },
        { id: "123sffff2", name: "Arnold Swarts", email: "arnold@gov.org", phone: "0501234567" },
        { id: "12sssf2", name: "Tiralyn Doods", email: "td@ds.com", phone: "0501234567" },
        { id: "12ss23sf2", name: "Tiralyn Doods", email: "td@ds.com", phone: "0501234567" },
      ],
      editing: '',
      order: {
        name: '\u2195',
        email: '\u2195',
        phone: '\u2195'
      }
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
  sortByColumn(e) {
    const column = e.target.id
    const copy = this.state.participants
    const orderCopy = this.state.order
    const direction = orderCopy[column]
    if (copy.length === 0) {
      return
    }
    if (direction === '\u2191' || direction === '\u2195') {
      copy.sort((a, b) => {
        if (a[column].toLowerCase() > b[column].toLowerCase()) {
          return 1;
        }
        return -1;
      })
      orderCopy[column] = '\u2193'
    } else {
      orderCopy[column] = '\u2191'
      copy.reverse()
    }
    for (const item in orderCopy) {
      if (item !== column) {
        orderCopy[item] = '\u2195'
      }
    }
    this.setState({ participants: copy, order: orderCopy });
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
  render() {
    return (
      <div>
        <div className='AddParticipant'>
          <AddParticipant addParticipant={this.addParticipant} />
        </div>
        <div className='table ParticipantList'>
          <div className='tr tableHeader'>
            <div id='name' onClick={this.sortByColumn} className='th'>Name &nbsp;{this.state.order.name}</div>
            <div id='email' onClick={this.sortByColumn} className='th'>E-mail address &nbsp;{this.state.order.email}</div>
            <div id='phone' onClick={this.sortByColumn} className='th'>Phone number &nbsp;{this.state.order.phone}</div>
            <div className='th'>
            </div>
          </div>
          {this.renderParticipants()}
        </div>
      </div>
    )
  }
}

export default ParticipantList
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHabit } from '../actions/habitActions';

class HabitModal extends Component {

  state = {
    name: '',
    positive: true,
    maxFrequency: 0
  }

  handleClick = () => {
    this.props.handleModal()
  }

  handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({ positive: !this.state.positive })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createHabit(this.state)
    this.props.handleModal()
  }

  render() {

    return (
      <div className="modal-container">
        <div className="modal-content">
        <button className="close-modal" onClick={this.handleClick}>x</button>
          <h1>NEW HABIT</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="name input"><label> name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> </label></div>
              <div className="positive input"><label> is this a habit you want to stop? : <input name="positive" type="checkbox" checked={!this.state.positive} onChange={this.handleChange} /> </label> </div>
              <div className="maxFrequency input">
              {
                this.state.positive ?
                ( <label>
                  daily frequency:
                  <input type="number" name="maxFrequency" value={this.state.maxFrequency} onChange={this.handleChange} />
                </label> ) : null
              }
              </div>
              <input className="submit-btn" type="submit" value="Submit"/>
            </form>
        </div>
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    habits: state.currentUser.habits,
  }
}

const mapDispatchToProps = {
  createHabit: createHabit,
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitModal)

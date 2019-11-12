import React, { useState } from 'react';
import { connect } from 'react-redux';
import Habit from '../components/Habit';
import HabitModal from '../components/HabitModal'
import '../style/Habits.scss';
import '../style/HabitModal.scss';

const Habits = ({ userHabits }) => {

  const [show, setShow] = useState(false)

  const handleModal = () => {
    setShow(!show)
  }

  const generateHabits = () => {
    if (userHabits){
    return userHabits.map(habit => {
      const percent = habit.habit.maxFrequency === 0 ? 100 : (habit.progress_count / habit.habit.maxFrequency)*100
      return <Habit key={habit.id} {...habit} percent={percent}/>
      })
  }}
    return (
      <div className="habits-container">
      <h1>HABITS</h1>
      <button className="btn" onClick={handleModal}>+</button>
      {show ? <HabitModal show={show} handleModal={handleModal} /> : null}
        <div className="habits-ul">
          {generateHabits()}
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    userHabits: state.currentUser.habits
  }
}

export default connect(mapStateToProps)(Habits)

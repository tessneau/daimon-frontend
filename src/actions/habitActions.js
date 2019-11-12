// export const getCurrentHabits = (userId) => dispatch => {
//   dispatch({ type: "CREATE_HABIT_START" });
//
//   return fetch(`https://daimon-backend.herokuapp.com/users/${userId}/habits`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': localStorage.token
//     }
//   })
//     .then(res => res.json())
//     .then(habits => {
//       dispatch({ type: "GET_CURRENT_HABITS_SUCCESS", habits: habits });
//     })
//     .catch(error => {
//       dispatch({ type: "GET_HABITS_FAILURE", error: error });
//     });
// };

export const createHabit = (habitInformation={}) => dispatch => {
  dispatch({ type: "CREATE_HABIT_START" });
  const url = `https://daimon-backend.herokuapp.com/habits`
  return fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(habitInformation)
  })
    .then(res => res.json())
    .then(habit => {
      dispatch({ type: "CREATE_HABIT_SUCCESS", habit: habit });
    })
    .catch(error => {
      dispatch({ type: "CREATE_HABIT_FAILURE", error: error });
    });
};

export const updateHabitProgress = userHabitId => dispatch => {
  dispatch({ type: "UPDATE_HABIT_START" });
  const url = `https://daimon-backend.herokuapp.com/user_habits/${userHabitId}`
  return fetch(url, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: localStorage.token
    },
  })
    .then(res => res.json())
    .then(habit => {
      dispatch({ type: "UPDATE_HABIT_SUCCESS", habit: habit });
    })
    .catch(error => {
      dispatch({ type: "UPDATE_HABIT_FAILURE", error: error });
    });
};

export const deleteHabit = (userHabitId) => dispatch => {
  dispatch({ type: "DELETE_HABIT_START" });
  const url = `https://daimon-backend.herokuapp.com/user_habits/${userHabitId}`
  return fetch(url, {
    method: "DELETE",
    headers: {
      'Authorization': localStorage.token
    }
  })
    .then(() =>{
      dispatch({ type: "DELETE_HABIT_SUCCESS", id: userHabitId });
      })
    .catch(error => {
      dispatch({ type: "DELETE_HABIT_FAILURE", error: error });
    });
};

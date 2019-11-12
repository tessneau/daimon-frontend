// import {
//   getCategoriesStart,
//   getCategoriesSuccess,
//   getCategoriesFailure
// } from "./actionCreators";

export const getCategories = () => dispatch => {
  dispatch({ type: "GET_CATEGORIES_START" });
  const url = "https://daimon-backend.herokuapp.com/categories"
  return fetch(url, {
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(categories => {
      dispatch({ type: "GET_CATEGORIES_SUCCESS", categories: categories });
    })
    .catch(error => {
      dispatch({ type: "GET_CATEGORIES_FAILURE", error: error });
    });
};

export const setCurrentCategory = (category={}) => dispatch => {
  dispatch({ type: "SET_CURRENT_CATEGORY_SUCCESS", category: category });
};

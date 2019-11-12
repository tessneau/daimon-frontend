export const pinPost = id => dispatch => {
  dispatch({ type: "POST_PIN_START" });
  const url = `https://daimon-backend.herokuapp.com/posts/${id}/pins`
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(post => {
      dispatch({ type: "POST_PIN_SUCCESS", post: post });
    })
    .catch(error => {
      dispatch({ type: "POST_PIN_FAILURE", error: error });
    });
};

export const branchPost = id => dispatch => {
  const url = `https://daimon-backend.herokuapp.com/posts/${id}/branches`
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(res => res.json())
    .then(post => {
      dispatch({ type: "CREATE_BRANCH_SUCCESS", post: post });
    })
    .catch(error => {
      debugger
      dispatch({ type: "CREATE_BRANCH_FAILURE", error: error });
    });
};

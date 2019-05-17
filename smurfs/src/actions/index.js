import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs/')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
    });
};

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_START });
  axios
    .post('http://localhost:3333/smurfs/', smurf)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, payload: err });
    });
};

export const DEL_START = 'DEL_START';
export const DEL_SUCCESS = 'DEL_SUCCESS';
export const DEL_FAILURE = 'DEL_FAILURE';
export const deleteSmurf = id => dispatch => {
  dispatch({ type: DEL_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, payload: err });
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

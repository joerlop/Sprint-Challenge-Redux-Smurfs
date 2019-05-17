import { 
  FETCH_SMURFS_START, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAILURE } from "../actions"

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""  
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
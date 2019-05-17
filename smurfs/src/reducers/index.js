import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_FAILURE,
  ADD_START,
  ADD_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
};

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
        error: action.payload.response.data.Error
      };
    case ADD_START:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        addingSmurf: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: [...action.payload]
      };
    case ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload.response.data.Error
      };
    default:
      return state;
  }
};

export default rootReducer;

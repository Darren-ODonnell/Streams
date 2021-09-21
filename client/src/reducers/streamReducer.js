import { EDIT_STREAM, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM} from "../actions/types";
import _ from 'lodash';

export const streamReducer = (state = {}, action) => {
  switch(action.type){
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case DELETE_STREAM:
      //omit creates a new object so no need for ...state
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
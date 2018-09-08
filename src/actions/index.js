import { SAVE_COMMENT, FETCH_COMMENTS } from './types';
import Axios from 'axios';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  return dispatch => {
    Axios.get('http://jsonplaceholder.typicode.com/comments').then(comments =>
      dispatch({ type: FETCH_COMMENTS, payload: comments })
    );
  };
};

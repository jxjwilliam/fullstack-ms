import { HEADERS } from '../../constants'
import {ADD_USER, GET_USER, GET_USERS, UPDATE_USER, DELETE_USER,} from '../ActionTypes'

const getHeader = token => ({
  headers: {
    ...HEADERS,
    "x-access-token": token
  }
});

/**
 * USER = ACCOUNT
 * fully CRUD implementation
 */

// 1. C
const addUser = payload => ({type: ADD_USER, payload});

export const addUserAction = (token) => dispatch => {
  const options = {
    method: 'POST',
    ...getHeader(token),
  }

  return fetch("/api/users", options)
    .then(res => res.json())
    .then(data => dispatch(addUser(data)))
    .catch(e => console.error(e))
}


// 2. R
const getUser = payload => ({type: GET_USER, payload});
const getUsers = payload => ({type: GET_USERS, payload});

export const getUserAction = (token) => dispatch => {
  const options = {
    method: 'GET',
    ...getHeader(token),
  }

  return fetch("/api/user/:id", options)
    .then(res => res.json())
    .then(data => dispatch(getUser(data)))
    .catch(e => console.error(e))
}

export const getUsersAction = (token) => dispatch => {
  const options = {
    method: 'GET',
    ...getHeader(token),
  };

  return fetch("/api/users", options)
    .then(res => res.json())
    .then(data => dispatch(getUsers(data)))
    .catch(e => console.error(e))
};


// 3. U
const updateUser = payload => ({type: UPDATE_USER, payload});

export const updateUserAction = (form_data, token) => dispatch => {
  const options = {
    method: "PUT",
    ...getHeader(token),
    body: JSON.stringify(form_data)
  }

  return fetch("/api/users", options)
    .then(res => res.json())
    .then(data => dispatch(updateUser(form_data)))
    .catch(e => console.error(e))
};


// 4. D
const deleteUser = payload => ({type: DELETE_USER, payload});

export const deleteUserAction = (id, token) => dispatch => {
  const options = {
    method: "DELETE",
    ...getHeader(token),
    body: `did=${id}`
  };

  return fetch("/api/users", options)
    .then(res => res.json())
    .then(data => dispatch(deleteUser()))
    .catch(e => console.error(e))
};

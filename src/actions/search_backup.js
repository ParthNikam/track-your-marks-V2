// import * as api from '../api';
const db = require('../db/USERS.users.json');


export const searchUsers = (query) => async (dispatch) => {
  try {
    
    const data = db.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.class.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


export const getUserById = (query) => async (dispatch) => {
  try {
    const data = db.find(user => user._id.$oid === query);
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};




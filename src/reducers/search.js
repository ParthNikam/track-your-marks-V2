// reducers/search.js
const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        searchResults: action.payload,
      };
    // Add more cases for other search-related actions if needed
    default:
      return state;
  }
};

export default searchReducer;

import React from 'react';
import { useSelector } from 'react-redux';



function UserList() {
  // Use useSelector to access the searchResults from your Redux store
  const searchResults = useSelector((state) => state.search.searchResults);
  
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map(user => {
          return (
            <li key={user._id}>{user.name}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;

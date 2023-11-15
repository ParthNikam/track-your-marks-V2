import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchUsers } from "../actions/search_backup";
import { TextField, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./SearchBarStyle"; // Import your custom styles



function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = useStyles(); // Apply custom styles

  // Function to handle search logic
  const handleSearch = () => {
    if (searchQuery) {
      dispatch(searchUsers(searchQuery)).then((data) => {
        if (data) {
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    // Delay the API request to avoid making too many requests while typing
    const delayTimer = setTimeout(handleSearch, 200);

    // Cleanup the timer if the searchQuery changes before the timer finishes
    return () => clearTimeout(delayTimer);
  }, [searchQuery, dispatch]); // Include searchQuery and dispatch as dependencies

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUserClick = (userId) => {
    // navigate(`/${userId.$oid}`);
    const currentPath = window.location.pathname;

    // Check if the user is already on the details page
    if (currentPath !== `/${userId.$oid}`) {
      navigate(`/${userId.$oid}`);
    }
  };

  return (
    
    <Paper className={classes.searchContainer}>
      <TextField
        type="text"
        placeholder="Search by name/class..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        fullWidth
        variant="outlined"
        className={classes.searchInput}
        InputProps={{
          endAdornment: (
            <SearchIcon
              className={classes.searchIcon}
              onClick={() => handleSearch()}
            />
          ),
        }}
      />
      <List className={`${classes.userList} ${searchResults.length > 0 ? classes.userListVisible : ""}`}>
        {searchResults.map((user) => (
          <ListItem
            key={user._id}
            onClick={() => handleUserClick(user._id)}
            className={classes.userListItem}
          >
            <ListItemText key={user._id} primary={user.name} secondary={user.class} />
          </ListItem>
        ))}
      </List>

    </Paper>


  );
}

export default SearchBar;

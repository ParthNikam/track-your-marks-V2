import { makeStyles } from "@material-ui/core/styles";

const lightModePalette = {
  background: "#ffffff",       // Light background
  searchBarBackground: "#93B1A6", // Light search bar background
};

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    position: "relative",
    borderRadius: "50px",
    background: lightModePalette.searchBarBackground, // Light background color for search bar
  },
  searchInput: {
    width: "100%",
    borderRadius: "50px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", // Make borders transparent
      },
    },
    "& .MuiInputBase-input": {
      // color: darkModePalette.background, // Dark text color
    },
  },
  searchIcon: {
    cursor: "pointer",
  },
  userList: {
    opacity: 0,
    transform: "translateY(-10px)", // Start offscreen
    transition: "opacity 0.2s ease-in, transform 0.2s ease-in", // Smooth transitions
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    top: "120%",
    left: 0,
    width: "100%",
    background: "#F0F0F0", // Lighter background color for user list
    color: "#183D3D", // Text color remains the same
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow
  },
  userListVisible: {
    opacity: 1,
    transform: "translateY(0)", // Bring it down
  },
  userListItem: {
    fontFamily: "Roboto",
    cursor: "pointer",
    
    "&:hover": {
      color: lightModePalette.searchBarBackground, // Light text color on hover
      background: lightModePalette.background, // Light background color on hover
    },
  },
}));

export default useStyles;

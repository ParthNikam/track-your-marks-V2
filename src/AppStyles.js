import { makeStyles } from "@material-ui/core/styles";

const darkThemePalette = {
  primary: "#040D12",      // Dark background
  secondary: "#183D3D",    // Dark secondary background
  tertiary: "#5C8374",    // Dark accents
  quaternary: "#93B1A6",   // Light text
};

const useStyles = makeStyles((theme) => ({
  
  container: {
    marginTop: "20vh",
  },
  card: {
    maxWidth: "400px",
    border: "none",
    borderColor: "transparent",
  },
  titleContainer: {
    textAlign: "center",
    position: "absolute",
    top: "8vh", // Place the title at the top of the page
    left: "50%",
    transform: "translateX(-50%)", // Center horizontally
    width: "100%",
  },
  title: {
    margin: "0", // Remove margin
    fontSize: "3rem",
    fontFamily: "'Roboto', sans-serif", // Apply custom font-family
    fontWeight: "bold", // Apply custom font-weight
    color: "#028786", // Set the title color
  },
  subtitle: {
    margin: "0", // Remove margin
    fontFamily: "'Helvetica Neue', sans-serif", // Apply custom font-family
    fontWeight: "light", // Apply custom font-weight
    color: "#028786", // Set the title color
    opacity: "60%"
  },

  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    color: darkThemePalette.quaternary,
    padding: "10px 0",
    textAlign: "center",
    backdropFilter: "blur(0.1px)", /* Adjust the blur amount as needed */
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
}));

// document.body.style.backgroundColor = darkThemePalette.primary;

export default useStyles;


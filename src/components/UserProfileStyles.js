import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    color: "#93B1A6", // Light text color
  },
  titleContainer: {
    width: "100%", // Default to 100% for mobile view
    marginBottom: "20px",
    display: "inline-block",
  },
  graphContainer: {
    width: "100%", // Default to 100% for mobile view
  },
  userName: {
    textTransform: "capitalize",
    fontSize: "2rem",
    textAlign: "left",
    marginBottom: "5px",
    display: "inline-block",
    color: "#31B1A6", // Light text color
  },
  userClass: {
    fontSize: "1rem",
    display: "inline-block",
    marginLeft: "10px",
    color: "#31B1A6", // Dark accents
  },
  "@media (min-width: 768px)": {
    titleContainer: {
      width: "60%", // Adjust to 60% for screens wider than 768px
    },
    graphContainer: {
      width: "80%", // Adjust to 80% for screens wider than 768px
    },
  },
  footer: {
    position: "relative",
    bottom: "0",
    left: "0",
    right: "0",
    color: "#333",
    textAlign: "center",
    padding: "10px",
  }
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const darkThemePalette = {
  primary: "#040D12",      // Dark background
  secondary: "#183D3D",    // Dark secondary background
  tertiary: "#5C8374",    // Dark accents
  quaternary: "#93B1A6",   // Light text
};

const GraphStyles = makeStyles((theme) => ({
  graphCard: {
    marginBottom: theme.spacing(2), // Add spacing between each graph card
    color: darkThemePalette.quaternary, // Light text color

    transition: "transform 0.3s, box-shadow 0.3s", // Apply transitions
    transform: "translateY(0)", // Start from a lower position
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
  },
  graphTitle: {
    marginBottom: theme.spacing(1), // Add spacing below graph titles
    color: darkThemePalette.tertiary, // Set the title text color
  },
}));


export default GraphStyles;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Card } from "react-bootstrap"; // Import React Bootstrap components
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import useStyles from "./AppStyles"; 


function App() {
  const classes = useStyles(); 

  return (
    <Router>
      <Container className={classes.container}> {/* Apply the container style */}
        <h1 className="text-center mb-4">User Search</h1>

        <Routes>
          {/* Route for the search page */}
          <Route
            path="/"
            element={
              <Card className={`mx-auto ${classes.card}`}> {/* Apply the card style */}
                <Card.Body>
                  <SearchBar />
                </Card.Body>
              </Card>
            }
          />
          <Route
            path="/"
            element={
              <Card className="mx-auto mt-4" style={{ maxWidth: "400px" }}>
                <Card.Body>
                  <UserList />
                </Card.Body>
              </Card>
            }
          />

          {/* Route for displaying user profiles */}
          <Route path="/profile/:userId" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

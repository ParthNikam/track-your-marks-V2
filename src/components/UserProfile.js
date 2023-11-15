import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "../actions/search_backup";
import Graph from "./Graph"; // Import the Graph component
import useStyles from "./UserProfileStyles"; // Import your custom styles

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = React.useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Fetch user data by ID
    const fetchUserData = async () => {
      try {
        const data = await dispatch(getUserById(userId));
        if (data) {
          setUserData(data);
        } else {
          setUserData([]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the async function
    fetchUserData();
  }, [userId, dispatch]);

  const classes = useStyles(); // Apply custom styles
  // Render loading state or the Graph component based on userData
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.userName}>{userData?.name}</h1>
        <h4 className={classes.userClass}>Class: {userData?.class}</h4>
      </div>

      {userData ? (
        <div className={classes.graphContainer}>
          <Graph userData={userData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <br/>
      <br/>

    </div>
    
  );
}

export default UserProfile;

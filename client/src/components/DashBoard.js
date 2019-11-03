import React, { useState } from "react";
import Button from "@material-ui/core/Button";

//Import firebase
const firebase = require("firebase/app");
require("firebase/auth");

const DashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user.displayName);
      setIsLoading(false);
    }
  });

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Welcome {currentUser}!</h1>
        </div>
      )}
    </div>
  );
};

export default DashBoard;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";

//import axios from 'axios';

//Need logic for adding totals
//Need endpoint to grab grant totals given to each user

const useStyles = makeStyles(theme => ({
  container: {
    height: "50%",
    width: "80%"
  },
  number: {
    fontSize: "15px",
    padding: "0px 30px"
  },
  divide: {
    display: "flex",
    padding: "10px"
  }
}));

const TotalReceived = props => {
  const { className, ...rest } = props;

  //Add logic/endpoints
  const [totalReceived, setTotalReceived] = useState([]);

  //axios call

  //fix endpoint and setTotalReceived

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/api/grants/`)
  //     .then(res => {
  //       console.log(res);
  //       setTotalReceived(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //     })
  // }, [])

  const classes = useStyles();

  // if ((totalReceived = undefined)) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <Container className={classes.container}>
      <Card>
        <h2>Total Applications Received</h2>
        <div className={classes.divide}>
          <img src="images/icons/ClipBoardCheck.svg" alt="clipboard icon" />
          <h2 className={classes.number}>
            You haven't received any applications!
          </h2>
        </div>
      </Card>
    </Container>
  );
};
// };

export default TotalReceived;

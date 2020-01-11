import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0F0F7",
    boxShadow: "none"
  },
  avatar: {
    height: 100,
    width: 100
  },
  image: {
    height: "80px",
    width: "80px"
  },
  name: {
    fontWeight: "bold"
  }
}));

const ProfileBox = props => {
  const classes = useStyles();

  const [values, setValues] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/users/${id}`)
      .then(res => {
        console.log(res.data);
        setValues(res.data.accountData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // setValues(userResult.data.accountData);

  console.log(values);

  const user = values[0];

  // const user = {
  //   name: "Claire Sinozich",
  //   company: "The Company",
  //   avatar: "/images/avatars/headshot.jpg"
  // };
  //
  // <Avatar src={values[0].avatar} className={classes.image} />

  if (user === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Card className={classes.root}>
        <CardContent>
          <AccountCircleIcon className={classes.avatar} />
          <Typography className={classes.name}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography>{user.organization_name}</Typography>
        </CardContent>
      </Card>
    );
  }
};

export default ProfileBox;

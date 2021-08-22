import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Description from '../components/Profile/Description';
import { Profile } from '../components/Profile/Profile';
import Showcase from '../components/Showcase/Showcase';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      background: 'lightgrey',
    },
    profileImg: {
      height: 200,
      width: 200,
    },
  })
);

const Homepage = (props: Props) => {
  const classes = useStyles();

  return (
    // <Grid container>
    //   <Profile />
    //   <Description />
    //   <Showcase />
    // </Grid>
    <div>
      Hello
    </div>
  );
};

export default Homepage;

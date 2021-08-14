import { Avatar, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import profileImg from '../../static/images/profile.jpg';
import React from 'react';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      background: 'lightgrey',
    },
    profileImg: {
      height: '10vw',
      width: '10vw',
      [theme.breakpoints.down('md')]: {
        height: '25vw',
        width: '25vw',
      },
    },
    name: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  })
);

export const Profile = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Avatar
          className={classes.profileImg}
          alt="Remy Sharp"
          src={profileImg}
        />
      </Grid>
    </Grid>
  );
};

import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    name: {
      fontSize: theme.spacing(6),
      fontWeight: theme.typography.fontWeightLight,
      fontFamily: 'Roboto',
      [theme.breakpoints.down('md')]: {
        fontWeight: theme.typography.fontWeightBold,

        fontSize: theme.spacing(3),
      },
    },
    builder: {
      fontSize: theme.spacing(3),
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: 'Roboto',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.spacing(1.5),
      },
    },
    flutter: {
      fontSize: theme.spacing(3),
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: 'sans-serif',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.spacing(1.5),
      },
    },
  })
);

const Description = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.name}>Mahbubur Rahman</Typography>
      <Typography className={classes.builder}>Application Builder</Typography>
      <Typography className={classes.flutter}>Flutter Developer</Typography>
    </Grid>
  );
};

export default Description;

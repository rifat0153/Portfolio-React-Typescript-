import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import app11 from '../../static/images/app1_1.png';
import app12 from '../../static/images/app1_2.png';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#D3D3D3',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 80,
      paddingBottom: 80,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      clipPath: 'polygon(0 0, 100% 5%, 100% 95%, 0% 100%)',
      [theme.breakpoints.down('sm')]: {
        clipPath: 'polygon(0 0, 100% 2%, 100% 98%, 0% 100%)',
        paddingTop: 50,
        paddingBottom: 0,
      },
    },
    appImg: {
      height: 400,
      aspectRatio: '.5',
      margin: 20,
      borderRadius: 20,
    },
  })
);

const Showcase = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <AppGrid img1={app11} img2={app12} />
      </Grid>
    </Grid>
  );
};

export default Showcase;

interface AppProps {
  img1: string;
  img2: string;
}

export const AppGrid = (props: AppProps) => {
  const classes = useStyles();

  return (
    <div>
      <img src={props.img1} alt={props.img1} className={classes.appImg} />
      <img src={props.img2} alt={props.img2} className={classes.appImg} />
    </div>
  );
};

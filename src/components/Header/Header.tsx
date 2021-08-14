import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      color: 'black',
      background: 'transparent',
      elevation: 0,
      boxShadow: 'none',
    },
    toolbar: {
      justifyContent: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(0),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    menuSection: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(20)
      },
    },
    link: {
      color: 'black',
      underline: 'none',
      textDecoration: 'none',
    },
    linkButton: {
      [theme.breakpoints.only('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.only('xs')]: {
        display: 'none',
      },
      marginRight: theme.spacing(8),
      color: 'black',
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appbar} >

        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Mahbubur Rahman
            </Link>
          </Typography>

        
            <Typography variant="h6" className={classes.linkButton}>
              <Link to="/work" className={classes.link}>
                Work
              </Link>
            </Typography>

          
            <Typography variant="h6" className={classes.linkButton}>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </Typography>
          

            <Typography variant="h6" className={classes.linkButton}>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </Typography>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}> <Link to='/work' className={classes.link} >Work</Link>   </MenuItem>
            <MenuItem onClick={handleClose}><Link to='/about' className={classes.link}>About</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/contact' className={classes.link}>Contact</Link></MenuItem>
          </Menu>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  );
}

import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import Home from './components/Home';
import AppStore from './components/AppStore';
import Expenses from './components/Expenses';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import SaveIcon from '@material-ui/icons/Save';
import UserProfile from './components/UserProfile';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appbarroot: {
        boxShadow: "none",
        backgroundColor: "#cccccc" 
      } ,
   
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function NewNavbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [btnNum, setBtnNum] = useState(1)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div>
            <div className={classes.grow}>
                <AppBar className={classes.appbarroot}  position="static">
                    <Toolbar>
                      
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Button onClick={() => { setBtnNum(1) }}>Home</Button>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Button onClick={() => {
                                console.log("Meteor login id", Meteor.userId())
                                setBtnNum(2)
                            }}>Expenses</Button>
                        </Typography>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Button onClick={() => { setBtnNum(3) }}>App Store</Button>
                        </Typography>

                        <Typography className={classes.title} variant="h6" noWrap>
                            <Button onClick={() => { setBtnNum(4) }}>UserProfile</Button>
                        </Typography>
                       
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                          
                         
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.button}
                                onClick={() => {
                                    console.log("ddd")
                                    Meteor.logout()
                                }}
                                startIcon={<ExitToAppIcon />}
                            >
                                Logout
      </Button>
                           
                        </div>
                       
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
            
            {btnNum === 1 ? <Home /> : ""}
            {btnNum === 2 ? <Expenses /> : ""}
            {btnNum === 3 ? <AppStore /> : ""}
            {btnNum === 4 ? <UserProfile /> : ""}

        </div>
    );
}

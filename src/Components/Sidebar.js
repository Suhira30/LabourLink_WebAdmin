import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Avatar from '@mui/material/Avatar';
import imglogo from '../Img/app-logo.png';
import { Link } from 'react-router-dom';

const drawerWidth = 280;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
   
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: `linear-gradient(90deg,  rgba(252, 177, 112, 0.9) 50%,rgba(255, 141, 41, 1) 70%)`,
  height: '100px',
  width:'100%',
  justifyContent: 'center',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const Sidebar =  ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleItemClick = (route) => {
    navigate(route);
  };
  


  const handleNotificationClick = () => {
    handleItemClick('/notification');
  };
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
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
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    {/*------------------------Messages----------------------------------------------------------*/}
    
      <MenuItem onClick={() => handleItemClick('/Review')}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
            <Badge badgeContent={4} color="error">
            <MailOutlinedIcon />
            </Badge>
          </IconButton>
        <p>Messages</p>
      </MenuItem>
    
      {/*------------------------Notifications----------------------------------------------------------*/}
      <MenuItem onClick={() => handleItemClick('/notification')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
           // Call handleNotificationClick on click
        >
          <Badge badgeContent={17} color="error">
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

  
      {/*------------------------Setting----------------------------------------------------------*/}
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="show 3 Setting alert"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
            <SettingsOutlinedIcon/>
          </Badge>
        </IconButton>
        <p>Setting</p>
      </MenuItem>

      {/*------------------------Profile----------------------------------------------------------*/}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
          // left drawer icon -------------------------------
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={imglogo} alt="logo" 
           style={{ width: '80px', height: '80px',marginLeft:'10px' }} 
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' },
            marginLeft: '10px',
            color: 'black'  }}
          >
            LABOR LINK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Here ...."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box style={{ display: 'flex', alignItems: 'center', marginRight:"30px"}}>
          {/*------------------------Messages-f---------------------------------------------------------*/}
          <MenuItem component={Link} to="/Review"
           sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
            <IconButton size="large" 
            aria-label="show 4 new mails" 
            color="inherit" 
            sx={{ padding:'0'}}>
              <Badge badgeContent={4} color="error">
              <MailOutlinedIcon />
              </Badge>
            </IconButton>
            </MenuItem>
          {/*------------------------Notifications-f---------------------------------------------------------*/}
          <MenuItem component={Link} to="/notification"
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ padding:'0' }}
               >
              <Badge badgeContent={17} color="error">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            </MenuItem>
         
            {/*------------------------setting-f---------------------------------------------------------*/}
            <MenuItem component={Link} to="/setting-page"
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
           
          }}>
            <IconButton
              size="large"
              aria-label="show 3 setting alert"
              color="inherit" 
              sx={{ padding:'0' }}>
              <Badge badgeContent={3} color="error">
                <SettingsOutlinedIcon />
              </Badge>
            </IconButton>  </MenuItem>
       </Box>
            {/*------------------------profile-f----------------------------------------------------------*/}
            <Typography>
  <p style={{ marginBottom: 0 }}>Hello,</p>
  <h3 style={{ marginTop: 0 }}>Sharadha</h3>
</Typography>
           
           <Box sx={{ display: 'flex', gap: 2, alignItems: 'center',marginLeft:"10px" }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            //3 dots --------
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
      
        <List>
          {['Dashboard', 'Appointment', 'User detail', 'Job detail','Review','Notification','Log out'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => handleItemClick(`/${text.toLowerCase().replace(' ', '-')}`)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(252, 177, 112, 0.9)', 
                borderRadius: '10px',
                width:'270px',
                marginLeft:'20px'
              },
            
            }} >
              
              <ListItemButton>
              <ListItemIcon>
          {index === 0 && <HomeOutlinedIcon />}
          {index === 1 && < WorkOutlineOutlinedIcon/>}
          {index === 2 && <PersonOutlineOutlinedIcon />}
          {index === 3 && <WorkOutlineOutlinedIcon />}
          {index === 4 && <RateReviewOutlinedIcon  />}
          {index === 5 && <NotificationsNoneOutlinedIcon />}
         {/* {index === 6 && <DateRangeOutlinedIcon/>}*/}
          {/*{index === 7 && <SmsOutlinedIcon />}*/}
          {index === 6 && <LogoutOutlinedIcon />}
        </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      
        {children}
      </Main>
    </Box>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from 'react-router-dom';
import userService from '../Pages/Service/userService';
import imglogo from '../Img/app-logo.png';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LaborLink from "../Img/Labor Link.png";
import LaborLink2 from "../Img/Labor Link2.png";

const drawerWidth = 280;

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
  background: `linear-gradient(90deg, rgba(252, 177, 112, 0.9) 50%, rgba(255, 141, 41, 1) 70%)`,
  height: '100px',
  width: '100%',
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

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  
  const handleItemClick = (route) => {
    setSelectedItem(route);
    if (route === 'logout') {
      localStorage.removeItem('token');
      navigate('/logout'); 
    } else {
      navigate(route);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userService.fetchProfileName();
        setUserProfile(response);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
    >
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <img src={imglogo} alt="logo" style={{ width: '80px', height: '80px', marginLeft: '10px' }} />
          <img src={LaborLink2} alt="logo" style={{ width: '300px', height: '40px', marginLeft: '25px' ,marginTop:"15px"}} />

          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '10px', color: 'black' }}
          >
            Labor 
            <Box component="span" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'orange' }}>Link</Box>
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box style={{ display: 'flex', alignItems: 'center', marginRight: "30px" }}>
              <Typography>
                <p style={{ marginBottom: 0 }}>Hello,</p>
                <p style={{ marginTop: 0, fontStyle: "italic" }}>{userProfile.name}</p>
              </Typography>
              <MenuItem
                component={Link}
                to="/logout"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              >
                <IconButton size="large" color="inherit" sx={{ padding: '0', marginLeft: "10px" }}>
                  <Badge color="error"><LogoutOutlinedIcon /></Badge>
                </IconButton>
              </MenuItem>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List sx={{ padding: 0,marginLeft:"12px", marginTop:"-20px",textAlign: "center", alignItems: "center", justifyContent: "center" }}>
          {['Dashboard', 'Bookings', 'User detail', 'Job detail', 'Review', 'Notification', 'Report', 'Mail', 'Log out'].map((text, index) => {
            const route = `/${text.toLowerCase().replace(' ', '-')}`;
            return (
              <ListItem
                key={text}
                disablePadding
                onClick={() => handleItemClick(route)}
                sx={{
                  marginTop:"6px",
                  '&:hover': {
                    backgroundColor: 'rgba(252, 177, 112, 0.9)',
                    borderRadius: '0px',
                    width: 'auto',
                    marginLeft: '20px',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                  },
                  backgroundColor: selectedItem === route ? 'rgba(252, 177, 112, 0.9)' : 'inherit'
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeOutlinedIcon />}
                    {index === 1 && <Groups3OutlinedIcon />}
                    {index === 2 && <PersonOutlineOutlinedIcon />}
                    {index === 3 && <WorkOutlineOutlinedIcon />}
                    {index === 4 && <RateReviewOutlinedIcon />}
                    {index === 5 && <NotificationsNoneOutlinedIcon />}
                    {index === 6 && <ReportProblemOutlinedIcon />}
                    {index === 7 && <MailOutlinedIcon />}
                    {index === 8 && <LogoutOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
};

export default Sidebar;

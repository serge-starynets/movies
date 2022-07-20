import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';

import SidebarMenu from './SidebarMenu/SidebarMenu';


function TopBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <Box>
    <AppBar position="static">
      <Toolbar>
        <Hidden only={['lg', 'xl']}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        </Hidden>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <SidebarMenu />
        </Drawer>
  </Box>
  )
}

export default TopBar;
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <NavLink to={"/"}>Dashboard</NavLink>
            <NavLink to={"/ice-creams"} style={{ marginLeft: 20 }}>Item List</NavLink>
          </div>
          <Typography>Welcome</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

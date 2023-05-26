import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from "../Navbar/index.module.css"

const drawerWidth = 240;
const navItems = [
    { label: "HOME", path: "" },
    { label: "ADD GYM", path: "addgym" },
    { label: "WE OFFER", path: "/" },
    { label: "TOP COURSE", path: "/" },
    { label: "SCHEDULE", path: "/" },
    { label: "TRAINER", path: "/" },
    { label: "PLAN", path: "/" },
    { label: "PAGES", path: "/" }
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={Link} to={`/${item.path}`} key={item.label} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className={styles.navbarParent} sx={{bgcolor:"white",boxShadow:"none"}} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Box className={styles.headerParent}>
                            <Typography sx={{color:"black"}}>
                                We believe we helps people <br />
                                for happier lives
                            </Typography>
                            <Box>
                            <img src="https://preview.colorlib.com/theme/gym/img/logo.png.webp" alt="logo" />
                            </Box>
                            <Box className={styles.iconAndNumber}>
                                <Box>
                            <Typography sx={{color:"black"}}>
                            +880 123 12 658 439
                            </Typography>
                                </Box>
                                <Box className={styles.phoneIcon}>
                            <LocalPhoneIcon />
                                </Box>
                            </Box>
                        </Box>
                    </Typography>
                    <Box className={styles.navbarLinks} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button component={Link} to={`/${item.path}`} key={item.label}  sx={{ color: 'black',fontSize:'12px',fontWeight:"550"}}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Navbar;
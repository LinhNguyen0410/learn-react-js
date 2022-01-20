import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    icon: {
        marginRight: '20px',
    },
});
export default function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.icon} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className={classes.link} to="/">
                            {' '}
                            Linh Shop
                        </Link>
                    </Typography>

                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink className={classes.link} to="/counter-redux">
                        <Button color="inherit">Counter redux</Button>
                    </NavLink>

                    <Button color="inherit" onClick={handleClickOpen}>
                        Register
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Dialog Register */}
            <Dialog open={open}>
                <DialogContent>
                    <DialogContentText>
                        <Register />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
            {/* Dialog Register */}
        </Box>
    );
}

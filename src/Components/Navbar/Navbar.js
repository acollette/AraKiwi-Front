import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image : {
        width: "150px",
    },
    container : {
        display:"flex",
        alignItems: "center",
        gap: theme.spacing(4),
        justifyContent: "center",
    },
    padding : {
        padding: 40,
    },
}))

const Navbar = () => {

    const classes = useStyles()

    return(
        <nav className = {classes.padding}>
            <ul className={classes.container}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>
                <li>
                    <Link to='/mint'>Mint</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
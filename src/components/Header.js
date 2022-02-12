import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 24
    },
    navbar: {
        backgroundColor: "grey",
        boxShadow: "3px"
    }
}))

function Header() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography className={classes.title}>
                    Travel Wizard
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
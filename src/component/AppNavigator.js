import React from "react"
import { Box, Toolbar, Button, AppBar } from "@material-ui/core";
import { Link  } from "react-router-dom";

export default function AppNavigator() {
    return (
        <div>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Link to= "/colorScreen/red">
                        <Button color="inherit">Red</Button>
                        </Link>    
                        <Link to= "/colorScreen/green">
                        <Button color="inherit">Green</Button>
                        </Link>
                        <Link to= "/colorScreen/blue">
                        <Button color="inherit">Blue</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}



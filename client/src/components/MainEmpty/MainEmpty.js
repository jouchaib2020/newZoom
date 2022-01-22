import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


function MainEmpty({roomId}) {
    const link = `/${roomId}`
    return(
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <h1 style={{color: 'white', }}>
            Welcome to Zoom 
        </h1>
        <Link to={link}>
            <Button style={{backgroundColor:'white'}}>
                Join a room 
            </Button>
        </Link>   
    </div>
    )
}

export default MainEmpty

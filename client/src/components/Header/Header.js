import React from 'react';
import { Button, IconButton, } from '@material-ui/core';
import CallEndIcon from '@material-ui/icons/CallEnd';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { Link } from "react-router-dom";


import './Header.css';

function Header() {
    return (
        <div className='container'>
            <Link to='/'>
                <Button id='button1' 
                variant="contained" 
                color="secondary"
                startIcon={<CallEndIcon fontSize='small'/>}
                >
                    EndCall
                </Button>
            </Link>
            
            <IconButton>
                <FullscreenIcon id='iFullscren' fontSize='medium' />
            </IconButton>

        </div>
    )
}

export default Header

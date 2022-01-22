import React from 'react';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BackupIcon from '@material-ui/icons/Backup';




import './Footer.css';
import { IconButton } from '@material-ui/core';


function Footer({muted, noCam,  switchMic, switchCam}) {
    console.log(`muted: ${muted} noCam: ${noCam}`)
    return (
        <div className='footer-container-parent'>
            <div className='footer-container-child'>
                <div className='vision'>
                    <IconButton id='mic' onClick={switchMic}>
                        {muted? <MicOffOutlinedIcon />: <MicNoneOutlinedIcon />}
                    </IconButton>   
                    <IconButton id='cam' onClick={switchCam}>
                        {noCam? <VideocamOffOutlinedIcon />: <VideocamOutlinedIcon />}
                    </IconButton>
                </div>
                <div className="others">
                    <IconButton id='add'>
                        <AddBoxIcon  />
                    </IconButton>
                    <IconButton id='share'>
                        <BackupIcon />
                    </IconButton>
                    <IconButton id='chat'>
                        <ChatBubbleIcon  />
                    </IconButton>
                    
                </div>
    
            </div>
        </div>
    )
}

export default Footer

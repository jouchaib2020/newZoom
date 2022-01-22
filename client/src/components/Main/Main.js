import React, { useEffect } from 'react';


import './Main.css';


function Main({muted, noCam, users}) {
    useEffect(() => {
      const videos =  document.getElementsByClassName('vid');
      console.log(videos.length)
      if (videos) {
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            video.srcObject = users[i].stream;
            video.play(); 
        }
    }
    }, [muted, noCam, users])

    return (
        <div className='main-container'>
            <div className='video-grid'>
                {users.map(user => <video key={user.userId} className='vid'/>)}
            </div>
        </div>
    )
}

export default Main;

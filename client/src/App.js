import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Peer from 'peerjs';



import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


const ENDPOINT = "http://localhost:3001/";

function App() {
    let { roomId } = useParams();
    const [muted, setMuted] = useState(false);
    const [noCam, setNoCam] = useState(false);
    const [users, setUsers] = useState([]);
    const [realUsers, setRealUsers] = useState([]);
    const switchMic = ()=>{
        if (muted) {
            setMuted(false);
        } else {
            setMuted(true);
        }
}
    const switchCam = ()=>{
        if (noCam) {
            setNoCam(false);
        } else {
            setNoCam(true);
        }
    }
    let localStream = undefined;
    useEffect(() => {
        let usersArray = [];
        const socket = io(ENDPOINT, { transports: [ 'flashsocket'] });
        const peer = new Peer({
            host: "localhost",
            port: 3001,
            path: '/peerJs',
            debug: 3,
            config: {
                'iceServers': [
                    { url: 'stun:stun1.l.google.com:19302' },
                    {
                        url: 'turn:numb.viagenie.ca',
                        credential: 'muazkh',
                        username: 'webrtc@live.com'
                    }
                ]
            }
        });
        peer.on('open', userId =>{
            console.log('peer opened');
            console.log(`this user id is : ${userId}`);
            socket.emit('join-room', roomId, userId);
            navigator.mediaDevices.getUserMedia({
                video: !noCam,
                audio: !muted
            }).then((stream) => {
                localStream = stream;
            }); 
        });
        socket.on('users', users =>{
            setUsers(users);
        })

        socket.on('user-connected', (userId)=>{ 
            var call = peer.call(userId, localStream);
            call.on('stream', stream =>{
                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    usersArray.push({id: user, stream: localStream});
                    setRealUsers(usersArray)
                } 
            })
        }); 
        
    }, [muted, noCam]);

    return (
        <div>
            <Header  />
            <Main muted={muted} noCam={noCam} users={realUsers}/>
            <Footer muted={muted} noCam={noCam } switchMic={switchMic} switchCam={switchCam} />
        </div>
    )
}

export default App; 

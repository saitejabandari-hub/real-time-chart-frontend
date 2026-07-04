

import socket from "./socket";
import {useState, useEffect,useRef } from "react";


function App() {
  const [username,setUsername]=useState('')
  const [room,setRoom]=useState('')
  const [messages,setMessages]=useState([])
  const [text,setText]=useState("")
  const [isjoined, setIsjoined]=useState(false)
  const [typing,setTyping]=useState('')
  const [roomUsers, setRoomUsers] = useState([]);

  const typeTimeout =  useRef(null);

  useEffect(() => {

    socket.on("connect", () => {
      console.log("Connected to server:", socket.id); // Start listening
       console.log("My Socket ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("receive_message", (data) => {
       console.log("📥 Received:", data);
       setMessages((prev) => [...prev, data]);
      });

    socket.on("user_joined",(data)=>{
      console.log(`${data.username} joined the ${data.room}`)
      setMessages(prev => [...prev,{text:`${data.username} joined`}])
    })

    socket.on("is_typing",(data)=>{
      setTyping(`${data.username} typing...`)
    })

    socket.on("stop_typing",()=>{
        setTyping('')
    })

    socket.on("room_users",(user)=>{
      setRoomUsers(user)
    })


    return () => {
      socket.off("connect");  // stop listening
      socket.off("disconnect");
      socket.off("receive_message");
      socket.off("user_joined")
      socket.off("is_typing")
      socket.off("stop_typing")
    };

  }, []);

 
  const sendMessage = () => {

    console.log("✅ Send button clicked");

    const sentmessage = {
        username,
        text,
        room,
        time: new Date().toLocaleTimeString()
    };

    socket.emit("send_message", sentmessage,(response)=>{
      console.log(response)
    });

    socket.emit("stop_typing",{
    username,
    room
        })

    setText("");
    setTyping('')
}

  const onEntered=()=>{
    if (username.trim() === "" || room.trim() === "") return;

    socket.emit("join_room",{
      username,
      room
    })

    setIsjoined(true)
  }

  const onTyping = (event) =>{
    setText(event.target.value)
    
    socket.emit("typing",{
      username,
      room
    })

    clearTimeout(typeTimeout.current)

    typeTimeout.current= setTimeout(()=>{
      socket.emit("stop_typing",{
        username,
        room
      })
    },2000)



  }

  return (
    <div>
      {isjoined ? <>{messages.map((msg,index)=>(
        
       <div key={index} style={{textAlign:msg.username === username? "right":"left" ,backgroundColor:
    msg.username === username?"blue":"green",width:"150px" }} > 

        <div key={index}>
         <h3>{msg.username}</h3>
        <p>{msg.text}</p>
        <small>{msg.time}</small>
          </div>

       </div>

      ))}
      {roomUsers.map(each => (
        <p key={each.socketId} >{each.username}</p>
      ))}
      <input value={text}  onChange={ onTyping} placeholder={typing} />
      <button onClick={sendMessage}>
        Send
      </button></>:<> <input value={username} placeholder="Enter username"  onChange={(e)=>setUsername(e.target.value)}/>
      <input value={room} placeholder="Enter room"  onChange={(e)=>setRoom(e.target.value)}/>  
      <button onClick={onEntered}>
        OK
      </button> </>}
    </div>
  )
}

export default App

import ChatHeader from '../ChatHeader'
import ChatInput from  '../ChatInput'
import MessageList from '../MessageList'
import {ChatWindowContainer,ChatWindowTextCard,ChatWindowTextarea,} from './styledcomponent'

const ChatWindow = () =>{
    const dummyMessages = [
  {
    id: 1,
    sender: "Naruto",
    message: "Hey Sasuke! Where are you?",
    time: "09:10 AM",
    isMe: false,
    status: "seen",
  },
  {
    id: 2,
    sender: "You",
    message: "I'm near the training ground.",
    time: "09:11 AM",
    isMe: true,
    status: "seen",
  },
  {
    id: 3,
    sender: "Naruto",
    message: "Kakashi Sensei asked everyone to gather.",
    time: "09:12 AM",
    isMe: false,
    status: "seen",
  },
  {
    id: 4,
    sender: "You",
    message: "I'll be there in five minutes.",
    time: "09:13 AM",
    isMe: true,
    status: "delivered",
  },
  {
    id: 5,
    sender: "Naruto",
    message: "Don't be late this time 😂",
    time: "09:14 AM",
    isMe: false,
    status: "seen",
  },
  {
    id: 6,
    sender: "You",
    message: "No promises 😅",
    time: "09:15 AM",
    isMe: true,
    status: "seen",
  },
  {
    id: 7,
    sender: "Naruto",
    message: "Bring your kunai too.",
    time: "09:17 AM",
    isMe: false,
    status: "seen",
  },
  {
    id: 8,
    sender: "You",
    message: "Already packed.",
    time: "09:18 AM",
    isMe: true,
    status: "seen",
  },
  {
    id: 9,
    sender: "Naruto",
    message: "Great! See you soon.",
    time: "09:19 AM",
    isMe: false,
    status: "seen",
  },
];

    return(
        <ChatWindowContainer>
            <ChatHeader/>
            <ChatWindowTextCard>
                <ChatWindowTextarea>
                    {dummyMessages.map(each => (
                        <MessageList key={each.id} chat={each} />
                    ))}
                   
                </ChatWindowTextarea>
                 <ChatInput/>
            </ChatWindowTextCard>
        </ChatWindowContainer>
    )

}

export default ChatWindow
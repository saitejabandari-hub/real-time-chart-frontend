import ChatHeader from '../ChatHeader'
import ChatInput from  '../ChatInput'
import {ChatWindowContainer,ChatWindowTextCard,ChatWindowTextarea,} from './styledcomponent'

const ChatWindow = () =>{
    return(
        <ChatWindowContainer>
            <ChatHeader/>
            <ChatWindowTextCard>
                <ChatWindowTextarea>

                </ChatWindowTextarea>
                 <ChatInput/>
            </ChatWindowTextCard>
        </ChatWindowContainer>
    )

}

export default ChatWindow
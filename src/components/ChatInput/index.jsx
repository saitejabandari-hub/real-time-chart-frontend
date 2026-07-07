
import{ChatInputCard,ChatInputEmojiIcon,ChatInputPaperClipIcon,ChatInputoptionCard,
    ChatInputMessageInput,ChatInputSendIcon,
}from './styledcomponent'

const ChatInput =()=>{
    return(
        <ChatInputCard>
            <ChatInputoptionCard>
                <ChatInputEmojiIcon/>
            <ChatInputPaperClipIcon/>
            <ChatInputMessageInput placeholder="Type a message"/>
            <ChatInputSendIcon/>
            </ChatInputoptionCard>
        </ChatInputCard>
    )
}

export default ChatInput
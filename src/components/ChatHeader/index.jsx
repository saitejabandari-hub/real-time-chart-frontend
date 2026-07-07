
import {ChatheaderContainer,ChatHeaderUserDetails,ChatHeaderProfile,
    ChatHeaderUserName,ChatHeaderuserCard,ChatHeaderuserstatus,ChatHeaderMoreoptions,
ChatHeaderSearchIcon,ChatHeaderCallIcon,ChatHeaderCameraIcon,ChatHeaderDotsIcon
} from './styledcomponent' 

const ChatHeader =()=>{
    return(
        <ChatheaderContainer>
            <ChatHeaderUserDetails>
                <ChatHeaderProfile src="https://i.pravatar.cc/150?img=12" alt="profile" />
                <ChatHeaderuserCard>
                    <ChatHeaderUserName>
                    Naruto Uzumaki
                </ChatHeaderUserName>
                <ChatHeaderuserstatus>
                    Online
                </ChatHeaderuserstatus>
                </ChatHeaderuserCard>
            </ChatHeaderUserDetails>
            <ChatHeaderMoreoptions>
                <ChatHeaderSearchIcon/>
                <ChatHeaderCallIcon/>
                <ChatHeaderCameraIcon/>
                <ChatHeaderDotsIcon/>
            </ChatHeaderMoreoptions>
        </ChatheaderContainer>
        
    )


}

export default ChatHeader

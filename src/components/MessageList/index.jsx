import {MessageListContainer,MessageListCard,MessageListUserProfile,MessageListMessagecard,MessageListMessage,
  MessageListTime
} from './styledcomponent'

const MessageList = ({chat}) =>{

  const{sender,time,message,isMe,status}=chat
    return(
        <MessageListContainer isMe={isMe} >

            <MessageListCard>
                {!isMe  && <MessageListUserProfile src="https://i.pravatar.cc/150?img=12" alt="profile" />}
                <MessageListMessagecard isMe={isMe}>
                  <MessageListMessage >
                      {message}
                  </MessageListMessage>
                  <MessageListTime>
                      {time}
                  </MessageListTime>
                </MessageListMessagecard>
            </MessageListCard>

        </MessageListContainer>
    )
}

export default MessageList
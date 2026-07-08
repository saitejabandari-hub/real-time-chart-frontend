
import {ConversationListConverstaioncard,
ConversationListUserProfile,ConversationListDetails,ConversationListUserInfoCard,
ConversationListUserName,ConversationListUserNameMessage,
ConversationListUnreadCount,ConversationListTimeCount,ConversationListSentTime}from './styledcomponent'

const ConversationItem=()=>{

       const conversationlist = [
        {
            username: "Naruto",
            message: "hey come here",
            time: "4:30 pm",
            noofcounts:0,
        },
         {
            username: "Sasuke",
            message: "I want new jutsu",
            time: "2:30 pm",
            noofcounts:0,
        },
         {
            username: "Sakura",
            message: "don't distrub",
            time: "6:00 am",
            noofcounts:0,
        },
         {
            username: "Hinata",
            message: "meet tonight ?",
            time: "1:12 pm",
            noofcounts:2,
        },
         {
            username: "Kakashi",
            message: "come to practice",
            time: "10:27 pm",
            noofcounts:15,
        },
         {
            username: "Naruto",
            message: "hey come here",
            time: "4:30 pm",
            noofcounts:0,
        },
         {
            username: "Naruto",
            message: "hey come here",
            time: "4:30 pm",
            noofcounts:15,
        },
         {
            username: "Naruto",
            message: "hey come here",
            time: "4:30 pm",
            noofcounts:0,
        },
         {
            username: "Naruto",
            message: "hey come here",
            time: "4:30 pm",
            noofcounts:0,
        },
        
        
    ]


    return(
            <>
        {conversationlist.map((each,index) => (
                                
                     <ConversationListConverstaioncard key={each.index}>
                            <ConversationListUserProfile src="https://i.pravatar.cc/150?img=12" alt="profile" />
                                    <ConversationListDetails>
                                    <ConversationListUserInfoCard>
                                        <ConversationListUserName>
                                            {each.username}
                                        </ConversationListUserName>
                                        <ConversationListUserNameMessage>
                                            {each.message}
                                        </ConversationListUserNameMessage>
                                    </ConversationListUserInfoCard>
                                    <ConversationListTimeCount>
                                        <ConversationListSentTime>
                                            {each.time}
                                        </ConversationListSentTime>
                                        {each.noofcounts > 0 && <ConversationListUnreadCount>
                                            {each.noofcounts}
                                        </ConversationListUnreadCount>}
                                    </ConversationListTimeCount>
                            </ConversationListDetails>
                    </ConversationListConverstaioncard>
                                
                            ))}

                            </>

    )
}

export default ConversationItem
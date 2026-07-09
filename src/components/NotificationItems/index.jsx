import {NotificationItemsContainer,NotificationItemsCard,NotificationItemsInnercard
    ,NotificationItemsMessage,NotificationItemsCategory,NotificationItemsMessageIcon} from './styledcomponent'

const NotificationItems =()=>{

        const notifications = [
  {
    id: 1,
    title: "Naruto sent you a message",
    time: "2 min ago",
    type: "message",
  },
  {
    id: 2,
    title: "Kakashi mentioned you",
    time: "10 min ago",
    type: "mention",
  },
  {
    id: 3,
    title: "Sasuke reacted ❤️",
    time: "Yesterday",
    type: "reaction",
  },
  {
    id: 4,
    title: "Hinata joined the group",
    time: "Yesterday",
    type: "group",
  },
];

const reactionIcons = {
    message: <NotificationItemsMessageIcon />,
    mention: "🌀",
    reaction: "❤️",
    group: "👪"
}

    return(
        <NotificationItemsContainer>
                {notifications.map(each =>(
                    <NotificationItemsCard key={each.id} > 
                            <NotificationItemsInnercard>
                                {reactionIcons[each.type]}
                                <NotificationItemsMessage>
                                    {each.title}
                                </NotificationItemsMessage>
                            </NotificationItemsInnercard>
                                <NotificationItemsCategory>
                                    {each.time}
                                </NotificationItemsCategory>
                    </NotificationItemsCard>
                ))}
        </NotificationItemsContainer>
    )

}

export default NotificationItems
import NotificationItems from '../NotificationItems'

import {NotificationContainer,NotificationHeading} from './styledcomponent'



const Notification=()=>{


    return(
       <NotificationContainer>
       <NotificationHeading>
        Notification
       </NotificationHeading>
             <NotificationItems/>
       </NotificationContainer>
    )


}

export default Notification
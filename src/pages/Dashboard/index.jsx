import Sidebar from '../../components/Sidebar'
import ConversationList from '../../components/ConversationList'
import ChatWindow from '../../components/ChatWindow'

import {DashboardContainer, DashboardInnerContainer } from './styledcompnent'

const Dashboard =()=>{

    return(
       
       
        <DashboardContainer>
            < DashboardInnerContainer >
             <Sidebar/>
            <ConversationList/>
            <ChatWindow/>
            </DashboardInnerContainer>
            
        </DashboardContainer>
    )

}

export default Dashboard

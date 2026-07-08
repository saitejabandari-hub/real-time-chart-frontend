import Sidebar from '../../components/Sidebar'
import ConversationList from '../../components/ConversationList'
import ChatWindow from '../../components/ChatWindow'

import {DashboardContainer } from './styledcompnent'

const Dashboard =()=>{

    return(
       
       
        <DashboardContainer>
            
             <Sidebar/>
            <ConversationList/>
            <ChatWindow/>
           
            
        </DashboardContainer>
    )

}

export default Dashboard

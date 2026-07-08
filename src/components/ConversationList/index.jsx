import { useContext } from 'react'
import ConversationItem from '../ConversationItem'
import ChatContext from '../../context/ChatContext'
import Profile from '../Profile'
import Setting from '../Setting'

import {ConversationListContainer,ConversationListSearchCard,SearchIcon,ConversationListSerachInput,
    ConversationListCategories,ConversationListCategory,ConversationListConverstaionBody,

 } from './styledcomponent'

const ConversationList =()=>{
    const {leftPanel}=useContext(ChatContext)

    return(
        <ConversationListContainer>
          {leftPanel === 'conversationlist' && <>  <ConversationListSearchCard>
                <SearchIcon /> <ConversationListSerachInput placeholder='search'/>
            </ConversationListSearchCard>

            <ConversationListCategories>
                <ConversationListCategory>
                    All
                </ConversationListCategory>
                <ConversationListCategory>
                    Direct
                </ConversationListCategory>
                <ConversationListCategory>
                    Groups
                </ConversationListCategory>
                <ConversationListCategory>
                    favorites
                </ConversationListCategory>
            </ConversationListCategories>

            <ConversationListConverstaionBody>
                <ConversationItem/>
            </ConversationListConverstaionBody></>}
          {leftPanel === "profile" && <Profile/>}
          {leftPanel === 'setting' && <Setting/>}
            
        </ConversationListContainer>
    )
}

export default ConversationList
import { useContext } from 'react'
import ConversationItem from '../ConversationItem'
import ChatContext from '../../context/ChatContext'
import Profile from '../Profile'
import Setting from '../Setting'
import Notification from '../Notification'
import Contact from "../Contact"

import {ConversationListContainer,ConversationListSearchCard,SearchIcon,ConversationListSerachInput,
    ConversationListCategories,ConversationListCategory,ConversationListConverstaionBody,ConversationListFirstcard

 } from './styledcomponent'

const ConversationList =()=>{
    const {leftPanel}=useContext(ChatContext)

    return(
        <ConversationListContainer>
          {leftPanel === 'conversationlist' ? <>  <ConversationListFirstcard><ConversationListSearchCard>
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
            </ConversationListConverstaionBody></ConversationListFirstcard></>:
            leftPanel === "profile" ? <Profile/>: 
             leftPanel === 'setting' ? <Setting/>:
             leftPanel === "notification" ? < Notification/>:
             leftPanel === "privacy" ? < Notification/>:
             leftPanel === "apperance" ? < Notification/>:
             leftPanel === "language" ? < Notification/>:
             leftPanel === "help" ? < Notification/>:
             leftPanel === "about" ? < Notification/>:
                <Contact/>
            }
            
        </ConversationListContainer>
    )
}

export default ConversationList
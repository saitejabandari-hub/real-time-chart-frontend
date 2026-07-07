import ConversationItem from '../ConversationItem'

import {ConversationListContainer,ConversationListSearchCard,SearchIcon,ConversationListSerachInput,
    ConversationListCategories,ConversationListCategory,ConversationListConverstaionSection,

 } from './styledcomponent'

const ConversationList =()=>{


    return(
        <ConversationListContainer>
            <ConversationListSearchCard>
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
                    favorties
                </ConversationListCategory>
            </ConversationListCategories>

            <ConversationListConverstaionSection>
                <ConversationItem/>
            </ConversationListConverstaionSection>
            
        </ConversationListContainer>
    )
}

export default ConversationList
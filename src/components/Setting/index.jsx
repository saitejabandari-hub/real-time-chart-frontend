
import { useContext } from 'react'
import ChatContext from '../../context/ChatContext'

import {SettingContainer,SettingCard,SettingMoonIcon,SettingHeading,
    SettingArrowIcon,SettingNotificationIcon,SettingPrivacyIcon,SettingLanguageIcon,SettingHelpIcon,SettingAboutIcon,
    SettingAdjustCard,SettingNamecard
} from './styledcomponent'



const Setting =()=>{

    const{onSelectNotification, onSelectApperance, onSelectPrivacy,onSelectLanguage,onSelectHelp,onSelectAbout}=useContext(ChatContext)


   const settingList = [
    {
        name: "Appearance",
        subtitle: "Dark Theme",
        icon: SettingMoonIcon,
        function : onSelectApperance
    },
    {
        name: "Notification",
        subtitle: "Messages & Sounds",
        icon: SettingNotificationIcon,
        function : onSelectNotification
    },
    {
        name: "Privacy",
        subtitle: "Last seen, Read receipts",
        icon: SettingPrivacyIcon,
         function : onSelectPrivacy
    },
    {
        name: "Language",
        subtitle: "English",
        icon: SettingLanguageIcon,
         function : onSelectLanguage
    },
    {
        name: "Help",
        subtitle: "FAQ & Support",
        icon: SettingHelpIcon,
         function : onSelectHelp
    },
    {
        name: "About",
        subtitle: "Version 1.0.0",
        icon: SettingAboutIcon,
         function : onSelectAbout
    }
]

    return(
        <SettingContainer>

                <SettingNamecard>
                    Settings
                </SettingNamecard>

            {settingList.map((each,index)=>{
                const Icon = each.icon
                return(
             <SettingCard key={index} onClick={each.function}>
               <SettingAdjustCard>
                 <Icon/>
                <SettingHeading>
                    {each.name}
                </SettingHeading>
               </SettingAdjustCard>
                <SettingArrowIcon/>
            </SettingCard>
                )
            })}
        
            
        </SettingContainer>
    )

}

export default Setting
import { createContext } from "react";


const ChatContext = createContext({

    leftPanel:'',
    onSelectConvesationList:()=>{},
    onSelectProfile:()=>{},
    onSelectSetting:()=>{},
    onSelectNotification:()=>{},
    onSelectApperance:()=>{},
    onSelectPrivacy:()=>{},
    onSelectLanguage:()=>{},
    onSelectHelp:()=>{},
    onSelectAbout:()=>{},
    onSelectContact:()=>{},
    

})

export default ChatContext
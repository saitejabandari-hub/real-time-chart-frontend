import { createContext } from "react";


const ChatContext = createContext({

    leftPanel:'',
    onSelectConvesationList:()=>{},
    onSelectProfile:()=>{},
    onSelectSetting:()=>{},
    


})

export default ChatContext
import { useState,useRef,useEffect,useContext } from 'react'
import Profile from '../Profile'
import ChatContext from '../../context/ChatContext'
import {SidebarContainer,Sidebaruppercard,SidebarProfileContainer,SidebarProfile,ChatIcon,
    SidebarIcons,StarIcon,ContactIcon,NotificationIcon,Dropdown,
SidebarDropdownbutton,} from './styledcomponent'

const Sidebar=()=>{
    const [isProfileOpen,setIsProfileOpen]=useState(false)
    const {onSelectProfile,onSelectConvesationList,onSelectSetting,onSelectContact}=useContext(ChatContext)
    const profileUseRef = useRef()

    useEffect(()=>{

        const handleOutsideCilck=(event)=>{

            if(profileUseRef.current && !profileUseRef.current.contains(event.target)){ // check the HTML contains in it 
                setIsProfileOpen(false)
            }

        }

         document.addEventListener("click",handleOutsideCilck) // when some click anywhere this  event call's

         return () =>{
            document.removeEventListener("click",handleOutsideCilck)
         }

    },[])

    const onAvatarClick = ()=>{
        setIsProfileOpen(prev => !prev)
    }

   return(
    <SidebarContainer>

       <Sidebaruppercard>
         <SidebarProfileContainer ref={profileUseRef} >
            <SidebarProfile src="https://i.pravatar.cc/150?img=12" alt="profile" onClick={onAvatarClick}/>
             {isProfileOpen && <Dropdown>
                <SidebarDropdownbutton type="button" onClick={onSelectProfile}>
                    Profile
                </SidebarDropdownbutton >
                <SidebarDropdownbutton type="button" onClick={onSelectSetting} >
                    Setting
                </SidebarDropdownbutton>
                <SidebarDropdownbutton type="button" >
                    Logout
                </SidebarDropdownbutton>
                
        </Dropdown>}
        </SidebarProfileContainer>

       

        <SidebarIcons>
            <ChatIcon onClick={onSelectConvesationList}/>
             <ContactIcon onClick={onSelectContact}/>
             <StarIcon/>
              <NotificationIcon/>
               
               
        </SidebarIcons>
       </Sidebaruppercard>
       

         
    </SidebarContainer>
   )

}

export default Sidebar
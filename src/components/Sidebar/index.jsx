import { useState } from 'react'
import {SidebarContainer,Sidebaruppercard,SidebarProfileImageContainer,SidebarProfile,ChatIcon,
    SidebarIcons,SidebarLogOut,StarIcon,ContactIcon,NotificationIcon,SettingIcon,LogOutIcon,Dropdown} from './styledcomponent'

const Sidebar=()=>{
    const [isProfileOpen,setIsProfileOpen]=useState(false)

    const onAvatarClick = ()=>{
        setIsProfileOpen(prev => !prev)
    }

   return(
    <SidebarContainer>

       <Sidebaruppercard>
         <SidebarProfileImageContainer>
            <SidebarProfile src="https://i.pravatar.cc/150?img=12" alt="profile" onClick={onAvatarClick}/>
        </SidebarProfileImageContainer>

        {isProfileOpen ? <Dropdown>
                <h1> Profile</h1>
                <h1>Settings</h1>
                <h1>Logout</h1>
        </Dropdown> :''}

        <SidebarIcons>
            <ChatIcon/>
             <ContactIcon/>
             <StarIcon/>
              <NotificationIcon/>
               <SettingIcon/>
               
        </SidebarIcons>
       </Sidebaruppercard>

         <SidebarLogOut>
           <LogOutIcon/>
        </SidebarLogOut>

    </SidebarContainer>
   )

}

export default Sidebar
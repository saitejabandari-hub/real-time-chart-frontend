import { useState,useRef,useEffect } from 'react'
import {SidebarContainer,Sidebaruppercard,SidebarProfileContainer,SidebarProfile,ChatIcon,
    SidebarIcons,SidebarLogOut,StarIcon,ContactIcon,NotificationIcon,SettingIcon,LogOutIcon,Dropdown,
SidebarDropdownheading,} from './styledcomponent'

const Sidebar=()=>{
    const [isProfileOpen,setIsProfileOpen]=useState(false)
    const profileUseRef = useRef()

    useEffect(()=>{

        const handleOutsideCilck=(event)=>{

            if(!profileUseRef.current.contain(event.target)){ // check the HTML contains in it 
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
                <SidebarDropdownheading>
                    Profile
                </SidebarDropdownheading>
                <SidebarDropdownheading>
                    Setting
                </SidebarDropdownheading>
                <SidebarDropdownheading>
                    Logout
                </SidebarDropdownheading>
                
        </Dropdown>}
        </SidebarProfileContainer>

       

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
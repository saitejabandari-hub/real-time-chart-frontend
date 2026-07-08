import { useState } from 'react'

import {ProfileContainer,ProfileImageCard,ProfileDetails,ProfileInput,ProfileLabel,
 ProfileEdit ,ProfileEditCard,ProfileCallIcon,ProfileCheck,ProfileName,ProfilePhoneCard 
} from './styledcomponent'

const Profile = ()=>{
    const[saveName ,SetSaveName]=useState(false)
    const[saveAbout ,SetSaveAbout]=useState(false)
    const[savePhone ,SetSavePhone]=useState(false)

    const OnProfileName=()=>{
        SetSaveName(prev => !prev)
    }

     const OnProfileAbout=()=>{
        SetSaveAbout(prev => !prev)
    }

     const OnProfilePhone=()=>{
        SetSavePhone(prev => !prev)
    }

    


    return(
        <ProfileContainer>
             <ProfileImageCard src="https://i.pravatar.cc/150?img=12" alt="profile" />

                <ProfileDetails>
                    <ProfileLabel>
                        Name
                    </ProfileLabel>
                    <ProfileEditCard>
                       {saveName ? <> <ProfileInput type="text" placeholder='Enter name'/>
                      < ProfileCheck onClick={OnProfileName} /></> : <> <ProfileName>Saiteja</ProfileName> <ProfileEdit onClick={OnProfileName}/>  </>}
                    </ProfileEditCard>
                </ProfileDetails>
                 <ProfileDetails>
                    <ProfileLabel>
                        Email
                    </ProfileLabel>
                    
                     <ProfileEditCard>
                       {saveAbout ? <> <ProfileInput type="text" placeholder='Enter email'/>
                      < ProfileCheck onClick={OnProfileAbout} /></> : <> <ProfileName>Saiteja@gmail.com</ProfileName>  <ProfileEdit onClick={OnProfileAbout}/> </>}
                    </ProfileEditCard>
                </ProfileDetails>

                 <ProfileDetails>
                    <ProfileLabel>
                        About
                    </ProfileLabel>
                    
                     <ProfileEditCard>
                       {saveAbout ? <> <ProfileInput type="text" placeholder='Enter about'/>
                      < ProfileCheck onClick={OnProfileAbout} /></> : <> <ProfileName>Good time's are soon</ProfileName>  <ProfileEdit onClick={OnProfileAbout}/> </>}
                    </ProfileEditCard>
                </ProfileDetails>

                <ProfileDetails>
                    <ProfileLabel>
                        Phone
                    </ProfileLabel>
                    <ProfileEditCard>
                        
                       {savePhone ? <> <ProfilePhoneCard> <ProfileCallIcon/> <ProfileInput type="text" placeholder='Enter number'/></ProfilePhoneCard>
                      < ProfileCheck onClick={OnProfilePhone} /></> : <><ProfilePhoneCard> <ProfileCallIcon/> <ProfileName>987654321</ProfileName> </ProfilePhoneCard>  <ProfileEdit onClick={OnProfilePhone}/> </>}
                    </ProfileEditCard>
                </ProfileDetails>

        </ProfileContainer>
    )
}

export default Profile
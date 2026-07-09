
import {ContactContainer,ContactHeading,ContactInputCard,
    ContactSearchIcon,ContactInput,
} from "./styledcomponent"

const Contact=()=>{

    return(
        <ContactContainer>
            <ContactHeading>
                Contact
            </ContactHeading>
            <ContactInputCard>
                <ContactSearchIcon/>
                <ContactInput type="text" placeholder="search"/>
            </ContactInputCard>
        </ContactContainer>
    )

}

export default Contact

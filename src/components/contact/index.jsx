
import {ContactContainer,ContactHeading,ContactInputCard,
    ContactSearchIcon,ContactInput,ContactFavoriteCard,ContactStar,ContactFavoritHeading,
    ContactAllContactCard,ContactAllContact,ContactImage,ContactName,ContactStatus,ContactlistContainer,
} from "./styledcomponent"

const Contact=()=>{

    const contacts = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    profile:
      "https://i.pravatar.cc/150?img=12",
    status: "online",
    lastSeen: "Online",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    profile:
      "https://i.pravatar.cc/150?img=13",
    status: "offline",
    lastSeen: "Last seen 5 min ago",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Sakura Haruno",
    profile:
      "https://i.pravatar.cc/150?img=14",
    status: "online",
    lastSeen: "Online",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    profile:
      "https://i.pravatar.cc/150?img=15",
    status: "offline",
    lastSeen: "Last seen yesterday",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Hinata Hyuga",
    profile:
      "https://i.pravatar.cc/150?img=16",
    status: "online",
    lastSeen: "Online",
    isFavorite: true,
  },
  {
    id: 6,
    name: "Shikamaru Nara",
    profile:
      "https://i.pravatar.cc/150?img=17",
    status: "offline",
    lastSeen: "Last seen 2 hours ago",
    isFavorite: false,
  },
  {
    id: 7,
    name: "Rock Lee",
    profile:
      "https://i.pravatar.cc/150?img=18",
    status: "online",
    lastSeen: "Online",
    isFavorite: false,
  },
  {
    id: 8,
    name: "Gaara",
    profile:
      "https://i.pravatar.cc/150?img=19",
    status: "offline",
    lastSeen: "Last seen 10 min ago",
    isFavorite: false,
  },
];

const favoritecontact = contacts.filter(each => each.isFavorite === true)
const allcontact = contacts.filter(each => each.isFavorite=== false)

    return(
        <ContactContainer>
            <ContactHeading>
                Contact
            </ContactHeading>
            <ContactInputCard>
                <ContactSearchIcon/>
                <ContactInput type="text" placeholder="search"/>
            </ContactInputCard>
        <ContactlistContainer>
             <ContactFavoriteCard>
                <ContactStar/>
                <ContactFavoritHeading>
                    Favorites
                </ContactFavoritHeading>

            </ContactFavoriteCard>

             {favoritecontact.map((each,index)=>(
                
            <ContactAllContactCard>
                <ContactAllContact>
                    <ContactImage src={each.profile} alt="profile" />
                    <ContactName>
                        {each.name}
                    </ContactName>
                </ContactAllContact>

                <ContactStatus isonline={each.lastSeen === "Online"}>
                    {each.lastSeen}
                </ContactStatus>

            </ContactAllContactCard>
            ))}

             <ContactFavoriteCard>
                <ContactFavoritHeading>
                    All Contacts
                </ContactFavoritHeading>
            </ContactFavoriteCard>
            {allcontact.map((each,index)=>(
                
            <ContactAllContactCard>
                <ContactAllContact>
                    <ContactImage src={each.profile} alt="profile" />
                    <ContactName>
                        {each.name}
                    </ContactName>
                </ContactAllContact>

                <ContactStatus isonline={each.lastSeen === "Online"}>
                    {each.lastSeen}
                </ContactStatus>

            </ContactAllContactCard>
            ))}
         </ContactlistContainer>

        </ContactContainer>
    )

}

export default Contact

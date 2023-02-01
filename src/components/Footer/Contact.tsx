import { contact } from '../../utils/constants/globalConstants'
import ContactItem from './ContactItem'
import { StyledContact, StyledGroupName } from './Footer.style'

const Contact = () => {
    return (
        <StyledContact>
            <StyledGroupName>{contact.name}</StyledGroupName>
            <ul style={{ padding: 0 }}>
                {contact.items.map((item, index) => <ContactItem position={index + 1} item={item} key={index} />)}
            </ul>
        </StyledContact>
    )
}

export default Contact
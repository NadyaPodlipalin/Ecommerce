import { StyledContactName, StyledContactPayload, StyledContactPayloadTelephone } from './Footer.style';

interface Props {
    item: {
        name: string,
        payload: string
    },
    position: number;
}
const ContactItem = ({ item, position }: Props) => {
    switch (position) {
        case 2: return (
            <div>
                <StyledContactName>
                    {item.name}
                </StyledContactName>
                <StyledContactPayloadTelephone>
                    {item.payload}
                </StyledContactPayloadTelephone>
            </div>
        )
        default: return (
            <div>
                <StyledContactName>
                    {item.name}
                </StyledContactName>
                <StyledContactPayload>
                    {item.payload}
                </StyledContactPayload>
            </div>
        )
    }
}
export default ContactItem
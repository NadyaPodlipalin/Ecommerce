import { getHelp } from '../../utils/constants/globalConstants';
import { StyledGetHelp, StyledGroupName } from './Footer.style';
import FooterMenuItem from './FooterMenuItem';

const GetHelp = () => {
    return (
        <StyledGetHelp>
            <StyledGroupName>Get help</StyledGroupName>
            <ul style={{ padding: 0 }}>
                {getHelp.map((item, index) => <FooterMenuItem key={index} item={item} />)}
            </ul>
        </StyledGetHelp>
    )
}

export default GetHelp
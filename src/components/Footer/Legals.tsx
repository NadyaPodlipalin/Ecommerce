import { legals } from '../../utils/constants/globalConstants';
import { StyledGroupName, StyledLegals } from './Footer.style';
import FooterMenuItem from './FooterMenuItem';

const Legals = () => {
    return (
        <StyledLegals>
            <StyledGroupName>Products</StyledGroupName>
            <ul style={{ padding: 0 }}>
                {legals.map((item, index) => <FooterMenuItem key={index} item={item} />)}
            </ul>
        </StyledLegals>
    )
}

export default Legals
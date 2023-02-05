import { accordionSidebar } from '../../../utils/constants/productConstants';
import { StyledSidebar } from './Product.style';
import AccordionElement from './AccordionElement';


const Sidebar = () => {
    return (
        <StyledSidebar>
            {accordionSidebar.map((item, index) => <AccordionElement item={item} key={index} />)}
        </StyledSidebar>
    )
}

export default Sidebar
import { dropdown } from '../../../utils/constants/productConstants'
import { Dropdown, DropdownContent, StyledButton, StyledMenuItem } from './Product.style'

const Filter = () => {
    return (
        <Dropdown>
            <StyledButton>Filter</StyledButton>
            <DropdownContent>
                {dropdown.map((item, index) => <StyledMenuItem key={index}>{item}</StyledMenuItem>)}
            </DropdownContent>
        </Dropdown >
    )
}

export default Filter


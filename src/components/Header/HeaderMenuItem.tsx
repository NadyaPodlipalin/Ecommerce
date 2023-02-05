import { MainMenu } from '../../utils/types';
import { DropdownContent, Dropdown, StyledButton, StyledList, StyledMainMenuItem } from './Header.style';

interface Props {
  item: MainMenu;
}

const HeaderMenuItem = ({ item }: Props) => {
  return (
    <StyledList>
      <Dropdown>
        <StyledButton>{item.name}</StyledButton>
        <DropdownContent>
          {item.payload.map((i, index: number) => <StyledMainMenuItem key={index}>menuItem</StyledMainMenuItem>)}
        </DropdownContent>
      </Dropdown >
    </StyledList>
  )
}

export default HeaderMenuItem;
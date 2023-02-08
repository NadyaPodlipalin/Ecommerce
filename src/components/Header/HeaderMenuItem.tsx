import { MainMenu } from '../../utils/types';
import { Dropdown, DropdownContent, StyledButton, StyledList, StyledMainMenuItem } from './Header.style';

interface Props {
  item: MainMenu;
}

const HeaderMenuItem = ({ item }: Props) => {
  return (
    <StyledList>
      <Dropdown>
        <StyledButton>{item.name}</StyledButton>
        <DropdownContent>
          {item.payload.map((item, index: number) => <StyledMainMenuItem key={index}>
            {item.name}
          </StyledMainMenuItem>)}
        </DropdownContent>
      </Dropdown >
    </StyledList>
  )
}

export default HeaderMenuItem;
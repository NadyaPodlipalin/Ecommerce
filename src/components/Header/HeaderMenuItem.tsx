import { StyledList } from './Header.style';
interface Props {
  item: string;
}

const HeaderMenuItem = ({ item }: Props) => {
  return (
    <StyledList>
      {item}
    </StyledList>
  )
}

export default HeaderMenuItem;
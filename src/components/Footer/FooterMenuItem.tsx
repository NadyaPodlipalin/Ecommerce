import { StyledItem } from './Footer.style';

interface Props {
    item: string;
}

const FooterMenuItem = ({ item }: Props) => {
    return (
        <StyledItem>
            {item}
        </StyledItem>
    )
}

export default FooterMenuItem;
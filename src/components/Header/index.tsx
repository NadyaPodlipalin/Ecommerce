import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledHeader, StyledLeft, StyledLink, StyledRight, StyledShoppingBagIcon, StyledTextField } from './Header.style';
import Navigation from './Navigation';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeft>
        <StyledLink to="/">LOGO</StyledLink>
        <Navigation />
      </StyledLeft>
      <StyledRight>
        <StyledTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          variant="outlined"
          placeholder='Search'
        />
        <StyledShoppingBagIcon />
        <PermIdentityIcon />
      </StyledRight>
    </StyledHeader>

  )
}

export default Header


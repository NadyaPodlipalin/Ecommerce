import CopyrightIcon from '@mui/icons-material/Copyright'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import Contact from './Contact'
import { StyledCopyRight, StyledFooter, StyledIcon, StyledLink, StyledLogo, StyledLowerFooter, StyledTelRan, StyledUpperFooter } from './Footer.style'
import GetHelp from './GetHelp'
import Legals from './Legals'
import Products from './Products'

const Footer = () => {
  return (
    <StyledFooter >
      <StyledUpperFooter>
        <StyledLink to='/'>
          LOGO
        </StyledLink>
        <Products />
        <GetHelp />
        <Legals />
        <Contact />
      </StyledUpperFooter>
      <StyledLowerFooter>
        <StyledCopyRight>
          <StyledTelRan>
            <p>Tel Ran</p>
            <CopyrightIcon style={{ margin: 5 }} />
            <p> 2023</p>
          </StyledTelRan>
          <div style={{ display: 'flex' }}>
            <StyledIcon>
              <FacebookIcon />
            </StyledIcon>
            <StyledIcon>
              <InstagramIcon />
            </StyledIcon>
            <StyledIcon>
              <TwitterIcon />
            </StyledIcon>
          </div>
        </StyledCopyRight>
      </StyledLowerFooter>
    </StyledFooter >
  )
}

export default Footer
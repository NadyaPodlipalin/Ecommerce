import MailIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import image from '../../img/LandingPageImg/SubscriptionImg/subscription.png';
import { StyledSubscription, StyledSubscriptionButton, StyledSubscriptionLeftSection, StyledSubscriptionRightSection, StyledSubscriptionTextLarge, StyledSubscriptionTextSmall, StyledTextField } from './LandingPage/Landing.style';

const Subscription = () => {
    return (
        <StyledSubscription>
            <StyledSubscriptionLeftSection>
                <StyledSubscriptionTextSmall>Newsletter</StyledSubscriptionTextSmall>
                <StyledSubscriptionTextLarge>Subscribe and get info about new releases first</StyledSubscriptionTextLarge>
                <StyledTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailIcon />
                            </InputAdornment>
                        )
                    }}
                    variant="outlined"
                    placeholder='Enter you email'
                />
                <StyledSubscriptionButton>Subscribe</StyledSubscriptionButton>
            </StyledSubscriptionLeftSection>
            <StyledSubscriptionRightSection>
                <img src={image} alt="subscription" />
            </StyledSubscriptionRightSection>
        </StyledSubscription>
    )
}

export default Subscription
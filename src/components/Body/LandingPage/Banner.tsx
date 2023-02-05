import sneacker from '../../../img/LandingPageImg/Banner/sneacker.png';
import { BannerBuyNow, BannerExplore, Sneacker, StyledArrowBackIosIcon, StyledArrowForwardIosIcon, StyledBanner, StyledBannerGroup, StyledButtonGroup, StyledExploreArrowIcon, StyledGradient1, StyledGradient2, StyledGradientGroup, StyledNIKE, StyledTitle1, StyledTitle2 } from './Landing.style';

export const Banner = () => {
    return (
        <StyledBanner>
            <StyledArrowBackIosIcon />
            <StyledBannerGroup>
                <StyledNIKE>NIKE</StyledNIKE>
                <StyledTitle1>AIR Beyond Compare</StyledTitle1>
                <StyledTitle2>Explore the best Air Max for fall & beyond</StyledTitle2>
                <StyledGradientGroup>
                    <StyledGradient1 />
                    <StyledGradient2 />
                </StyledGradientGroup>
                <Sneacker src={sneacker} alt='sneacker' />
                <StyledButtonGroup>
                    <BannerBuyNow>Buy now</BannerBuyNow>
                    <BannerExplore>Explore</BannerExplore>
                    <StyledExploreArrowIcon fontSize='small' />
                </StyledButtonGroup>
            </StyledBannerGroup>
            <StyledArrowForwardIosIcon />
        </StyledBanner>
    )
}

export default Banner
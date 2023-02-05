import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExploreArrowIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextField from '@mui/material/TextField';


/*LANDING PAGE*/
export const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: #FFFFFF;
    width: 1600px;
`

/*BANNER*/
export const StyledBanner = styled.div`
    width: 1600px;
    height: 570px;
    left: 0px;
    top: 0px;
    background-color: #17181F;
    position: relative;
`
export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
    color: white;
    position: absolute;
    margin-left: 90px;
    margin-top: 255px;
`
export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
    color: white;
    position: absolute;
    margin-left: 1445px;
    margin-top: 255px;
`
export const StyledBannerGroup = styled.div`
    position: absolute;
    margin: auto;
`
export const StyledNIKE = styled.p`
   width: 1129px;
    left: 226px;
    font-style: normal;
    font-weight: 500;
    font-size: 500px;
    position: absolute;
    z-index: 0;
    text-align: center;
    letter-spacing: -4.5px;
    color: rgba(238, 237, 240, 0.1);
    padding: 0;
    margin: 0;
`

export const StyledTitle1 = styled.p`
  font-style: normal;
    font-weight: 500;
    font-size: 72px;
    position: absolute;
    text-align: center;
    letter-spacing: -4.5px;
    top: 22px;
    left: 354px;
    color: rgba(238, 237, 240, 0.85);
    margin: 0;
    width: 892px;
    height: 80px;
    text-align: center;
`
export const StyledTitle2 = styled.p`
  font-style: normal;
    font-weight: 400;
    font-size: 24px;
    position: absolute;
    top: 105px;
    text-align: center;
    letter-spacing: -1px;
    width: 429px;
    left: 586px;
    color: #EEEDF0;
    text-shadow: 0px 5px 12px rgba(203, 105, 193, 0.25);
`

export const StyledGradientGroup = styled.div`
  position: absolute;
    top: 90px;
    left: 444px;
`
export const StyledGradient1 = styled.div`
  background: linear-gradient(rgba(203, 105, 193, 0.15), transparent);
    transform: matrix(-0.89, 0.41, -0.49, -0.9, 0, 0);
    filter: blur(50px);
    width: 508px;
    height: 317px;
    position: absolute;
`
export const StyledGradient2 = styled.div`
   background: rgba(108, 114, 203, 0.15);
    transform: matrix(0.89, -0.38, 0.48, 0.91, 0, 0);
    filter: blur(50px);
    width: 508px;
    height: 317px;
    position: absolute;
`
export const Sneacker = styled.img`
   position: absolute;
    left: 445px;
    top: 20px;
    z-index: 10;
`
export const StyledButtonGroup = styled.div`
   position: absolute;
    display: flex;
    left: 155px;
    top: 482px;
`
export const BannerBuyNow = styled.div`
  background-color: #2D74FF;
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    width: 91px;
    height: 40px;
`
export const BannerExplore = styled.div`
  font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin: 10px 0 0 21px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #FFFFFF;
    text-shadow: 0px 5px 12px rgba(203, 105, 193, 0.25);
`

export const StyledExploreArrowIcon = styled(ExploreArrowIcon)`
    color: white;
    margin-top: 12.5px;
`
/*NEW ARRIVALS*/

export const NewArrivalsBlock = styled.div`
  display: flex;
    flex-direction: column;
    margin-left: 140px;
`
export const NewArrivalsHeading = styled.p`
  width: 200px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    margin: 98px 0 48px 14.5px;
    letter-spacing: -1.2px;
`
export const StyledNewArrivals = styled.div`
  display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 1460px;
    height: fit-content;
`
export const StyledPagination = styled(Pagination)`
    margin-left: 500px;
    margin-bottom: 98px;
    width: 345px;
`
export const StyledNewArrivalsCard = styled.div`
   display: flex;
    flex-direction: column;
    width: 300px;
    height: 466px;
    margin: 0 30px 39px 0;
`
export const StyledCardImage = styled.div`
    position: relative;
`
export const StyledIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 315px;
    left: 250px;
`
export const StyledDescription = styled.div`
    width: 300px;
    height: 83px;
    display: flex;
    font-size: 0.8em;
    flex-direction: row;
    justify-content: space-between;
    border-top: none;
`
export const StyledCardInfo = styled.div`
    margin: 0;
    padding-bottom: 5px;
    line-height: 0.8;
`

export const StyledNewArrivalsNumber = styled.p`
     font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: rgba(0, 0, 0, 0.6);
`
export const StyledNewArrivalsName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: #000000;
`
export const StyledNewArrivalsPrice = styled.div`
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.2em;
`
/*CATEGORIES*/

export const StyledCategoriesBlock = styled.div`
     display: flex;
    flex-direction: column;
    margin-left: 140px;
`
export const StyledCategoriesHeading = styled.p`
    width: 178px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.2px;
`
export const StyledCategories = styled.p`
    width: 1460px;
    height: 666px;
    display: flex;
    flex-direction: row;
`
export const StyledCategoriesRight = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    left: 770px;
`
export const StyledCategoriesLeft = styled.div`
    position: relative;
`
export const StyledCategoriesLeftImage = styled.img`
    position: absolute;
    border-radius: 10px;
`
export const StyledCategoriesLeftTitle = styled.div`
   position: absolute;
    top: 30px;
    left: 10px;
    z-index: 1;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    letter-spacing: -3px;
`
export const StyledCategoriesExploreLeft = styled.div`
    z-index: 1;
    position: absolute;
    top: 126px;
    left: 10px;
    width: 50px;
    height: 23px;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #000000;
    text-shadow: 0px 5px 12px rgba(203, 105, 193, 0.25);
`
export const StyledaCategoriesRightPicture = styled.div`
    position: relative;
    margin-left: 30.5px;
    margin-bottom: 7px;
`
export const StyledaCategoriesRightTitle = styled.div`
   position: absolute;
    top: 54px;
    left: 10px;
    z-index: 1;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.8px;
`
export const StyledaCategoriesRightImage = styled.img`
    border-radius: 10px;

`
export const StyledaCategoriesExploreRight = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 36px;
    left: 10px;
    width: 50px;
    height: 23px;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #000000;
    text-shadow: 0px 5px 12px rgba(203, 105, 193, 0.25);
`
/*BLOG*/
export const StyledBlogBlock = styled.div`
     width: 1460px;
    height: 636px;
    margin-left: 140px;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
`
export const StyledBlogHeading = styled.p`
     margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.2px;
`
export const StyledBlogSec = styled.div`
       display: flex;

`
export const StyledBlogSection1 = styled.div`
    width: 410px;
    height: 540px;
    box-sizing: border - box;
    margin-right: 30px;
    background: #F1F4FA;
    border-radius: 10px;
    padding: 64px 20px 0 20px;
    margin-top: 48px;
    position: relative;
`
export const StyledBlogSection1Text = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -1.6px;
`
export const StyledIconDate = styled(AccessTimeIcon)`
    position: absolute;
    left: 21.7px;
    top: 497px;
`
export const StyledDate = styled.div`
   display: inline;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 48px;
    top: 500px;
`
export const StyledBlogSection2 = styled.div`
   width: 410px;
    height: 540px;
    box-sizing: border-box;
    margin-right: 30px;
    border-radius: 10px;
    margin-top: 48px;
    position: relative;
`
export const StyledBlogSection2Lower = styled.div`
   width: 410px;
    height: 270px;
    position: absolute;
    top: 270px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const StyledBlogSection3Lower = styled.div`
  width: 410px;
    height: 270px;
    position: absolute;
    top: 270px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const StyledBlogSection2Text = styled.p`
  height: 102px;
    left: 20px;
    right: 20px;
    padding: 0;
    margin: 0;
    padding: 64px 20px 0 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.8px;
`
export const StyledBlogSection3Text = styled.p`
   height: 102px;
    left: 20px;
    right: 20px;
    padding: 0;
    margin: 0;
    padding: 64px 20px 0 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.8px;
`
export const StyledBlogSection3 = styled.div`
   width: 410px;
    height: 540px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 48px;
    position: relative;
`
/*Subscription*/
export const StyledSubscription = styled.div`
   width: 1600px;
    height: 440px;
    display: flex;
`
export const StyledSubscriptionLeftSection = styled.div`
  width: 800px;
    height: 440px;
    background-color: rgba(45, 116, 255, 1);
    position: relative;
`
export const StyledSubscriptionTextSmall = styled.p`
  font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0;
    margin: 0;
    position: absolute;
    top: 91px;
    left: 155px;
`
export const StyledSubscriptionTextLarge = styled.p`
  font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -1.6px;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 599px;
    top: 141px;
    left: 155px;
`
export const StyledTextField = styled(TextField)`
    position: absolute;
    left: 155px;
    top: 291px;
    width: 280px;
    background-color: white;
    border-radius: 10px;
`
export const StyledSubscriptionButton = styled.button`
   box-sizing: content-box;
    width: 136px;
    height: 52px;
    position: absolute;
    top: 289px;
    left: 450px;
    border-radius: 10px;
    color: white;
    background-color: black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.6px;
`
export const StyledSubscriptionRightSection = styled.div`
  width: 800px;
    height: 440px;
`
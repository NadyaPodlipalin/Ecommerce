import { StyledRoute } from '../Product/Product.style'
import { StyledArticleDiv, StyledArticleHeading, StyledArticleHeading2, StyledArticleImage, StyledArticlePage, StyledArticleParagraph, StyledImage, StyledPicturesArticle } from './Blog.style'
import image from '../../../img/BlogPageImg/ArticlePage/article.png'
import image2 from '../../../img/BlogPageImg/ArticlePage/articlePage1.png'
import image3 from '../../../img/BlogPageImg/ArticlePage/articlePage2.png'
import { blogArticles } from '../../../utils/constants/blogConstants'
import Article from './Article'
import Subscription from '../Subscription'

const ArticlePage = () => {
    return (<>
        <StyledRoute style={{ marginLeft: 155 }}>Main / Blog / Article name</StyledRoute>
        <StyledArticlePage>
            <StyledArticleHeading>Why our Training club?</StyledArticleHeading>
            <StyledArticleParagraph>Reach your fitness goals with the Nike Training Club App (NTC). With access to 200+ free workouts and targeted training programmes, the NTC App will support you every step of the way. From invigorating yoga classes to bodyweight sessions with and without equipment, you'll find the right workout for you. Follow our Nike Master Trainers through varied classes, ranging from 5–50 minutes.
                Do them at home, in the gym, or outdoors – whenever and wherever you want. Plus, our free video library is constantly growing, so expect new videos to flow in.
                No matter what fitness level you're at, NTC will give you the tools you need to succeed.
            </StyledArticleParagraph>
            <StyledArticleHeading2>
                Workout From Home Routines
            </StyledArticleHeading2>
            <StyledArticleParagraph>
                We're taking home workouts to the next level. With NTC, you can move, sweat and get stronger right from your living room. Go all in by working out with NTC Live, exploring our library of free workouts and accessing expert advice. Plus, you'll be joining a whole community of other home athletes.
            </StyledArticleParagraph>
            <StyledArticleImage src={image} />
            <StyledArticleParagraph>
                If the gym is where you like to sweat, you need an app that keeps you feeling challenged. With access to training plans and expert help, you can work on your fitness and strength knowing you're in good hands. NTC features hours of workouts, from cardio to targeted strength training – with the possibility to leverage full gym equipment when it's available to you. It's not just a tracker, it's your new favourite coach.
            </StyledArticleParagraph>
            <StyledArticleHeading2>
                Flexible Training Programmes Tailored to You
            </StyledArticleHeading2>
            <StyledArticleParagraph>
                Start training with a personal plan that guides you while adjusting to your progress, schedule and other activities. With NTC, you get access to 4–6-week training plans. Whether you use a full gym or are training from the comfort of your home, there's a routine that'll fit you and your schedule so that you can reach your goals.
                Our multi-week programmes don't just guide you through regular workouts, they include advice on wellness and nutrition too.* No matter what kind of athlete you are, you'll get everything you need to improve your fitness and stay on track. Each programme has been designed for specific results, so if you're hoping to build strength, get leaner or gain more power, you'll know what to expect. Work out with NTC at home or use it as a weight training app in the gym to help you make the most of your equipment.
            </StyledArticleParagraph>
        </StyledArticlePage>
        <StyledPicturesArticle>
            <StyledImage src={image2} alt="pic" />
            <StyledImage src={image3} alt="pic" />
        </StyledPicturesArticle>
        <StyledArticleDiv>
            {blogArticles.map((item, index) => {
                if (index === 2 || index === 4) {
                    return <Article item={item} position={index + 1} key={index} />
                } else return null;
            }
            )}
        </StyledArticleDiv>
        <Subscription />
    </>
    )
}

export default ArticlePage
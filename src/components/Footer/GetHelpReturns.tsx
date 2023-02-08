import React from 'react'
import { StyledReturns, StyledReturnsHeading, StyledReturnsParagraph } from './Footer.style'

const GetHelpReturns = () => {
    return (
        <StyledReturns>
            <StyledReturnsHeading>
                RETURNS & EXCHANGES
            </StyledReturnsHeading>
            <StyledReturnsParagraph>
                Orders can be returned within 30 days of purchase. We will gladly accept unworn, unwashed, unaltered or unused merchandise in sellable condition for a full refund within this time frame. Please allow 2 to 4 business days to process the return once it’s received. You will be notified via email once the refund has been issued!
                We are not responsible for any lost returns. We recommend a shipping method with a proof of delivery or tracking number.
                We currently do not generate return labels for international shipments, customers will be responsible for return shipments & cost.
                We do not offer exchanges or price-matching at this time. Please follow the return policy steps for the items you wish to exchange and visit us to submit a new order for your new items.
                All bodysuits, underwear, or items marked "Final Sale" are considered final sale and cannot be returned once purchased. Aloyoga.com does not accept returns for third-party retailers.
            </StyledReturnsParagraph>
        </StyledReturns>
    )
}

export default GetHelpReturns
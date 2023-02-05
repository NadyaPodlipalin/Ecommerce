import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { SidebarMenu } from '../../../utils/types';
import { StyledFormControlLabel, StyledMenuItem } from './Product.style';

interface Props {
    item: SidebarMenu
}
const AccordionElement = ({ item }: Props) => {
    if (item.name === 'Category') {
        return (
            < Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.items.map((item) => {
                        return <StyledMenuItem>{item}</StyledMenuItem>
                    })}
                </AccordionDetails>
            </Accordion >
        );
    } else return (
        < Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    {item.items.map((item) => {
                        return <StyledFormControlLabel control={<Checkbox />} label={item} />
                    })}
                </FormGroup>
            </AccordionDetails>
        </Accordion >
    )
}

export default AccordionElement
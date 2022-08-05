import { Accordion, AccordionDetails, AccordionSummary, Drawer, List, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Tag } from "../../../Store/Interfaces/FilterInterfaces/filterInterfaces";
import FilterTagItem from "./FilterTagItem/FilterTagItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterSelectedTagItem from "./FilterSelectedTagItem/FilterSelectedTagItem";


interface Props {
    tags: Tag[];
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    selectedTags: string[];
    updateSelectedTags: (tagId: string) => void;
    removeSelectedTag: (tagId: string) => void;
}

const Filter: React.FC<Props> = (props) => {
    return (
        <Drawer anchor="right" open={props.isOpen} onClose={() => {props.setOpen(!props.isOpen)}}>
            <Typography variant="h4" component="h4" sx={{textAlign: "center", width: "500px", mt: "20px"}}>
                Filter
            </Typography>

            <Accordion sx={{width: "500px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Select Tags</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {props.tags.map((tag: Tag) => (
                        <FilterTagItem tag={tag} updateSelectedTags={props.updateSelectedTags} />
                    ))}
                </AccordionDetails>
            </Accordion>

            <Typography variant="h5" component="h5" sx={{textAlign: "center", mt: "20px"}}>
                Selected tags
            </Typography>
            
            <List>
                {props.selectedTags.map((tagId: string) => (
                    <FilterSelectedTagItem tagId={tagId} tags={props.tags} removeSelectedTag={props.removeSelectedTag} />
                ))}
            </List>
        </Drawer>
    )
}

export default Filter;
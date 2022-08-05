import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, List, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Tag } from "../../../Store/Interfaces/filterInterfaces";
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
            <Box sx={{width: "500px", p: "20px"}}>
                <Typography variant="h4" component="h4" sx={{textAlign: "center"}}>
                    Filter
                </Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>Select tags</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.tags.map((tag: Tag) => (
                            <FilterTagItem tag={tag} updateSelectedTags={props.updateSelectedTags} key={tag.id}/>
                        ))}
                    </AccordionDetails>
                </Accordion>

                <Typography variant="h5" component="h5" sx={{textAlign: "center", mt: "20px"}}>
                    Selected tags
                </Typography>

                <List>
                    {props.selectedTags.length === 0 ? 
                    <Typography variant="body1" component="p">You didn't choose tags</Typography>: null}

                    {props.selectedTags.map((tagId: string) => (
                        <FilterSelectedTagItem tagId={tagId} tags={props.tags} removeSelectedTag={props.removeSelectedTag} 
                                                key={tagId} />
                    ))}
                </List>
            </Box>
            
        </Drawer>
    )
}

export default Filter;
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, List, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Tag } from "../../../Store/Interfaces/filterInterfaces";
import FilterTagItem from "./FilterTagItem/FilterTagItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterSelectedTagItem from "./FilterSelectedTagItem/FilterSelectedTagItem";
import { paginationActionType } from "../MainPageContainer";


interface Props {
    tags: Tag[];
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    selectedTags: string[];
    updateSelectedTags: (tagId: string) => void;
    removeSelectedTag: (tagId: string) => void;
    getTitlesByTags: (tags: string[]) => void;
    setPaginationAction: React.Dispatch<React.SetStateAction<paginationActionType>>;
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
                    <Typography variant="body1" component="p" sx={{height: "42px"}}>You didn't choose tags</Typography>: null}

                    {props.selectedTags.map((tagId: string) => (
                        <FilterSelectedTagItem tagId={tagId} tags={props.tags} removeSelectedTag={props.removeSelectedTag} 
                                                key={tagId} />
                    ))}
                </List>
                <Button variant="contained" 
                        onClick={() => {
                            props.getTitlesByTags(props.selectedTags);
                            props.setOpen(false);
                            props.setPaginationAction(paginationActionType.FILTER);
                        }} 
                        disabled={!Boolean(props.selectedTags.length)}>
                    Search
                </Button>
            </Box>
            
        </Drawer>
    )
}

export default Filter;
import { Chip, Drawer, List } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { Tag } from "../../../Store/Interfaces/MainInterfaces/mainInterfaces";


interface Props {
    tags: Tag[];
    setChosenTags: Dispatch<SetStateAction<string[]>>;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Filter: React.FC<Props> = (props) => {
    return (
        <Drawer anchor="right" open={props.isOpen} onClose={() => {props.setOpen(!props.isOpen)}}>
            <List sx={{width: "500px"}}>
                {props.tags.map((tag: Tag) => (
                    <Chip label={tag.attributes.name.en} sx={{m: "5px"}}/>
                ))}
            </List>
        </Drawer>
    )
}

export default Filter;
import { Chip } from "@mui/material";
import React from "react";
import { Tag } from "../../../../Store/Interfaces/FilterInterfaces/filterInterfaces";


interface Props {
    tag: Tag;
    updateSelectedTags: (tagId: string) => void;
}

const FilterTagItem: React.FC<Props> = (props) => {
    return (
        <Chip label={props.tag.attributes.name.en} sx={{margin: "5px"}} 
              onClick={() => props.updateSelectedTags(props.tag.id)}/>
    )
}

export default FilterTagItem;
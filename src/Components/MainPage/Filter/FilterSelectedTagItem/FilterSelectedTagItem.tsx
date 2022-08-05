import { Chip } from "@mui/material";
import React from "react";
import { Tag } from "../../../../Store/Interfaces/FilterInterfaces/filterInterfaces";


interface Props {
    tags: Tag[];
    tagId: string;
    removeSelectedTag: (tagId: string) => void;
}

const FilterSelectedTagItem: React.FC<Props> = (props) => {
    let selectedTag: string = "";
    
    props.tags.forEach((tag: Tag) => {
        if (props.tagId === tag.id) {
            selectedTag = tag.attributes.name.en;
        }
    })

    if (selectedTag === "") return null;
    return <Chip label={selectedTag} variant="outlined" color="success" 
                 onClick={() => props.removeSelectedTag(props.tagId)} />;
}

export default FilterSelectedTagItem;
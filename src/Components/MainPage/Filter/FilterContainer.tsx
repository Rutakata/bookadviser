import React, { Dispatch, SetStateAction, useEffect } from "react";
import { connect } from "react-redux";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { getTags, updateSelectedTags, removeSelectedTag } from "../../../Store/Reducers/filterReducer";
import { getTitlesByTags } from "../../../Store/Reducers/mainReducer";
import { paginationActionType } from "../MainPageContainer";
import Filter from "./Filter";


interface Props {
    getTags: () => void;
    updateSelectedTags: (tagId: string) => void;
    removeSelectedTag: (tagId: string) => void;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    getTitlesByTags: (tags: string[]) => void;
    setPaginationAction: React.Dispatch<React.SetStateAction<paginationActionType>>;
}


const FilterContainer: React.FC<Props> = (props) => {
    let { tags, selectedTags } = useTypedSelector(state => state.filter)

    useEffect(() => {
        props.getTags();
    }, [props])

    return <Filter isOpen={props.isOpen} setOpen={props.setOpen} tags={tags} 
                   selectedTags={selectedTags} updateSelectedTags={props.updateSelectedTags} 
                   removeSelectedTag={props.removeSelectedTag} getTitlesByTags={props.getTitlesByTags} 
                   setPaginationAction={props.setPaginationAction}/>
}

export default connect(null, { getTags, updateSelectedTags, removeSelectedTag, getTitlesByTags })(FilterContainer);
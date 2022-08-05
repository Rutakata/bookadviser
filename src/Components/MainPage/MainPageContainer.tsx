import React, { useState } from "react";
import MainPage from "./MainPage";
import { getTitles } from "../../Store/Reducers/mainReducer";
import { getTags } from "../../Store/Reducers/filterReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { updateSelectedTags } from "../../Store/Reducers/filterReducer";


interface Props {
    getTitles: (search: string) => void;
    getTags: () => void;
    updateSelectedTags: (tagId: string) => void;
}

const MainPageContainer = (props: Props) => {
    let { titles, loading } = useTypedSelector(state => state.mainPage);
    let [ searchValue, setSearchValue ] = useState("");
    let [ isOpen, setOpen ] = useState<boolean>(false);
    
    let handleSearch = (searchRequest: string) => {
        setSearchValue(searchRequest);
        if (searchRequest !== "") {
            props.getTitles(searchRequest);
        }
    }

    return <MainPage titles={titles} handleSearch={handleSearch} searchValue={searchValue} 
                     loading={loading} isOpen={isOpen} setOpen={setOpen} />
}


export default connect(null, { getTitles, getTags, updateSelectedTags })(MainPageContainer);
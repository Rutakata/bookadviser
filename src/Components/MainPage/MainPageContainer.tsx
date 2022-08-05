import React, { useState } from "react";
import MainPage from "./MainPage";
import { getTitles, setSearchValue, getTitlesByTags } from "../../Store/Reducers/mainReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


interface Props {
    getTitles: (search: string, page?: number) => void;
    setSearchValue: (searchValue: string) => void;
    getTitlesByTags: (tags: string[], page?: number) => void;
}

export enum paginationActionType {
    SEARCH = "SEARCH",
    FILTER = "FILTER"
}

const MainPageContainer = (props: Props) => {
    let { titles, loading, total, searchValue } = useTypedSelector(state => state.mainPage);
    let { selectedTags } = useTypedSelector(state => state.filter)
    let [ isOpen, setOpen ] = useState<boolean>(false);
    let [ paginationAction, setPaginationAction ] = useState(paginationActionType.SEARCH);
    
    let handleSearch = (searchRequest: string) => {
        props.setSearchValue(searchRequest);
        setPaginationAction(paginationActionType.SEARCH)
        // if (searchRequest !== "") {
        //     props.getTitles(searchRequest);
        // }
    }

    let handlePageChange = (searchValue: string, selectedTags: string[], page: number) => {
        if (paginationAction === paginationActionType.SEARCH) {
            props.getTitles(searchValue, page);
        }else {
            props.getTitlesByTags(selectedTags, page);
        }
        
    }

    return <MainPage titles={titles} handleSearch={handleSearch} searchValue={searchValue} 
                     loading={loading} isOpen={isOpen} setOpen={setOpen} total={total} 
                     handlePageChange={handlePageChange} paginationAction={paginationAction} 
                     setPaginationAction={setPaginationAction} selectedTags={selectedTags} 
                     getTitles={props.getTitles} />
}


export default connect(null, { getTitles, setSearchValue, getTitlesByTags })(MainPageContainer);
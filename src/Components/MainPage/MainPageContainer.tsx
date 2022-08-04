import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import { getTitles, getTags } from "../../Store/Reducers/mainReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


interface Props {
    getTitles: (search: string) => void;
    getTags: () => void;
}

const MainPageContainer = (props: Props) => {
    let { titles, loading, tags } = useTypedSelector(state => state.mainPage);
    let [ searchValue, setSearchValue ] = useState("");
    let [ chosenTags, setChosenTags ] = useState<string[]>([]);
    let [ isOpen, setOpen ] = useState<boolean>(false);

    useEffect(() => {
        props.getTags();
    }, [props])
    
    let handleSearch = (searchRequest: string) => {
        setSearchValue(searchRequest);
        props.getTitles(searchRequest);
    }

    return <MainPage titles={titles} handleSearch={handleSearch} searchValue={searchValue} 
                loading={loading} tags={tags} setChosenTags={setChosenTags} isOpen={isOpen} 
                setOpen={setOpen} />
}


export default connect(null, { getTitles, getTags })(MainPageContainer);
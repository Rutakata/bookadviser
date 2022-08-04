import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import { getTitles, getTags } from "../../Store/Reducers/mainReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


interface Props {
    getTitles: (search: string) => void;
    getTags: () => void;
}

const MainContainer = (props: Props) => {
    let { titles, loading } = useTypedSelector(state => state.mainPage);
    let [ searchValue, setSearchValue ] = useState("");

    useEffect(() => {
        props.getTags();
    }, [])
    
    let handleSearch = (searchRequest: string) => {
        setSearchValue(searchRequest);
        props.getTitles(searchRequest);
    }

    return <MainPage titles={titles} handleSearch={handleSearch} searchValue={searchValue} 
                loading={loading}/>
}


export default connect(null, { getTitles, getTags })(MainContainer);
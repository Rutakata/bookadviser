import React, { useState } from "react";
import MainPage from "./MainPage";
import { getTitles } from "../../Store/Reducers/mainReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


interface Props {
    getTitles: (search: string) => void;
}

const MainContainer = (props: Props) => {
    let { titles, loading } = useTypedSelector(state => state.mainPage);
    let [ searchValue, setSearchValue ] = useState("");
    
    let handleSearch = (searchRequest: string) => {
        setSearchValue(searchRequest);
        props.getTitles(searchRequest);
    }

    return <MainPage titles={titles} handleSearch={handleSearch} searchValue={searchValue} 
                loading={loading}/>
}


export default connect(null, { getTitles })(MainContainer);
import React, { useState } from "react";
import Main from "./Main";
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
        props.getTitles(searchRequest);
    }

    // useEffect(() => {
    //     props.getTitles(""); 
    // }, [props])

    return <Main titles={titles} handleSearch={handleSearch} setSearchValue={setSearchValue} searchValue={searchValue} 
                loading={loading}/>
}


export default connect(null, { getTitles })(MainContainer);
import React, { useEffect } from "react";
import Main from "./Main";
import { getTitles } from "../../Store/Reducers/mainReducer";
import { connect } from "react-redux";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


interface Props {
    getTitles: () => void;
}

function MainContainer(props: Props) {
    let { titles, loading } = useTypedSelector(state => state.mainPage);
    
    // let handleSearch = (searchRequest: string) => {
    //     props.getTitles()
    // }

    useEffect(() => {
        props.getTitles(); 
    }, [props])

    if (loading) {
        return <div>Loading...</div>
    }

    return <Main titles={titles}/>
}


export default connect(null, { getTitles })(MainContainer);
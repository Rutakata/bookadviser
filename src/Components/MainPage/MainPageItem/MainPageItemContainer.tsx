import React, { useEffect, useState } from "react";
import MainPageItem from "./MainPageItem";
import { TitleApi } from "../../../API/api";
import { Title } from "../../../Store/Interfaces/mainInterfaces";


interface Props {
    titleData: Title;
}

const MainPageItemContainer = (props: Props) => {    
    let [cover, setCover] = useState<string>("");
    let [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function requestCover() {
            setLoading(true);
            let response = await TitleApi.getTitleCover(props.titleData.id);
            setCover(response.data.data[0].attributes.fileName);
            setLoading(false);
        }

        requestCover();
    }, [props.titleData.id]);

    return <MainPageItem titleData={props.titleData} titleCover={`https:/uploads.mangadex.org/covers/${props.titleData.id}/${cover}`} 
                         loading={loading} />;
}


export default MainPageItemContainer;
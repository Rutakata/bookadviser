import React, { useEffect, useState } from "react";
import MainPageItem from "./MainPageItem";
import { TitleApi } from "../../../API/api";
import { TitleData } from "../../Common/TitlePage/Title";
//import { Grid, Typography } from "@mui/material";


interface Props {
    titleData: TitleData;
}

const MainPageItemContainer = (props: Props) => {    
    let [cover, setCover] = useState<string>("");

    useEffect(() => {
        async function requestCover() {
            let response = await TitleApi.getTitleCover(props.titleData.id);
            setCover(response.data.data[0].attributes.fileName);
        }

        requestCover();
    }, [props.titleData.id]);

    return <MainPageItem titleData={props.titleData} titleCover={`https:/uploads.mangadex.org/covers/${props.titleData.id}/${cover}`} />;
}


export default MainPageItemContainer;
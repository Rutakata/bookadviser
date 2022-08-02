import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TitleApi } from "../../../API/api";
import Loader from "../Loader";
import Title, { TitleData } from "./Title";


const TitleContainer: React.FC = () => {
    let [titleData, setTitleData] = useState<TitleData>();
    let [titleCover, setTitleCover] = useState<string>();
    let {titleId} = useParams<string>();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        let requestTitle = async(titleId: string | undefined) => {
            if (typeof (titleId) !== "undefined") {
                let response = await TitleApi.getTitleData(titleId);
                let cover = await TitleApi.getTitleCover(titleId);
                setTitleData(response.data.data);
                setTitleCover(cover.data.data[0].attributes.fileName);
            }
        }

        requestTitle(titleId);
    }, [titleId])
    
    if (!titleData) return <Loader />
    if (!titleCover) return <Loader />
    return <Title titleData={titleData} titleCover={`https://uploads.mangadex.org/covers/${titleData.id}/${titleCover}`} />
}

export default TitleContainer;
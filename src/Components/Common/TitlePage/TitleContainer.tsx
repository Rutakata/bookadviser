import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TitleApi } from "../../../API/api";
import { Title } from "../../../Store/Interfaces/mainInterfaces";
import Loader from "../Loader";
import TitlePage from "./Title";


const TitleContainer: React.FC = () => {
    let [titleData, setTitleData] = useState<Title>();
    let [titleCover, setTitleCover] = useState<string>();
    let {titleId} = useParams<string>();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        let requestTitle = async(titleId: string | undefined) => {
            if (typeof (titleId) !== "undefined") {
                try {
                    let response = await TitleApi.getTitleData(titleId);
                    let cover = await TitleApi.getTitleCover(titleId);
                    setTitleData(response.data.data);
                    setTitleCover(cover.data.data[0].attributes.fileName);
                }catch(e) {
                    console.error(e);
                }
            }
        }

        requestTitle(titleId);
    }, [titleId])
    
    if (!titleData) return <Loader />
    return <TitlePage titleData={titleData} 
                      titleCover={`https://uploads.mangadex.org/covers/${titleData.id}/${titleCover}`} />
}

export default TitleContainer;
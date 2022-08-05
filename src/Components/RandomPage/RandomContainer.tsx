import { TitleApi } from "../../API/api";
import React, { useEffect, useState } from "react";
import TitlePage from "../Common/TitlePage/Title";
import Loader from "../Common/Loader";
import { Title } from "../../Store/Interfaces/mainInterfaces";


const RandomContainer = () => {
    const [titleData, setTitleData] = useState<Title>();
    const [titleCover, setTitleCover] = useState<string>();

    useEffect(() => {
        const requestRandomTitle = async () => {
            try {
                let titleData = await TitleApi.getRandomTitle();
                setTitleData(titleData.data.data);
                let cover = await TitleApi.getTitleCover(titleData.data.data.id);
                setTitleCover(cover.data.data[0].attributes.fileName);
            } catch (e) {
                console.error(e)
            }
        }

        requestRandomTitle();
    }, []);

    if (!titleData) return <Loader />
    return <TitlePage titleData={titleData} titleCover={`https://uploads.mangadex.org/covers/${titleData.id}/${titleCover}`}/>
}

export default RandomContainer;
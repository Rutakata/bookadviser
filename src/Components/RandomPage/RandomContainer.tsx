import { TitleApi } from "../../API/api";
import React, { useEffect, useState } from "react";
import Title, { TitleData } from "../Common/TitlePage/Title";
import Loader from "../Common/Loader";


const RandomContainer = () => {
    const [titleData, setTitleData] = useState<TitleData>();
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
    return <Title titleData={titleData} titleCover={`https://uploads.mangadex.org/covers/${titleData.id}/${titleCover}`}/>
}

export default RandomContainer;
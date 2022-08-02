import { MainApi, RandomApi } from "../../API/api";
import React, { useEffect, useState } from "react";
import RandomItem from "./RandomItem";


export interface RandomTitle {
    id: string;
    type: string;
    attributes: {
        title: {
            en: string;
        },
        description: {
            en: string;
        }
    }
}


const RandomContainer = () => {
    const [randomTitle, setRandomTitle] = useState<RandomTitle>();
    const [titleCover, setTitleCover] = useState<string>();

    useEffect(() => {
        const requestRandomTitle = async () => {
            let response = await RandomApi.getRandomTitle();
            let cover = await MainApi.getTitleCover(response.data.data.id);
            setRandomTitle(response.data.data);
            setTitleCover(cover.data.data[0].attributes.fileName);
        }

        requestRandomTitle();
    }, []);

    if (!randomTitle) return <div>loading...</div>

    return (
        <RandomItem randomTitle={randomTitle} titleCover={`https://uploads.mangadex.org/covers/${randomTitle.id}/${titleCover}`}/>
    )
}

export default RandomContainer;
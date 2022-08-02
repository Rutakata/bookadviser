import React, { useEffect, useState } from "react";
import TitleItem from "./TitleItem";
import { MainApi } from "../../../API/api";
//import { Grid, Typography } from "@mui/material";


interface Props {
    titleName: string;
    titleDescription: string;
    titleId: string;
    titleCover: string;
}

export interface Cover {
    id: string;
    type: string;
    attributes: {
        fileName: string;
    }
}

const TitleItemContainer = (props: Props) => {    
    let [cover, setCover] = useState<Cover>();
    //let [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function requestCover() {
            //setLoading(true);
            let response = await MainApi.getTitleCover(props.titleId)
            setCover(response.data.data[0]);
            //setLoading(false);
        }
        requestCover();
    }, [props.titleId]);

    let titleDesciption:string = props.titleDescription ? props.titleDescription.length > 200 ? 
                                `${props.titleDescription.slice(0, 201)}...`
                                : props.titleDescription
                                : "No description";

    // if (loading) return <Grid item xs={3}>
    //                         <Typography variant="h6" component="h6" sx={{textAlign: "center"}}>
    //                             Loading...
    //                         </Typography>
    //                     </Grid>;

    return <TitleItem titleName={props.titleName} titleDescription={titleDesciption} 
                        titleCoverLink={`https:/uploads.mangadex.org/covers/${props.titleId}/${cover?.attributes.fileName}`} />;
}


export default TitleItemContainer;
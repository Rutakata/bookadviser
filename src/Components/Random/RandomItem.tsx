import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { RandomTitle } from "./RandomItemContainer";


interface Props {
    randomTitle: RandomTitle,
    titleCover: string;
}

const RandomItem: React.FC<Props> = (props) => {
    console.log(props.titleCover);
    
    return (
        <Container sx={{minHeight: "800px"}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">Random anime</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h6">{props.randomTitle.attributes.title.en}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={props.titleCover} alt={props.randomTitle.attributes.title.en} height="500px"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RandomItem;
import { Grid, Typography } from "@mui/material";
import React from "react";


interface Props {
    titleName: string;
    titleDescription: string;
}

function TitleItem(props: Props) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h6">
                {props.titleName}
            </Typography>
            <Typography variant="body1" component="p">
                {props.titleDescription ? props.titleDescription: "No description"}
            </Typography>
        </Grid>
    )
}

export default TitleItem
import { Grid, Typography } from "@mui/material";
import React from "react";


interface Props {
    titleName: string;
    titleDescription: string;
}

function TitleItem(props: Props) {
    return (
        <Grid item xs={3}>
            <Typography variant="h6" component="h6">
                {props.titleName}
            </Typography>
            <Typography variant="body1" component="p">
                {props.titleDescription}
            </Typography>
        </Grid>
    )
}

export default TitleItem
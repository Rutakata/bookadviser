import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";


interface Props {
    titleName: string;
    titleDescription: string;
    titleCoverLink: string;
}

function TitleItem(props: Props) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="500"
                    image={props.titleCoverLink}
                    alt={props.titleName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.titleName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.titleDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default TitleItem
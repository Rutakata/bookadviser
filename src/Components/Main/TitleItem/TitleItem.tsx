import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";


interface Props {
    titleName: string;
    titleDescription: string;
    titleCover: string;
    titleId: string;
}

function TitleItem(props: Props) {
    let cover = `https://uploads.mangadex.org/covers/${props.titleId}/${props.titleCover}`;
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            {/* <Typography variant="h6" component="h6" sx={{overflow: "hidden", width: "100%"}}>
                {props.titleName}
            </Typography>
            <Typography variant="body1" component="p" sx={{overflow: "hidden", width: "100%"}}>
                {props.titleDescription ? props.titleDescription: "No description"}
            </Typography> */}

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={cover}
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
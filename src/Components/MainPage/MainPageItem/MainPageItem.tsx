import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { TitleData } from "../../Common/TitlePage/Title";


interface Props {
    titleData: TitleData;
    titleCover: string;
}

function MainPageItem(props: Props) {
    let titleDescription: string = "";

    if (props.titleData.attributes.description.en) {
        if (props.titleData.attributes.description.en.length > 150) {
            titleDescription = `${props.titleData.attributes.description.en.slice(0, 201)}...`;
        } else {
            titleDescription = props.titleData.attributes.description.en;
        }
    } else {
        titleDescription = "No description";
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="500"
                    image={props.titleCover}
                    alt={props.titleData.attributes.title.en}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.titleData.attributes.title.en}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {titleDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">
                        <NavLink to={`/title/${props.titleData.id}`}>
                            Learn more
                        </NavLink>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default MainPageItem;
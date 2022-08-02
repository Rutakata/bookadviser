import { CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


interface Props {
    titleData: TitleData,
    titleCover: string;
}

type Tag = {
    attributes: {
        name: {
            en: string;
        }
    }
}

export interface TitleData {
    id: string;
    type: string;
    attributes: {
        title: {
            en: string;
        },
        description: {
            en: string;
        },
        tags: Tag[]
    }
}


const Title: React.FC<Props> = (props) => {
    return (
       <Container sx={{minHeight: "800px"}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">{props.titleData.attributes.title.en}</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <CardMedia
                        component="img"
                        image={props.titleCover}
                        alt={props.titleData.attributes.title.en}
                        
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <Typography variant="body1" component="p">
                        {props.titleData.attributes.description.en ? 
                        props.titleData.attributes.description.en
                        : "No description"}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4} spacing={2}>
                    <Stack direction="row" spacing={1} sx={{overflowX: "auto"}}>
                        {props.titleData.attributes.tags.map((tag: Tag) => (
                            <Chip label={tag.attributes.name.en}/>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
       </Container>
    )
}

export default Title;